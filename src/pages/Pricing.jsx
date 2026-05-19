import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const plans = [
    {
      name: 'Starter',
      desc: 'Perfect for small businesses looking to establish a digital presence.',
      price: '$999',
      period: '/month',
      recommended: false,
      features: [
        { name: 'Basic Website (Up to 5 Pages)', included: true },
        { name: 'On-Page SEO Setup', included: true },
        { name: '1 Social Media Platform', included: true },
        { name: 'Monthly Analytics Report', included: true },
        { name: 'PPC Campaign Management', included: false },
        { name: 'Custom Web App Development', included: false },
        { name: '24/7 Priority Support', included: false },
      ]
    },
    {
      name: 'Professional',
      desc: 'Comprehensive solution for growing brands aiming to scale rapidly.',
      price: '$2,499',
      period: '/month',
      recommended: true,
      features: [
        { name: 'Custom Website (Up to 15 Pages)', included: true },
        { name: 'Advanced SEO & Content Strategy', included: true },
        { name: '3 Social Media Platforms', included: true },
        { name: 'Weekly Analytics Report', included: true },
        { name: 'PPC Campaign Management', included: true },
        { name: 'Basic App Development', included: false },
        { name: '24/7 Priority Support', included: true },
      ]
    },
    {
      name: 'Enterprise',
      desc: 'Full-scale digital transformation for established market leaders.',
      price: 'Custom',
      period: '',
      recommended: false,
      features: [
        { name: 'Complex Web Applications', included: true },
        { name: 'Global Enterprise SEO', included: true },
        { name: 'All Social Platforms & PR', included: true },
        { name: 'Real-time Custom Dashboard', included: true },
        { name: 'Advanced Ad Spend Management', included: true },
        { name: 'Full Custom App Development', included: true },
        { name: 'Dedicated Account Manager', included: true },
      ]
    }
  ];

  return (
    <div>
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Transparent <span className="gradient-text">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Choose the perfect plan tailored to your business needs and growth objectives.
          </motion.p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 lg:p-10 ${
                  plan.recommended 
                    ? 'bg-gradient-to-b from-primary/20 to-dark border-2 border-primary shadow-2xl shadow-primary/20 scale-105 z-10' 
                    : 'glass-card border border-white/10'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                    RECOMMENDED
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6 h-10">{plan.desc}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                      ) : (
                        <X className="text-slate-600 shrink-0 mt-0.5" size={20} />
                      )}
                      <span className={feature.included ? 'text-slate-200' : 'text-slate-500 line-through'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
