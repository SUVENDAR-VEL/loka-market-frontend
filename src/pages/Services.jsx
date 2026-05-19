import { motion } from 'framer-motion';
import { ArrowRight, Globe, PenTool, Smartphone, MonitorPlay, BarChart3, Search, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import imgMarketing from '../assets/service-marketing.png';
import imgSeo from '../assets/service-seo.png';
import imgWeb from '../assets/service-web.png';
import imgMobile from '../assets/service-mobile.png';

export default function Services() {
  const navigate = useNavigate();

  const handleDiscuss = (serviceTitle) => {
    navigate(`/contact?subject=${encodeURIComponent('Inquiry about: ' + serviceTitle)}`);
  };

  const services = [
    {
      id: 'marketing',
      icon: <BarChart3 size={36} className="text-primary" />,
      color: 'from-primary/40 to-blue-500/20',
      glow: 'bg-primary',
      title: 'Digital Marketing',
      desc: 'Data-driven marketing strategies that increase visibility, engagement, and conversions across all digital channels.',
      features: ['Social Media Campaigns', 'PPC Advertising', 'Email Automation', 'Conversion Rate Optimization'],
      image: imgMarketing,
    },
    {
      id: 'seo',
      icon: <Search size={36} className="text-secondary" />,
      color: 'from-secondary/40 to-violet-500/20',
      glow: 'bg-secondary',
      title: 'SEO Optimization',
      desc: 'Climb the search rankings and drive organic, high-intent traffic to your digital properties.',
      features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Content Strategy'],
      image: imgSeo,
    },
    {
      id: 'web',
      icon: <Globe size={36} className="text-emerald-400" />,
      color: 'from-emerald-500/40 to-teal-500/20',
      glow: 'bg-emerald-500',
      title: 'Website Development',
      desc: 'Fast, secure, and highly scalable websites built with modern frameworks and architectures.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development', 'Performance Tuning'],
      image: imgWeb,
    },
    {
      id: 'mobile',
      icon: <Smartphone size={36} className="text-pink-400" />,
      color: 'from-pink-500/40 to-rose-500/20',
      glow: 'bg-pink-500',
      title: 'Mobile App Development',
      desc: 'Engaging native and cross-platform mobile experiences for iOS and Android.',
      features: ['React Native & Flutter', 'Native iOS/Android', 'App UI/UX', 'App Store Optimization'],
      image: imgMobile,
    },
    {
      id: 'video',
      icon: <MonitorPlay size={36} className="text-purple-400" />,
      color: 'from-purple-500/40 to-indigo-500/20',
      glow: 'bg-purple-500',
      title: 'Video Production',
      desc: 'Cinematic video content that tells your brand story and captivates your audience.',
      features: ['Brand Videos', 'Explainer Animations', 'Social Media Shorts', 'Corporate Documentaries'],
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'branding',
      icon: <PenTool size={36} className="text-amber-400" />,
      color: 'from-amber-500/40 to-orange-500/20',
      glow: 'bg-amber-500',
      title: 'Complete Branding',
      desc: 'Creating memorable brand identities that resonate with your target market.',
      features: ['Logo & Identity', 'Brand Guidelines', 'Typography & Color', 'Marketing Collateral'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'erp',
      icon: <Database size={36} className="text-cyan-400" />,
      color: 'from-cyan-500/40 to-sky-500/20',
      glow: 'bg-cyan-500',
      title: 'Custom ERP Systems',
      desc: 'Tailored Enterprise Resource Planning solutions to streamline operations and integrate business processes.',
      features: ['Process Automation', 'Data Integration', 'Custom Dashboards', 'Scalable Architecture'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-secondary/10 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            End-to-end digital solutions designed to transform your business and dominate your industry.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`flex flex-col gap-12 lg:gap-20 ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                    <div className="relative glass-card bg-dark/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 hover:border-white/20 transition-colors">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 border border-white/10 shadow-lg`}>
                        {service.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        {service.title}
                      </h2>
                      <p className="text-slate-400 text-lg mb-8 leading-relaxed">{service.desc}</p>
                      <ul className="space-y-4 mb-10">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-4 text-slate-300">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            </span>
                            <span className="font-medium tracking-wide">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => handleDiscuss(service.title)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-white font-semibold shadow-lg hover:shadow-primary/30 group/btn"
                      >
                        Discuss this service
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2 flex justify-center relative min-h-[420px]">
                  {/* Glow orb */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] opacity-25 ${service.glow}`} />

                  {/* Floating image frame */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-full max-w-md z-10"
                  >
                    {/* Gradient border glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} rounded-3xl blur-md opacity-60`} />

                    {/* Image */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-72 object-cover"
                        loading="lazy"
                      />
                      {/* Bottom dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />

                      {/* Label badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="glass-card bg-dark/70 backdrop-blur-xl rounded-2xl p-3 flex items-center gap-3 border border-white/20">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                            {service.icon}
                          </div>
                          <div>
                            <p className="text-white font-bold text-sm">{service.title}</p>
                            <p className="text-slate-400 text-xs">{service.features[0]} & more</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating pill — top right */}
                    <motion.div
                      animate={{ y: [-8, 8, -8], x: [4, -4, 4] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute -top-4 -right-4 glass-card bg-dark/80 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-2 shadow-xl"
                    >
                      <p className="text-xs font-semibold text-white">✦ Premium Quality</p>
                    </motion.div>

                    {/* Floating pill — bottom left */}
                    <motion.div
                      animate={{ y: [8, -8, 8] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      className="absolute -bottom-4 -left-4 glass-card bg-dark/80 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-2 shadow-xl"
                    >
                      <p className="text-xs font-semibold text-emerald-400">✓ Proven Results</p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
