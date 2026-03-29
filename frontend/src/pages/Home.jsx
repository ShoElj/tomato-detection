import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Leaf01Icon, 
  Shield01Icon, 
  ZapIcon, 
  AiMagicIcon, 
  Upload01Icon, 
  Search01Icon, 
  Tick01Icon,
  ArrowRight01Icon,
  ViewIcon,
  Analytics01Icon,
  AlertCircleIcon
} from 'hugeicons-react';

const features = [
  { icon: Shield01Icon, title: 'NEURAL DIAGNOSIS', desc: 'MobileNetV2 transfer learning model trained on 18,000+ high-fidelity samples.', color: 'text-green-400', bg: 'bg-green-500/10' },
  { icon: ZapIcon, title: 'QUANTUM SPEED', desc: 'Accelerated local inference delivering comprehensive reports in under 2 seconds.', color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { icon: AiMagicIcon, title: 'EXPERT PROTOCOLS', desc: 'Actionable biological and chemical treatment advice for every cataloged pathogen.', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { icon: Analytics01Icon, title: 'EDGE ANALYTICS', desc: 'Optimized deployment for real-time field data processing and environmental scans.', color: 'text-blue-400', bg: 'bg-blue-500/10' },
];

const steps = [
  { num: '01', icon: Upload01Icon, title: 'INPUT DATA', desc: 'Capture or upload a leaf signature to our neural engine.' },
  { num: '02', icon: Search01Icon, title: 'DEEP SCAN', desc: 'Analyzing pixel-level pathogen markers and lesions.' },
  { num: '03', icon: Tick01Icon, title: 'RESULT ARCHIVE', desc: 'Access instant diagnosis and treatment strategy.' },
];

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b border-white/5 py-12 lg:py-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black px-4 py-2 rounded-2xl mb-8 uppercase tracking-[0.3em] shadow-lg shadow-green-500/5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
              SYSTEM ACTIVE · NEURAL ENGINE 2.0
            </span>
            <h1 className="text-6xl sm:text-8xl font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">
              Detect<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Pathogens</span><br />
              With AI
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-md font-medium opacity-80 italic">
              Protecting global harvests through sovereign deep-learning diagnostic systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/detect" className="group flex items-center gap-3 bg-green-500 hover:bg-green-400 text-slate-950 font-black px-10 py-5 rounded-3xl transition-all shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:scale-110 active:scale-95 text-lg tracking-tighter uppercase italic">
                <Leaf01Icon size={24} strokeWidth={2.5} /> ANALYZE NOW
              </Link>
              <Link to="/about" className="group flex items-center gap-3 bg-slate-900/50 hover:bg-slate-800 text-white font-black px-10 py-5 rounded-3xl transition-all border border-white/10 text-lg tracking-tighter uppercase italic">
                <ViewIcon size={24} strokeWidth={1.5} /> ARCHIVE
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block group">
             <div className="absolute inset-0 bg-green-500/20 rounded-[64px] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative rounded-[56px] overflow-hidden shadow-2xl border border-white/10 bg-slate-900 p-2">
              <img
                src="https://images.unsplash.com/photo-1590779033100-9f60705a2f3a?q=80&w=800&auto=format&fit=crop"
                alt="Neural Scan visualization"
                className="w-full h-[500px] object-cover rounded-[48px] brightness-75 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Scanning Interface Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                 <div className="flex justify-between items-start">
                    <div className="w-12 h-12 border-l-4 border-t-4 border-green-500 rounded-tl-2xl shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                    <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                       <p className="text-[10px] font-black text-green-400 tracking-widest uppercase italic">SCANNING... [88% ACCURACY]</p>
                    </div>
                    <div className="w-12 h-12 border-r-4 border-t-4 border-green-500 rounded-tr-2xl shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                 </div>
                 
                 <motion.div
                    animate={{ y: [-150, 150, -150] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-full h-[2px] bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.8)] z-20"
                 />

                 <div className="flex justify-between items-end">
                    <div className="w-12 h-12 border-l-4 border-b-4 border-green-500 rounded-bl-2xl shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                    <div className="w-12 h-12 border-r-4 border-b-4 border-green-500 rounded-br-2xl shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                 </div>
              </div>
            </div>
            
            {/* Floating result card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-slate-900 border border-white/10 backdrop-blur-2xl rounded-[32px] shadow-2xl p-6 flex items-center gap-5 w-80 ring-1 ring-white/5"
            >
              <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center border border-red-500/30">
                <AlertCircleIcon size={28} className="text-red-400" />
              </div>
              <div className="flex-grow">
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black italic mb-1">Neural Alert</p>
                <p className="text-sm font-black text-white italic tracking-tight uppercase">Late Blight Detected</p>
                <p className="text-[10px] font-bold text-red-500">CRITICAL RISK · 94% CONFIDENCE</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-slate-800" />
                <AiMagicIcon size={32} className="text-green-500" strokeWidth={1} />
                <div className="w-12 h-[1px] bg-slate-800" />
             </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">Neural Capabilities</h2>
            <p className="text-slate-500 font-bold tracking-[0.3em] uppercase text-xs">A military-grade diagnostic stack for modern agriculture</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div key={i} whileHover={{ y: -10, scale: 1.02 }} className="group bg-slate-900/40 border border-white/5 rounded-[40px] p-10 hover:bg-slate-800/80 hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center">
                <div className={`w-20 h-20 ${f.bg} rounded-[28px] flex items-center justify-center mb-8 border border-white/5 shadow-inner group-hover:scale-110 transition-transform`}>
                  <f.icon className={f.color} size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tighter uppercase italic">{f.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-300 transition-colors italic">"{f.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pipeline ─── */}
      <section className="py-24 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Neural Pipeline</h2>
              <p className="text-slate-500 font-bold tracking-widest text-xs uppercase">Quantum path from input to diagnostic report</p>
            </div>
            <div className="flex items-center gap-4 border-b-2 border-green-500/20 pb-2">
               <Tick01Icon size={20} className="text-green-500" />
               <span className="text-[10px] font-black text-slate-400 tracking-[0.5em] uppercase italic">Sequence Verified</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Connection Line */}
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block -translate-y-12" />
             
            {steps.map((s, i) => (
              <div key={i} className="group relative z-10 text-center">
                <motion.div 
                   whileHover={{ scale: 1.1 }}
                   className="relative w-28 h-28 mx-auto mb-8 cursor-pointer"
                 >
                  <div className="w-full h-full bg-slate-950 border border-white/10 rounded-[35px] flex items-center justify-center group-hover:border-green-500/50 shadow-2xl transition-all duration-500">
                    <s.icon className="text-slate-500 group-hover:text-green-400 transition-colors" size={40} strokeWidth={1} />
                  </div>
                  <span className="absolute -top-3 -right-3 w-10 h-10 bg-green-500 text-slate-950 text-xs font-black rounded-2xl flex items-center justify-center shadow-2xl border-4 border-slate-900">{s.num}</span>
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tighter uppercase italic">{s.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs mx-auto opacity-70 italic group-hover:opacity-100 transition-opacity">"{s.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sub-Footer ─── */}
       <section className="py-24 px-6 text-center">
          <div className="max-w-7xl mx-auto">
             <div className="flex items-center justify-center gap-6 mb-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                 <Search01Icon size={32} />
                 <div className="w-2 h-2 bg-slate-800 rounded-full" />
                 <Leaf01Icon size={32} />
                 <div className="w-2 h-2 bg-slate-800 rounded-full" />
                 <AiMagicIcon size={32} />
             </div>
             <p className="text-slate-600 font-black uppercase tracking-[0.5em] text-[10px] mb-4">Cognitive Bio-Archive System</p>
             <h4 className="text-white text-lg font-black tracking-tight italic uppercase opacity-80">"Securing the global food supply through sovereign neural architecture"</h4>
          </div>
       </section>
    </div>
  );
}
