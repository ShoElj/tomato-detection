import { Leaf01Icon, GithubIcon, GlobalIcon, AiMagicIcon } from 'hugeicons-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-6 group w-fit">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/20 group-hover:rotate-12 transition-transform">
                <Leaf01Icon className="text-slate-950 w-7 h-7" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tighter uppercase italic leading-none">TomatoGuard</span>
                <p className="text-[10px] font-black text-green-500 tracking-[0.4em] uppercase opacity-70">Neural Architecture</p>
              </div>
            </Link>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm italic mb-8">
              "Providing sovereign deep-learning diagnostics for global agricultural resilience. Targeted, rapid, and field-ready."
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"><GithubIcon size={18} /></span>
              <span className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"><GlobalIcon size={18} /></span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Detect', 'Guide', 'About'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-slate-500 hover:text-green-400 text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-slate-800 rounded-full group-hover:bg-green-500 transition-colors" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Action */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8">Neural Engine</h4>
            <Link to="/detect" className="group bg-green-500/10 border border-green-500/20 p-6 rounded-3xl block hover:bg-green-500/20 transition-all">
              <div className="flex items-center gap-3 mb-2 text-green-400">
                <AiMagicIcon size={20} className="group-hover:animate-spin" />
                <span className="text-[10px] font-black uppercase tracking-widest">Live Inference</span>
              </div>
              <p className="text-slate-400 text-[10px] font-bold leading-relaxed uppercase">Start high-resolution leaf scan in real-time.</p>
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">© 2026 TomatoGuard AI · Sovereign Reconstruction</p>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest opacity-40">Adeosun Ezekiel Ayomide · Final Year Project</p>
          </div>
          <div className="flex gap-8 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Neural Logic Private API</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">System Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
