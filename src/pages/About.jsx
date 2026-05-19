import { motion } from 'framer-motion';
import { Target, Users, Zap, Award } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    { icon: <Target className="text-primary" size={24} />, title: 'Mission-Driven', desc: 'We align our digital strategies with your core business objectives.' },
    { icon: <Zap className="text-secondary" size={24} />, title: 'Innovation First', desc: 'Always at the forefront of digital trends and technologies.' },
    { icon: <Users className="text-emerald-400" size={24} />, title: 'Collaborative', desc: 'We work as an extension of your team for maximum impact.' },
    { icon: <Award className="text-purple-400" size={24} />, title: 'Excellence', desc: 'Delivering premium quality in every pixel and line of code.' },
  ];

  const team = [
    { name: 'Alex Sterling', role: 'CEO & Founder', image: 'https://i.pravatar.cc/300?img=11' },
    { name: 'Sarah Chen', role: 'Creative Director', image: 'https://i.pravatar.cc/300?img=5' },
    { name: 'Marcus Johnson', role: 'Head of Technology', image: 'https://i.pravatar.cc/300?img=13' },
    { name: 'Elena Rodriguez', role: 'Marketing Lead', image: 'https://i.pravatar.cc/300?img=9' },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About <span className="gradient-text">AthiLoka</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            We are a collective of digital craftsmen, strategists, and innovators dedicated to evolving businesses for the modern age.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div {...fadeIn} className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden glass-card p-2 border-white/10">
                <div className="aspect-video bg-dark-lighter rounded-xl overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 mix-blend-overlay"></div>
                   <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team collaborating" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Founded with a vision to bridge the gap between creative design and technical excellence, AthiLoka has grown into a global digital agency. We believe that true digital success comes from a harmonious blend of aesthetics, functionality, and data-driven marketing.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                "Where Business Evolves" isn't just our tagline—it's our promise. We don't just build websites or run campaigns; we build scalable digital ecosystems that drive tangible growth for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Team</h2>
            <p className="text-slate-400">The brilliant minds behind our digital creations.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-primary/50 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
