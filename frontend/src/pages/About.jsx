import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search01Icon, 
  Target01Icon, 
  CpuIcon, 
  Analytics01Icon, 
  ViewIcon, 
  AlertCircleIcon, 
  Leaf01Icon, 
  Tick01Icon, 
  ArrowRight01Icon,
  AiMagicIcon,
  GlobalIcon,
  Layers01Icon,
  UserIcon
} from 'hugeicons-react';

const objectives = [
  'Build a high-accuracy MobileNetV2 model for tomato leaf classification.',
  'Reduce manual labor and human error in plant disease identification.',
  'Provide actionable treatment and prevention insights for early intervention.',
  'Deliver an accessible web-based tool usable by farmers without AI expertise.',
];

const techs = [
  { name: 'Python 3.11', role: 'CORE LOGIC', icon: Search01Icon, color: 'from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-400' },
  { name: 'TensorFlow', role: 'ML ENGINE', icon: CpuIcon, color: 'from-orange-500/10 to-orange-500/5 border-orange-500/20 text-orange-400' },
  { name: 'MobileNetV2', role: 'NEURAL NET', icon: AiMagicIcon, color: 'from-purple-500/10 to-purple-500/5 border-purple-500/20 text-purple-400' },
  { name: 'FastAPI', role: 'BACKEND API', icon: GlobalIcon, color: 'from-green-500/10 to-green-500/5 border-green-500/20 text-green-400' },
  { name: 'React', role: 'FRONTEND UI', icon: Layers01Icon, color: 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 text-cyan-400' },
  { name: 'PlantVillage', role: 'BIG DATA', icon: Analytics01Icon, color: 'from-lime-500/10 to-lime-500/5 border-lime-500/20 text-lime-400' },
];

const steps = [
  { num: '01', title: 'SOURCE INPUT', desc: 'Securely upload a high-resolution snapshot of a tomato leaf via our encrypted web interface.' },
  { num: '02', title: 'NEURAL SCAN', desc: 'MobileNetV2 architecture scans deep pixel patterns to identify even the most subtle pathogen signatures.' },
  { num: '03', title: 'QUANTUM OUTPUT', desc: 'Receive a precise diagnosis with confidence vectors, treatment protocols, and bio-prevention strategies.' },
];

const stats = [
  { value: '10', label: 'PATHOGEN CLASSES', icon: AlertCircleIcon },
  { value: '18K+', label: 'TRAINING SAMPLES', icon: Analytics01Icon },
  { value: '88%+', label: 'VALIDATION SCORE', icon: Target01Icon },
  { value: '<2s', label: 'LATENCY RATE', icon: CpuIcon },
];

export default function About() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-medium">

      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black px-4 py-2 rounded-2xl mb-8 uppercase tracking-[0.3em] shadow-lg shadow-green-500/5">
              SYSTEM ARCHIVE · ACADEMIC PROJECT 2026
            </span>
            <h1 className="text-6xl sm:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase italic">
              Tomato<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Guard AI</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-lg font-medium opacity-80 decoration-slate-700 underline underline-offset-8 decoration-2">
              Revolutionizing agricultural sustainability through deep-neural pathogen detection and real-time diagnostic systems.
            </p>
            
            <div className="flex items-center gap-6 p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl w-fit">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-3xl shadow-2xl">
                <UserIcon size={32} className="text-slate-900" strokeWidth={2} />
              </div>
              <div>
                <p className="text-white text-lg font-black uppercase tracking-tight">Adeosun Ezekiel Ayomide</p>
                <p className="text-green-500 text-sm font-black uppercase tracking-widest opacity-80">LEAD DEVELOPER · CS DEPT</p>
              </div>
            </div>
          </motion.div>

          {/* Stats panel */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="group bg-slate-900/50 border border-white/5 rounded-[40px] p-8 transition-all hover:bg-slate-800/80 hover:border-green-500/30 hover:-translate-y-2">
                <s.icon size={32} className="text-slate-600 mb-6 group-hover:text-green-400 transition-colors" strokeWidth={1.5} />
                <div className="text-5xl font-black text-white mb-2 tracking-tighter italic">{s.value}</div>
                <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] group-hover:text-slate-300 transition-colors">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Project Overview ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px] translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-500/10 rounded-2xl border border-green-500/20">
                <Target01Icon size={28} className="text-green-400" />
              </div>
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Mission Statement</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                TomatoGuard AI leverages state-of-the-art <span className="text-white underline decoration-green-500 decoration-2 underline-offset-4">MobileNetV2 neural architecture</span> to provide instant, field-ready diagnostics for tomato plant health.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Our objective is to bridge the gap between high-level plant pathology and local farming, enabling rapid intervention that saves crops and secures livelihoods.
              </p>
            </div>
          </div>
          
          <div className="grid gap-4">
            {objectives.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all group">
                <Tick01Icon size={20} className="text-green-500 flex-shrink-0 mt-1 shadow-[0_0_10px_rgba(34,197,94,0.3)]" strokeWidth={3} />
                <p className="text-base text-slate-300 font-bold tracking-tight leading-snug group-hover:text-white transition-colors uppercase">{o}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technologies ─── */}
      <section className="py-24 px-6 border-y border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Neural Stack</h2>
            <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">The high-performance technologies powering the system</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {techs.map((t, i) => (
              <motion.div key={i} whileHover={{ y: -8, scale: 1.02 }} className={`relative overflow-hidden border rounded-[40px] p-8 flex items-center gap-6 group transition-all duration-300 ${t.color}`}>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <t.icon size={80} strokeWidth={1} />
                </div>
                <div className="w-16 h-16 rounded-[24px] bg-black/20 backdrop-blur-md flex items-center justify-center shadow-inner relative z-10">
                  <t.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <p className="text-white text-xl font-black tracking-tight leading-none mb-2">{t.name}</p>
                  <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60 underline decoration-white/20 underline-offset-4">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter mb-4">Pipeline Logic</h2>
              <p className="text-slate-400 text-lg font-medium">Optimized end-to-end data processing for real-time edge interference.</p>
            </div>
            <div className="text-green-500 font-black tracking-[0.5em] text-[10px] pb-2 uppercase border-b-2 border-green-500/30">Process Sequence 1.0</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="group relative bg-slate-900 border border-white/5 rounded-[48px] p-10 hover:border-green-500/40 transition-all duration-500">
                <div className="text-7xl font-black text-white/5 absolute top-8 right-8 group-hover:text-green-500/10 transition-colors uppercase italic">{s.num}</div>
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 font-black mb-8 border border-green-500/20 group-hover:scale-110 transition-transform">
                  {s.num}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic">{s.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Importance ─── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <ViewIcon size={32} className="text-green-400" />
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Economic Impact</h2>
            </div>
            <p className="text-slate-400 text-xl leading-relaxed font-medium mb-10">
              Plant diseases account for nearly <strong className="text-white">40% of agricultural loss</strong> annually. By providing expert diagnostics on-field, we mitigate risk and empower sustainability.
            </p>
            <Link to="/detect" className="group flex items-center gap-4 bg-green-500 hover:bg-green-400 text-slate-950 font-black px-12 py-6 rounded-[32px] transition-all shadow-[0_20px_60px_rgba(34,197,94,0.3)] hover:scale-110 active:scale-95 text-xl tracking-tighter uppercase italic w-fit">
              START SCAN <ArrowRight01Icon size={24} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="w-full lg:w-96 bg-gradient-to-br from-green-900/40 to-emerald-950/40 border border-green-500/30 rounded-[64px] p-12 text-center relative shadow-inner overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="text-8xl font-black text-green-400 mb-2 tracking-tighter italic relative z-10">40%</div>
            <p className="text-green-400 font-black uppercase tracking-widest text-xs mb-8 opacity-80 relative z-10 leading-tight">PREVENTABLE<br/>CROP LOSS MARGIN</p>
            <div className="h-4 bg-black/40 rounded-full overflow-hidden relative z-10 mb-8 border border-white/5 shadow-inner">
              <motion.div initial={{ width: 0 }} animate={{ width: '40%' }} transition={{ duration: 2, ease: "easeOut" }} className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
            </div>
            <p className="text-slate-300 text-sm font-bold italic relative z-10 opacity-60">"Targeting zero waste through AI intervention"</p>
          </div>
        </div>
      </section>

      {/* ─── Footer Archive ─── */}
      <section className="py-20 px-6 border-t border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-4">
             <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
               <AlertCircleIcon size={24} className="text-amber-500" />
             </div>
             <div>
               <p className="text-white text-xs font-black uppercase tracking-widest mb-1 italic">Research Disclaimer</p>
               <p className="text-slate-500 text-xs max-w-lg leading-relaxed font-medium capitalize">This cognitive model is for academic verification. Predictions should be corroborated with agricultural experts. Accuracy is subject to environmental lighting and capture resolution.</p>
             </div>
          </div>
          <div className="text-slate-600 font-black uppercase tracking-[0.3em] text-[10px] text-center md:text-right">
            SECURE ACCESS · REBUILD 1.0 · CS FINAL PROJECT 2026
          </div>
        </div>
      </section>

    </div>
  );
}
