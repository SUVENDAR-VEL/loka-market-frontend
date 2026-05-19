import { motion } from 'framer-motion';
import { ArrowRight, Globe, Code, PenTool, Smartphone, MonitorPlay, BarChart3, Search, Database } from 'lucide-react';

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      id: 'marketing',
      icon: <BarChart3 size={40} className="text-primary" />,
      title: 'Digital Marketing',
      desc: 'Data-driven marketing strategies that increase visibility, engagement, and conversions.',
      features: ['Social Media Campaigns', 'PPC Advertising', 'Email Automation', 'Conversion Rate Optimization']
    },
    {
      id: 'seo',
      icon: <Search size={40} className="text-secondary" />,
      title: 'SEO Optimization',
      desc: 'Climb the search rankings and drive organic, high-intent traffic to your digital properties.',
      features: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Content Strategy']
    },
    {
      id: 'web',
      icon: <Globe size={40} className="text-emerald-400" />,
      title: 'Website Development',
      desc: 'Fast, secure, and highly scalable websites built with modern frameworks and architectures.',
      features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development', 'Performance Tuning']
    },
    {
      id: 'mobile',
      icon: <Smartphone size={40} className="text-pink-400" />,
      title: 'Mobile App Development',
      desc: 'Engaging native and cross-platform mobile experiences for iOS and Android.',
      features: ['React Native & Flutter', 'Native iOS/Android', 'App UI/UX', 'App Store Optimization']
    },
    {
      id: 'video',
      icon: <MonitorPlay size={40} className="text-purple-400" />,
      title: 'Video Production',
      desc: 'Cinematic video content that tells your brand story and captivates your audience.',
      features: ['Brand Videos', 'Explainer Animations', 'Social Media Shorts', 'Corporate Documentaries']
    },
    {
      id: 'branding',
      icon: <PenTool size={40} className="text-amber-400" />,
      title: 'Complete Branding',
      desc: 'Creating memorable brand identities that resonate with your target market.',
      features: ['Logo & Identity', 'Brand Guidelines', 'Typography & Color', 'Marketing Collateral']
    },
    {
      id: 'erp',
      icon: <Database size={40} className="text-cyan-400" />,
      title: 'Custom ERP Systems',
      desc: 'Tailored Enterprise Resource Planning solutions to streamline operations and integrate business processes.',
      features: ['Process Automation', 'Data Integration', 'Custom Dashboards', 'Scalable Architecture']
    }
  ];

  return (
    <div>
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="glass-card p-10 md:p-16 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="mb-8">{service.icon}</div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">{service.desc}</p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="text-white font-medium flex items-center gap-2 hover:text-primary transition-colors">
                      Discuss this service <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 flex justify-center">
                   <div className="relative w-full max-w-md aspect-square rounded-full border border-white/10 flex items-center justify-center p-8">
                      <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
                      <div className="absolute inset-4 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                      <div className="w-full h-full bg-dark-lighter rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(108,99,255,0.1)]">
                        {service.icon}
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
