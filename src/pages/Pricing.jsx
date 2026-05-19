import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, HelpCircle, ChevronDown, Rocket, Code, TrendingUp, Monitor, Zap, Shield, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const packages = [
    {
      title: "LANDING PAGE PACKAGE",
      tag: "Best For Beginners",
      price: "₹3,500",
      prefix: "Starting From",
      desc: "Perfect for startups, local businesses, and personal brands.",
      icon: <Rocket size={24} className="text-cyan-400" />,
      features: [
        "Modern Responsive Landing Page",
        "Mobile Friendly Design",
        "WhatsApp Integration",
        "Contact Form",
        "Basic SEO Setup",
        "Fast Loading Website",
        "Free Basic Hosting Guidance"
      ],
      cta: "Get Started",
      popular: false,
      glowColor: "from-cyan-500/20 to-blue-500/20",
      accent: "text-cyan-400",
      border: "border-white/10 hover:border-cyan-500/50"
    },
    {
      title: "BUSINESS WEBSITE PACKAGE",
      tag: "Most Popular",
      price: "₹15,000",
      prefix: "Starting From",
      desc: "Professional business websites designed for growth and lead generation.",
      icon: <Monitor size={24} className="text-indigo-400" />,
      features: [
        "Multi-page Business Website",
        "Custom UI/UX Design",
        "SEO Optimization",
        "Admin Panel Support",
        "Analytics Integration",
        "Performance Optimization",
        "Brand Design Assistance",
        "Social Media Integration"
      ],
      cta: "Book Consultation",
      popular: true,
      glowColor: "from-indigo-500/30 to-purple-500/30",
      accent: "text-indigo-400",
      border: "border-indigo-500/50 shadow-[0_0_30px_rgba(79,70,229,0.2)]"
    },
    {
      title: "DIGITAL MARKETING PACKAGE",
      tag: "Business Growth",
      price: "₹9,999",
      suffix: "/month",
      prefix: "Starting From",
      desc: "Grow your brand visibility and generate high-quality leads online.",
      icon: <TrendingUp size={24} className="text-emerald-400" />,
      features: [
        "Social Media Management",
        "Instagram & Facebook Marketing",
        "Google Ads Campaign Setup",
        "SEO & Keyword Strategy",
        "Content Design Support",
        "Monthly Analytics Reports",
        "Brand Growth Strategy",
        "Lead Generation Optimization"
      ],
      cta: "Start Marketing",
      popular: false,
      glowColor: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
      border: "border-white/10 hover:border-emerald-500/50"
    },
    {
      title: "CUSTOM SOFTWARE & AUTOMATION",
      tag: "Enterprise Solution",
      price: "Custom Pricing",
      desc: "Advanced digital transformation solutions for scaling businesses.",
      icon: <Code size={24} className="text-rose-400" />,
      features: [
        "ERP Development",
        "CRM Systems",
        "Mobile App Development",
        "AI Automation",
        "Workflow Automation",
        "Cloud Infrastructure",
        "Dedicated Technical Team",
        "Complete Branding & Marketing Support"
      ],
      cta: "Request Proposal",
      popular: false,
      glowColor: "from-rose-500/20 to-pink-500/20",
      accent: "text-rose-400",
      border: "border-white/10 hover:border-rose-500/50"
    }
  ];

  const faqs = [
    {
      q: "Do you offer custom pricing for unique requirements?",
      a: "Yes, we understand every business is unique. While our packages cover standard needs, we can create a completely customized proposal tailored to your specific goals and budget."
    },
    {
      q: "What is the typical timeline for a website project?",
      a: "A standard landing page takes 1-2 weeks. Full business websites typically take 3-5 weeks depending on complexity. Custom software and ERPs have tailored timelines provided during consultation."
    },
    {
      q: "Are there any hidden costs or maintenance fees?",
      a: "No hidden costs. We are fully transparent. Hosting, domain, and optional monthly maintenance/marketing services will be clearly outlined before we begin the project."
    },
    {
      q: "Do you provide support after the project is completed?",
      a: "Absolutely! We provide a free 30-day bug-fixing and support period after launch. We also offer affordable ongoing AMC (Annual Maintenance Contract) packages."
    }
  ];

  const processSteps = [
    { icon: <HelpCircle size={24}/>, title: "1. Discovery", desc: "We analyze your business needs and goals." },
    { icon: <Zap size={24}/>, title: "2. Strategy", desc: "Creating the perfect digital blueprint." },
    { icon: <Code size={24}/>, title: "3. Execution", desc: "Building and optimizing your solution." },
    { icon: <Rocket size={24}/>, title: "4. Launch & Grow", desc: "Deploying and scaling your business." },
  ];

  const trustIndicators = [
    { icon: <Shield className="text-primary"/>, title: "Secure & Reliable" },
    { icon: <Clock className="text-secondary"/>, title: "On-Time Delivery" },
    { icon: <Users className="text-emerald-400"/>, title: "Dedicated Support" },
  ];

  return (
    <div className="bg-[#050816] min-h-screen text-[#F8FAFC] font-sans selection:bg-indigo-500/30 relative overflow-hidden">
      
      {/* Animated Background Particles / Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/10 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[20%] rounded-full bg-cyan-500/5 blur-[150px] mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-slate-300">Free Consultation Included With All Plans</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Affordable Digital Solutions <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#7C3AED]">For Every Business Stage</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From startup landing pages to enterprise software systems, AthiLoka helps businesses grow with modern digital solutions.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 relative z-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group h-full flex flex-col"
              >
                {/* Background Glow on Hover */}
                <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-b ${pkg.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                {/* Card Body */}
                <div className={`relative h-full flex flex-col bg-[#0F172A]/90 backdrop-blur-2xl rounded-3xl p-8 border ${pkg.border} transition-colors duration-300 shadow-xl overflow-hidden`}>
                  
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
                  )}

                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner`}>
                        {pkg.icon}
                      </div>
                      {pkg.popular ? (
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30">
                          {pkg.tag}
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-slate-400 border border-white/10">
                          {pkg.tag}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 tracking-wide">{pkg.title}</h3>
                    <p className="text-sm text-slate-400 h-10 mb-6">{pkg.desc}</p>
                    
                    <div className="flex flex-col">
                      {pkg.prefix && <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">{pkg.prefix}</span>}
                      <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-extrabold ${pkg.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400' : 'text-white'}`}>
                          {pkg.price}
                        </span>
                        {pkg.suffix && <span className="text-slate-400">{pkg.suffix}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1">
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <Check size={18} className={`shrink-0 mt-0.5 ${pkg.accent}`} />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => navigate(`/contact?subject=Inquiry: ${pkg.title}`)}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] relative overflow-hidden ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:opacity-90' 
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {pkg.cta}
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 relative z-10 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustIndicators.map((item, i) => (
              <div key={i} className="flex items-center gap-3 glass-card px-6 py-3 rounded-full bg-[#0F172A]/50 border-white/5">
                {item.icon}
                <span className="font-semibold text-slate-300">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 relative z-10 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-slate-400 mb-16 max-w-2xl mx-auto">A seamless, transparent process designed to get your project launched fast and flawlessly.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative mt-12">
            {/* Connecting line for desktop - aligned perfectly to the center of the 80px (w-20) blocks */}
            <div className="hidden md:block absolute top-[40px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 z-0" />
            
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center group"
              >
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 md:right-1/4 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-sm font-bold text-indigo-300 z-20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {i + 1}
                </div>

                <div className="w-20 h-20 rounded-2xl glass-card bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 group-hover:border-indigo-500/50 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] relative transition-all duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                  <span className="text-slate-400 group-hover:text-indigo-400 relative z-10 transition-colors duration-300 scale-110 group-hover:scale-125">
                    {step.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-200 group-hover:text-white transition-colors">{step.title.split('. ')[1]}</h3>
                <p className="text-sm text-slate-400 px-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 relative z-10 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Everything you need to know about our pricing and process.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card bg-[#0F172A]/80 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg pr-8">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="text-indigo-400 flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
