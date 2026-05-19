import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  TrendingUp, 
  MonitorPlay, 
  Smartphone, 
  PenTool, 
  Layout as LayoutIcon, 
  Database,
  Zap,
  Award,
  Shield,
  Layers,
  Search,
  Code,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const services = [
    { icon: <TrendingUp className="text-secondary group-hover:text-white transition-colors" size={28} />, title: 'Digital Marketing', desc: 'Data-driven campaigns that maximize ROI and market share.' },
    { icon: <MonitorPlay className="text-primary group-hover:text-white transition-colors" size={28} />, title: 'Video Production', desc: 'Cinematic visuals that tell your brand story compellingly.' },
    { icon: <LayoutIcon className="text-purple-400 group-hover:text-white transition-colors" size={28} />, title: 'Web Development', desc: 'High-performance, scalable web architectures.' },
    { icon: <Smartphone className="text-pink-400 group-hover:text-white transition-colors" size={28} />, title: 'Mobile Apps', desc: 'Intuitive iOS and Android native experiences.' },
    { icon: <PenTool className="text-emerald-400 group-hover:text-white transition-colors" size={28} />, title: 'Brand Identity', desc: 'Memorable branding that stands out globally.' },
    { icon: <Database className="text-cyan-400 group-hover:text-white transition-colors" size={28} />, title: 'Custom ERP', desc: 'Tailored Enterprise solutions to streamline operations.' },
  ];

  const processSteps = [
    { icon: <Search size={24} />, title: "Discover", desc: "Deep-dive into your brand, audience, and market landscape." },
    { icon: <Layers size={24} />, title: "Strategy", desc: "Crafting a bespoke roadmap tailored to your specific goals." },
    { icon: <PenTool size={24} />, title: "Design", desc: "Creating visually stunning and highly intuitive interfaces." },
    { icon: <Code size={24} />, title: "Development", desc: "Building robust, scalable, and secure technical architectures." },
    { icon: <Rocket size={24} />, title: "Launch", desc: "Deploying the product and initiating growth marketing." },
  ];

  const features = [
    { icon: <Award className="text-primary" size={32} />, title: 'Expert Team', desc: 'Top-tier talent from global tech hubs working exclusively on your vision.' },
    { icon: <Zap className="text-amber-400" size={32} />, title: 'Modern Technology', desc: 'We utilize the latest tech stacks to ensure future-proof scalability.' },
    { icon: <Shield className="text-emerald-400" size={32} />, title: 'End-to-End Support', desc: 'From ideation to post-launch maintenance, we are your dedicated partners.' },
  ];

  const clients = ["Sagupadi", "BusRoute Snacks", "Daddy Bazaar", "Talent Mirai", "FITYAK"];

  return (
    <div ref={containerRef} className="relative">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.15)_0%,rgba(0,0,0,0)_70%)] blur-3xl mix-blend-screen" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, -90, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,rgba(0,0,0,0)_70%)] blur-3xl mix-blend-screen" 
          />
        </div>

        <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Award-Winning Digital Agency</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white"
            >
              Transforming Ideas Into <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-400 animate-gradient-x">
                Digital Success
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
            >
              AthiLoka helps visionary brands scale through innovative technology, data-driven marketing, and immersive creative design. <strong className="text-white font-medium">Where business evolves.</strong>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link to="/contact" className="group relative w-full sm:w-auto px-8 py-4 bg-white text-dark font-bold rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-slate-200 to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 text-white font-medium rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- TRUSTED BY MARQUEE --- */}
      <section className="py-10 border-y border-white/5 bg-dark-lighter/50 overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest">Brands we've worked with</p>
        </div>
        <div className="flex whitespace-nowrap relative w-full">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10"></div>
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex items-center gap-16 md:gap-32 px-8"
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black text-white/20 hover:text-white/60 transition-colors cursor-default">
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION CARDS --- */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Zap className="text-amber-400" size={28} />, title: 'Fast Delivery', desc: 'We ship fast without sacrificing quality or attention to detail.' },
              { icon: <Award className="text-primary" size={28} />, title: 'Creative Excellence', desc: 'Award-level design thinking applied to every single project.' },
              { icon: <Shield className="text-emerald-400" size={28} />, title: 'Dedicated Support', desc: 'We stay by your side from launch through continuous growth.' },
              { icon: <Rocket className="text-pink-400" size={28} />, title: 'Growth Focused', desc: 'Everything we build is engineered to drive measurable results.' },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass-card border border-white/5 p-8 rounded-3xl flex flex-col gap-5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-dark-lighter border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Why visionary brands <br/><span className="gradient-text">choose AthiLoka</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                  We don't just execute tasks; we partner with you to solve complex business challenges through elegant design and robust engineering. Our holistic approach ensures maximum ROI.
                </p>
              </motion.div>

              <div className="space-y-8">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-5"
                  >
                    <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center shrink-0 border-white/10 shadow-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2 border-white/10 shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay rounded-3xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Digital Solutions that Drive Results</h2>
            <p className="text-slate-400 text-lg">Comprehensive agency services designed to elevate your brand presence and scale your operations effortlessly.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="relative group rounded-3xl glass-card border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="p-8 md:p-10 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-dark/50 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed group-hover:text-slate-300 transition-colors">{service.desc}</p>
                  
                  <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors mt-auto w-fit relative overflow-hidden">
                    <span className="relative z-10">Explore Service</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE --- */}
      <section className="py-24 relative overflow-hidden bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A systematic methodology that transforms vague ideas into market-leading digital products.</p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mb-6 border-2 border-dark bg-dark text-white relative z-10 group-hover:border-primary group-hover:text-primary transition-colors shadow-xl">
                    {step.icon}
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed px-2">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- IMMERSIVE CTA SECTION --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            {...fadeIn}
            className="relative rounded-[2.5rem] overflow-hidden"
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary animate-gradient-x opacity-90"></div>
            
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-dark/20 backdrop-blur-[2px]"></div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="relative p-12 md:p-24 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-white leading-tight">
                Ready to Evolve Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Join visionary brands that trust AthiLoka to build their digital future. Let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto bg-white text-primary font-bold text-lg px-10 py-5 rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Start Your Project <ArrowRight size={20} />
                </Link>
                <Link to="/pricing" className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
