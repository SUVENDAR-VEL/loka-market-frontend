import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Design' },
    { id: 'app', label: 'Mobile App' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Fintech Mobile App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'NexoFinance'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'UrbanStyle'
    },
    {
      id: 3,
      title: 'Brand Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'Aura Skincare'
    },
    {
      id: 4,
      title: 'Global Marketing Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'TechGlobal'
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'PrimeHomes'
    },
    {
      id: 6,
      title: 'Fitness App UI',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1526506118432-84a8ffed72cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      client: 'FitLife'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div>
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="gradient-text">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
          >
            Explore our latest projects showcasing our expertise in design, development, and digital marketing.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">
                        {project.client}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                      <button className="flex items-center gap-2 text-white bg-white/20 hover:bg-primary py-2 px-4 rounded-lg backdrop-blur-md transition-colors text-sm font-medium w-fit">
                        View Case Study <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-20 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">
            Start a Conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
