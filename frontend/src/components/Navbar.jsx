import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Leaf01Icon, 
  Menu01Icon, 
  Cancel01Icon,
  AiMagicIcon
} from 'hugeicons-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'ANALYZE', to: '/detect' },
    { label: 'ARCHIVE', to: '/guide' },
    { label: 'MANIFESTO', to: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-slate-950/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]' 
        : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-4 hover:scale-105 transition-all duration-500">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/20 group-hover:rotate-12 transition-transform">
            <Leaf01Icon className="text-slate-950 w-7 h-7" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white tracking-tighter uppercase italic leading-none">TomatoGuard</span>
            <span className="text-[10px] font-black text-green-500 tracking-[0.4em] uppercase opacity-70">Neural System</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[10px] font-black tracking-[0.2em] transition-all relative group/link ${
                  isActive(l.to) ? 'text-green-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {l.label}
                {isActive(l.to) && (
                  <motion.div layoutId="navlink" className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                )}
              </Link>
            ))}
          </div>
          
          <Link
            to="/detect"
            className="group flex items-center gap-2 bg-white text-slate-950 text-xs font-black uppercase tracking-widest px-8 py-4 rounded-2xl transition-all hover:bg-green-500 hover:scale-110 active:scale-95 shadow-xl hover:shadow-green-500/20"
          >
            <AiMagicIcon size={18} strokeWidth={2.5} />
            SCAN NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all active:scale-90" 
          onClick={() => setOpen(!open)}
        >
          {open ? <Cancel01Icon size={24} /> : <Menu01Icon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-8 flex flex-col gap-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-lg font-black italic uppercase tracking-tighter py-4 px-6 rounded-3xl transition-all ${
                    isActive(l.to) ? 'bg-green-500 text-slate-950' : 'text-slate-400 hover:text-white bg-white/5 border border-white/5'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/detect"
                className="bg-white text-slate-950 text-lg font-black italic uppercase tracking-tighter py-6 px-6 rounded-[32px] text-center mt-2 flex items-center justify-center gap-3 shadow-2xl"
                onClick={() => setOpen(false)}
              >
                <AiMagicIcon size={24} strokeWidth={2.5} /> INITIALIZE SCAN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
