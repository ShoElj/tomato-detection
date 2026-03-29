import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload01Icon, 
  Delete02Icon, 
  Search01Icon, 
  InformationCircleIcon, 
  Download01Icon, 
  Share01Icon, 
  Alert01Icon, 
  Tick01Icon, 
  AlertCircleIcon, 
  AiMagicIcon, 
  Database01Icon,
  Refresh01Icon,
  Image01Icon,
  ArrowRight01Icon,
  Analytics01Icon
} from 'hugeicons-react';
import { predictDisease } from '../utils/api';
import { formatDiseaseName, formatConfidence, getTopProbabilities } from '../utils/format';

export default function Detect() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const handleFile = (f) => {
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
    setError(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer?.files?.[0];
    if (f && f.type.startsWith('image/')) handleFile(f);
  };

  const clearAll = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  const analyze = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const data = await predictDisease(file);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Back-end link severed. Verify neural connection.');
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = () => {
    if (!result) return;
    const reportText = `TomatoGuard AI Diagnostic Report
------------------------------------
Timestamp: ${new Date().toLocaleString()}
Source: ${file?.name || 'Unknown'}

FINAL DIAGNOSIS: ${formatDiseaseName(result.disease)}
SYSTEM CONFIDENCE: ${formatConfidence(result.confidence)}
PATHOGEN STATUS: ${result.status}

TREATMENT PROTOCOLS:
${(Array.isArray(result.treatment) ? result.treatment : [result.treatment]).map(t => `- ${t}`).join('\n')}

PREVENTION STRATEGIES:
${(Array.isArray(result.prevention) ? result.prevention : [result.prevention]).map(p => `- ${p}`).join('\n')}

NEURAL PROBABILITIES:
${getTopProbabilities(result.probabilities, 5).map(p => `${p.name}: ${(p.value * 100).toFixed(1)}%`).join('\n')}

------------------------------------
Academic Verification: Rebuild 1.0 (2026)
`;
    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TomatoGuard_Report_${formatDiseaseName(result.disease).replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const topProbs = result ? getTopProbabilities(result.probabilities, 5) : [];
  const isHealthy = result?.status === 'Healthy';

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-medium pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-4 transition-all hover:translate-x-1 duration-300">
          <Database01Icon size={24} className="text-green-400" />
          <span className="text-green-400 text-sm font-black uppercase tracking-[0.2em]">Neural Input Channel 01</span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic leading-none">
          Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 font-black">Diagnostics</span>
        </h1>
        <p className="text-slate-400 max-w-2xl text-xl leading-relaxed mb-12 font-medium italic opacity-80">
          Neural network inference engine trained on 18,000+ high-fidelity leaf signatures.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* ─── LEFT: Input ─── */}
          <div className="group bg-slate-900 border border-white/10 rounded-[48px] p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                 <Image01Icon size={20} className="text-slate-500 group-hover:text-green-400 transition-colors" />
                 <span className="font-black text-slate-500 text-xs uppercase tracking-[0.2em] group-hover:text-slate-300 transition-colors">Capture Intake</span>
               </div>
               {file && (
                 <button onClick={clearAll} className="flex items-center gap-2 text-[10px] font-black uppercase text-red-400/60 hover:text-red-400 transition-colors tracking-widest">
                   <Delete02Icon size={14} /> SCRUB DATA
                 </button>
               )}
            </div>

            {!preview ? (
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => inputRef.current?.click()}
                className="group/drop border-2 border-dashed border-white/5 bg-white/5 rounded-[40px] py-20 flex flex-col items-center text-center hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-500 cursor-pointer relative"
              >
                <div className="w-20 h-20 bg-slate-800 rounded-[30px] flex items-center justify-center mb-6 shadow-2xl border border-white/10 group-hover/drop:scale-110 group-hover/drop:rotate-6 transition-all duration-500">
                  <Upload01Icon className="text-green-400" size={36} strokeWidth={1} />
                </div>
                <p className="text-xl font-black text-white mb-2 tracking-tight uppercase italic">Load Leaf Signature</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-8 px-10 leading-relaxed">DRAG DATASET ITEM OR BROWSE LOCAL VOLUMES</p>
                <span className="bg-green-500 text-slate-950 text-xs font-black uppercase tracking-[0.2em] px-10 py-5 rounded-3xl transition-all shadow-xl shadow-green-500/10 group-hover/drop:bg-green-400 group-hover/drop:scale-105 active:scale-95">Search Directory</span>
              </div>
            ) : (
              <div className="rounded-[40px] overflow-hidden border border-white/10 mb-8 relative group/preview">
                <img src={preview} alt="Neural Scan Source" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover/preview:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
                  <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-1">Source Identified</p>
                  <p className="text-sm font-black text-white italic truncate max-w-[200px]">{file?.name || 'GENERIC_ITEM.RAW'}</p>
                </div>
              </div>
            )}

            <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />

            <div className="flex gap-4">
              <button
                onClick={analyze}
                disabled={!file || loading}
                className={`flex-grow flex items-center justify-center gap-4 py-6 rounded-[32px] font-black text-[10px] uppercase tracking-[0.3em] transition-all shadow-2xl italic ${
                  !file || loading
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50 border border-white/5'
                    : 'bg-green-500 text-slate-950 hover:bg-green-400 active:scale-[0.95] shadow-green-500/20'
                }`}
              >
                {loading ? (
                  <><Refresh01Icon size={20} className="animate-spin" /> EXECUTING NEURAL SCAN...</>
                ) : (
                  <><Search01Icon size={20} strokeWidth={3} /> INITIALIZE ANALYSIS</>
                )}
              </button>
            </div>

            <div className="mt-10 bg-white/5 border border-white/5 rounded-3xl p-6 flex gap-4 transition-colors hover:border-green-500/20">
              <AiMagicIcon size={24} className="flex-shrink-0 text-green-400 animate-pulse" />
              <div>
                 <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-2">Inference Optimization Tip</p>
                 <p className="text-sm text-slate-400 italic font-medium leading-relaxed">"System accuracy peaks when leaf surface is isolated from noise and shadows. Neutral backgrounds recommended for pattern integrity."</p>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Output ─── */}
          <div className="h-full">
            <AnimatePresence mode="wait">
              {!result && !loading && !error && (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full min-h-[600px] flex flex-col items-center justify-center text-center p-12 bg-slate-900 border border-dashed border-white/10 rounded-[48px] shadow-2xl">
                  <div className="w-24 h-24 bg-white/5 rounded-[40px] flex items-center justify-center mb-8 border border-white/5 shadow-inner">
                    <Search01Icon className="text-slate-700" size={40} strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-600 uppercase italic tracking-tighter mb-2">Awaiting Stream</h3>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Inject a leaf signature to initialize detection</p>
                </motion.div>
              )}

              {loading && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full min-h-[600px] bg-slate-900 border border-white/10 rounded-[48px] shadow-2xl p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/5 backdrop-blur-3xl animate-pulse" />
                  <div className="relative w-32 h-32 mb-10">
                    <div className="absolute inset-0 border-[6px] border-white/5 rounded-[40px]" />
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} className="absolute inset-0 border-[6px] border-t-green-500 rounded-[40px] shadow-[0_0_20px_rgba(34,197,94,0.4)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <AiMagicIcon className="text-green-400" size={40} />
                    </div>
                  </div>
                  <h3 className="text-4xl font-black text-white mb-3 tracking-tighter uppercase italic">Neutral Scaning</h3>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Cross-referencing pixel signatures with bio-archive...</p>
                </motion.div>
              )}

              {error && !loading && (
                <motion.div key="error" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring' }} className="h-full min-h-[600px] bg-slate-900 border border-red-500/20 rounded-[48px] shadow-2xl p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-red-500/10 rounded-[40px] border border-red-500/20 flex items-center justify-center mb-8"><AlertCircleIcon className="text-red-500" size={48} strokeWidth={1} /></div>
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tighter uppercase italic">Inference Error</h3>
                  <p className="text-red-400/70 font-black uppercase tracking-widest text-xs max-w-xs leading-relaxed mb-10">"{error}"</p>
                  <button onClick={analyze} className="bg-white/5 border border-white/10 text-white font-black px-10 py-5 rounded-3xl hover:bg-white/10 transition-all uppercase tracking-widest text-xs italic active:scale-95">Re-Initialize Engine</button>
                </motion.div>
              )}

              {result && !loading && (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: 'spring', damping: 15 }} className="bg-slate-900 border border-white/10 rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.6)] p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-[120px] -mr-40 -mt-20 pointer-events-none" />
                  
                  {/* Header */}
                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <div>
                      <div className="flex gap-3 mb-4">
                        <span className={`text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-2xl shadow-2xl border ${isHealthy ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                          {isHealthy ? 'BIO-STATUS: HEALTHY' : 'PATHOGEN DETECTED'}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-2xl bg-white/5 text-slate-500 border border-white/5">ENGINE V4.2</span>
                      </div>
                      <h2 className="text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">{formatDiseaseName(result.disease)}</h2>
                    </div>
                    <div className="text-right flex-shrink-0 ml-6 hidden sm:block">
                      <div className="text-6xl font-black text-green-500 italic tracking-tighter leading-none">{formatConfidence(result.confidence)}</div>
                      <div className="text-[10px] uppercase font-black text-slate-500 tracking-[0.3em] mt-2">CONFIDENCE SCORE</div>
                    </div>
                  </div>

                  {/* Dynamic Indicators */}
                  <div className="grid sm:grid-cols-2 gap-8 mb-10 relative z-10">
                    <div className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all group/info">
                      <div className="flex items-center gap-3 font-black text-xs uppercase text-green-400 tracking-widest mb-6">
                        <AiMagicIcon size={16} className="group-hover/info:animate-bounce" /> NEURAL TREATMENT
                      </div>
                      <ul className="space-y-4">
                        {(Array.isArray(result.treatment) ? result.treatment : [result.treatment]).map((t, i) => (
                          <li key={i} className="flex gap-4 group/li">
                             <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 text-[10px] text-green-400 font-bold group-hover/li:bg-green-500 group-hover/li:text-slate-900 transition-all">{i+1}</div>
                             <p className="text-sm font-bold text-slate-400 tracking-tight leading-relaxed group-hover/li:text-slate-200">{t}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-amber-500/30 transition-all group/info">
                      <div className="flex items-center gap-3 font-black text-xs uppercase text-amber-500 tracking-widest mb-6">
                        <Alert01Icon size={16} /> DEFENSIVE PROTOCOLS
                      </div>
                      <ul className="space-y-4">
                        {(Array.isArray(result.prevention) ? result.prevention : [result.prevention]).map((p, i) => (
                          <li key={i} className="flex gap-4 group/li">
                             <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-[10px] text-amber-500 font-bold group-hover/li:bg-amber-500 group-hover/li:text-slate-900 transition-all">{String.fromCharCode(65 + i)}</div>
                             <p className="text-sm font-bold text-slate-400 tracking-tight leading-relaxed group-hover/li:text-slate-200">{p}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Probability Matrix */}
                  {topProbs.length > 0 && (
                    <div className="mb-10 relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <Analytics01Icon size={16} className="text-slate-500" />
                        <h4 className="text-[11px] uppercase font-black text-slate-500 tracking-[0.4em]">Inference Vector Matrix</h4>
                      </div>
                      <div className="space-y-6">
                        {topProbs.map((p, i) => (
                          <div key={i} className="group/prob">
                            <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-3 italic">
                              <span className="text-slate-400 group-hover/prob:text-white transition-colors">{p.name}</span>
                              <span className="text-green-400">{(p.value * 100).toFixed(1)}%</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.max(p.value * 100, 0.5)}%` }}
                                transition={{ duration: 1, delay: i * 0.1, ease: "circOut" }}
                                className={`h-full rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)] ${i === 0 ? 'bg-gradient-to-r from-green-600 to-green-400' : 'bg-slate-700 opacity-40'}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-10 border-t border-white/5 relative z-10">
                    <button
                      onClick={downloadReport}
                      className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-green-400 transition-all shadow-xl active:scale-95"
                    >
                      <Download01Icon size={18} /> GENERATE REPORT
                    </button>
                    <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 transition-all shadow-xl active:scale-95">
                      <Share01Icon size={18} /> EXTERNAL LINK
                    </button>
                    <button className="sm:ml-auto flex items-center gap-3 bg-green-500 text-slate-950 px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-green-500/20 hover:bg-green-400 active:scale-95 transition-all">
                      VERIFY DATA <ArrowRight01Icon size={18} strokeWidth={3} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Legal Channel */}
        <div className="mt-20 bg-slate-900 border border-white/5 rounded-[32px] p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all hover:bg-black/40">
           <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 animate-pulse border border-amber-500/20">
             <Alert01Icon size={32} className="text-amber-500" strokeWidth={1} />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase text-amber-500 tracking-[0.3em] mb-2 italic">Academic Security Protocol</p>
              <p className="text-sm text-slate-500 leading-relaxed font-bold italic opacity-60 group-hover:opacity-90 transition-opacity">
                "This system was engineered as a proof-of-concept for academic verification. While our neural model demonstrates high sensitivity, all findings must be corroborated by certified agricultural pathologists before strategic implementation. System integrity is dependent on capture fidelity."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
