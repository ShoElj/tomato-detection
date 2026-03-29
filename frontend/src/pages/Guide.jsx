import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search01Icon, 
  Cancel01Icon, 
  Shield01Icon, 
  Book02Icon, 
  Leaf01Icon, 
  ZapIcon, 
  InformationCircleIcon,
  BacteriaIcon,
  AiMagicIcon,
  CircleIcon
} from 'hugeicons-react';
import { Link } from 'react-router-dom';

const diseases = [
  {
    id: 1, name: 'Bacterial Spot', risk: 'High', emoji: '🦠', icon: BacteriaIcon,
    color: 'from-red-900/40 to-red-800/20 border-red-700/30',
    iconColor: 'text-red-400',
    summary: 'Tiny dark spots with yellow halos that eventually cause leaves to drop.',
    treatment: 'Remove infected leaves and apply a recommended bactericide or copper-based treatment.',
    prevention: 'Avoid overhead irrigation, improve field sanitation, and disinfect tools regularly.',
  },
  {
    id: 2, name: 'Early Blight', risk: 'Moderate', emoji: '🟤', icon: Leaf01Icon,
    color: 'from-amber-900/40 to-amber-800/20 border-amber-700/30',
    iconColor: 'text-amber-400',
    summary: 'Characterized by target-like concentric rings on older leaves near the soil.',
    treatment: 'Rotate crops annually, prune lower branches to increase airflow, and apply protective fungicides.',
    prevention: 'Ensure adequate spacing and keep foliage dry via drip irrigation.',
  },
  {
    id: 3, name: 'Late Blight', risk: 'High', emoji: '⚫', icon: Shield01Icon,
    color: 'from-gray-900/60 to-gray-800/30 border-gray-600/30',
    iconColor: 'text-gray-400',
    summary: 'Rapidly spreading dark water-soaked patches that can destroy crops in days.',
    treatment: 'Apply copper-based fungicides immediately. Remove and destroy infected debris.',
    prevention: 'Monitor weather during cool, wet periods. Use resistant varieties when possible.',
  },
  {
    id: 4, name: 'Leaf Mold', risk: 'Low', emoji: '🌫️', icon: CircleIcon,
    color: 'from-blue-900/30 to-blue-800/20 border-blue-700/30',
    iconColor: 'text-blue-400',
    summary: 'Fuzzy olive-green to gray growth on the undersides of tomato leaves.',
    treatment: 'Improve air circulation and keep humidity below 85%. Use resistant varieties.',
    prevention: 'Ventilate greenhouses properly and avoid overcrowding plants.',
  },
  {
    id: 5, name: 'Septoria Leaf Spot', risk: 'Moderate', emoji: '🔵', icon: InformationCircleIcon,
    color: 'from-indigo-900/30 to-indigo-800/20 border-indigo-700/30',
    iconColor: 'text-indigo-400',
    summary: 'Small circular spots with dark borders and gray or white centers.',
    treatment: 'Improve air circulation and use mulch to prevent soil splash.',
    prevention: 'Avoid overhead watering and remove plant debris after harvest.',
  },
  {
    id: 6, name: 'Spider Mites', risk: 'High', emoji: '🕷️', icon: ZapIcon,
    color: 'from-orange-900/40 to-orange-800/20 border-orange-700/30',
    iconColor: 'text-orange-400',
    summary: 'Tiny pests that cause yellow stippling and visible fine webbing between stems.',
    treatment: 'Increase humidity if possible. Use insecticidal soap or neem oil.',
    prevention: 'Regularly inspect undersides of leaves. Introduce beneficial predators.',
  },
  {
    id: 7, name: 'Target Spot', risk: 'Moderate', emoji: '🎯', icon: CircleIcon,
    color: 'from-yellow-900/30 to-yellow-800/20 border-yellow-700/30',
    iconColor: 'text-yellow-400',
    summary: 'Small brown necrotic spots that expand and show faint concentric rings.',
    treatment: 'Eliminate volunteer tomato plants and crop debris. Apply recommended fungicides.',
    prevention: 'Practice crop rotation every 2 years with non-solanaceous crops.',
  },
  {
    id: 8, name: 'Yellow Leaf Curl Virus', risk: 'High', emoji: '🌀', icon: AiMagicIcon,
    color: 'from-yellow-900/40 to-amber-800/20 border-yellow-700/30',
    iconColor: 'text-yellow-400',
    summary: 'Upward leaf curling and severe yellowing. Leads to significant fruit loss.',
    treatment: 'Control whitefly populations. Use reflective mulches and remove symptomatic plants.',
    prevention: 'Install insect-proof netting and use virus-free transplants.',
  },
  {
    id: 9, name: 'Mosaic Virus', risk: 'High', emoji: '🧩', icon: AiMagicIcon,
    color: 'from-purple-900/30 to-purple-800/20 border-purple-700/30',
    iconColor: 'text-purple-400',
    summary: 'Mottled patterns of light and dark green on leaves with stunted growth.',
    treatment: 'Remove and destroy infected plants. Use virus-free seeds.',
    prevention: 'Sanitize tools after working with tomatoes. Avoid tobacco products near plants.',
  },
  {
    id: 10, name: 'Healthy Leaf', risk: 'Healthy', emoji: '🌿', icon: Leaf01Icon,
    color: 'from-green-900/30 to-green-800/20 border-green-700/30',
    iconColor: 'text-green-400',
    summary: 'Vibrant, deep green foliage with no visible lesions, curling, or pests.',
    treatment: 'Maintain regular care: consistent watering, proper nutrients, and monitoring.',
    prevention: 'Continue good agricultural practices and routine scouting.',
  },
];

const riskBadge = (r) => {
  if (r === 'High') return 'bg-red-500/20 text-red-400 border border-red-500/30';
  if (r === 'Moderate') return 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
  if (r === 'Low') return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
  return 'bg-green-500/20 text-green-400 border border-green-500/30';
};

const filters = ['All', 'High Risk', 'Moderate Risk', 'Low Risk', 'Healthy'];

export default function Guide() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = diseases.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    if (activeFilter === 'All') return matchSearch;
    if (activeFilter === 'High Risk') return matchSearch && d.risk === 'High';
    if (activeFilter === 'Moderate Risk') return matchSearch && d.risk === 'Moderate';
    if (activeFilter === 'Low Risk') return matchSearch && d.risk === 'Low';
    if (activeFilter === 'Healthy') return matchSearch && d.risk === 'Healthy';
    return matchSearch;
  });

  return (
    <div className="bg-slate-900 min-h-screen">

      {/* ─── Hero Header ─── */}
      <section className="px-6 pt-20 pb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4 transition-all hover:translate-x-1 duration-300">
            <Book02Icon size={24} className="text-green-400" />
            <span className="text-green-400 text-sm font-black uppercase tracking-[0.2em]">Archive Encyclopedia</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 tracking-tighter uppercase italic">
            Disease <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Archive</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-xl leading-relaxed mb-10 font-medium">
            A comprehensive database of the most common tomato conditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="relative group">
              <Search01Icon size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-green-400 transition-colors" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search database..."
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-white placeholder-slate-600 rounded-3xl pl-14 pr-8 py-4 text-base focus:outline-none focus:ring-2 focus:ring-green-500/50 w-full sm:w-96 transition-all shadow-lg"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-[11px] font-black uppercase tracking-wider px-6 py-3 rounded-2xl border transition-all duration-300 ${
                    activeFilter === f
                      ? 'bg-green-500 text-slate-900 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] scale-105'
                      : 'bg-slate-800/30 text-slate-500 border-slate-700/50 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Disease Grid ─── */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <p className="text-slate-500 text-sm font-black uppercase tracking-widest">{filtered.length} ARCHIVE FILES MATCHED</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, type: 'spring', damping: 20 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelected(d)}
                className={`cursor-pointer group relative rounded-[40px] border bg-gradient-to-br transition-all duration-500 ${d.color} p-8 h-full flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
              >
                {/* Huge Icon Background Overlay */}
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  <d.icon size={120} strokeWidth={1} />
                </div>

                {/* Main Icon */}
                <div className="w-20 h-20 rounded-[30px] bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <d.icon size={48} strokeWidth={1.5} className={d.iconColor} />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-xl shadow-lg ${riskBadge(d.risk)}`}>
                    {d.risk === 'Healthy' ? 'HEALTHY' : `${d.risk} RISK`}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                  {d.name.split(' ').map((word, idx) => (
                    <span key={idx} className={idx === 0 ? 'text-white' : 'text-white/70 mr-2 underline decoration-green-500/30 decoration-4 underline-offset-4'}>
                      {word}
                    </span>
                  ))}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-8 flex-grow font-medium italic">
                  "{d.summary}"
                </p>
                
                <div className="flex items-center gap-3 text-xs font-black text-green-400 group-hover:gap-5 transition-all duration-500 border-t border-white/5 pt-6">
                  <span className="tracking-[0.3em]">EXPLORE CASE</span>
                  <ZapIcon size={18} fill="currentColor" />
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-32 rounded-[40px] border border-dashed border-slate-700 bg-slate-800/20">
              <div className="w-24 h-24 bg-slate-800 rounded-[30px] flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Search01Icon size={40} className="text-slate-600" strokeWidth={1} />
              </div>
              <p className="text-slate-300 text-2xl font-black italic mb-2 tracking-tight">Zero matches in current archive</p>
              <p className="text-slate-500 font-medium mb-8">Try adjusting your search sequence or filters</p>
              <button 
                onClick={() => { setSearch(''); setActiveFilter('All'); }} 
                className="bg-green-500 text-slate-900 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-green-500/20"
              >
                Reset Database
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── Footer CTA ─── */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-slate-800 border border-slate-700 rounded-[48px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/5 rounded-full blur-[80px] -ml-32 -mb-32" />
            
            <div className="relative z-10 text-center md:text-left flex-1">
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <AiMagicIcon size={32} className="text-green-400" strokeWidth={1} />
                <span className="text-green-400 font-black tracking-widest text-xs uppercase">AI Powered Diagnosis</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase italic leading-none">Detected Symptoms?</h3>
              <p className="text-slate-400 max-w-md text-lg font-medium leading-relaxed">Let our neural network analyze your tomato leaves instantly.</p>
            </div>
            
            <Link to="/detect" className="relative z-10 flex cursor-none items-center gap-4 bg-green-500 hover:bg-green-400 text-slate-950 font-black px-12 py-6 rounded-3xl transition-all shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:scale-110 active:scale-95 text-lg tracking-tighter uppercase italic group">
              <Leaf01Icon size={28} strokeWidth={2.5} /> ANALYZE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Detail Modal ─── */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} className="relative z-10 bg-slate-900 border border-slate-800 rounded-[48px] shadow-2xl max-w-xl w-full overflow-hidden">
              
              <div className={`aspect-video bg-gradient-to-br ${selected.color} flex items-center justify-center shadow-inner relative overflow-hidden group/header`}>
                 {/* Large Animated Background Icon */}
                <selected.icon size={280} strokeWidth={0.5} className="absolute text-white/5 rotate-12 group-hover/header:rotate-45 transition-transform duration-1000 scale-125" />
                
                <motion.div 
                   initial={{ scale: 0.5, rotate: -20, opacity: 0 }} 
                   animate={{ scale: 1, rotate: 0, opacity: 1 }} 
                   transition={{ type: 'spring', damping: 10, delay: 0.1 }}
                   className="relative w-40 h-40 bg-white/10 backdrop-blur-xl rounded-[40px] border border-white/20 flex items-center justify-center shadow-2xl shadow-black/40"
                 >
                  <selected.icon size={100} strokeWidth={1} className={selected.iconColor} />
                </motion.div>
                
                <button onClick={() => setSelected(null)} className="absolute top-8 right-8 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white transition-all ring-1 ring-white/10 shadow-2xl">
                  <Cancel01Icon size={24} />
                </button>
              </div>

              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-2xl shadow-lg ${riskBadge(selected.risk)}`}>
                    {selected.risk === 'Healthy' ? 'STATUS: HEALTHY' : `RISK LEVEL: ${selected.risk}`}
                  </span>
                </div>
                
                <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase italic leading-none">{selected.name}</h2>
                <div className="w-20 h-2 bg-green-500 rounded-full mb-8 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                
                <p className="text-slate-300 text-xl leading-relaxed mb-10 font-medium italic opacity-80">"{selected.summary}"</p>
                
                <div className="space-y-6">
                  <div className="bg-slate-800/80 border border-white/5 rounded-3xl p-6 hover:border-green-500/30 transition-all duration-300">
                    <h4 className="flex items-center gap-3 text-[11px] font-black uppercase text-green-400 tracking-widest mb-4">
                       <ZapIcon size={16} className="animate-pulse" /> TARGETED TREATMENT
                    </h4>
                    <p className="text-base text-slate-300 leading-relaxed font-medium">{selected.treatment}</p>
                  </div>
                  
                  <div className="bg-slate-800/80 border border-white/5 rounded-3xl p-6 hover:border-amber-500/30 transition-all duration-300">
                    <h4 className="flex items-center gap-3 text-[11px] font-black uppercase text-amber-400 tracking-widest mb-4">
                       <Shield01Icon size={16} /> DEFENSIVE STRATEGY
                    </h4>
                    <p className="text-base text-slate-300 leading-relaxed font-medium">{selected.prevention}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 px-10 py-6 border-t border-slate-800 flex justify-between items-center group/footer">
                <div className="flex items-center gap-3">
                  <InformationCircleIcon size={18} className="text-slate-500 group-hover/footer:text-green-400 transition-colors" />
                  <p className="text-[10px] text-slate-500 group-hover/footer:text-slate-300 font-bold uppercase tracking-[0.3em] transition-colors">Pathogen Data Verified</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-xs font-black text-green-400 hover:text-green-200 transition-colors uppercase tracking-widest">CLOSE FILE</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
