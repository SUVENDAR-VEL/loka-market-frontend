import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Aditi Desai',
      role: 'CMO, TechNova',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'AthiLoka completely transformed our digital presence. Their strategic approach to our brand overhaul resulted in a 300% increase in lead generation within the first quarter.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rohan Mehta',
      role: 'Founder, UrbanStyle',
      image: 'https://i.pravatar.cc/150?img=11',
      text: 'The web app they built for us is nothing short of extraordinary. The attention to detail and focus on performance helped us scale our e-commerce operations globally.',
      rating: 5
    },
    {
      id: 3,
      name: 'Meera Reddy',
      role: 'Marketing Director, Aura Health',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'Working with AthiLoka on our video marketing campaign was a breeze. They understood our vision perfectly and delivered cinematic quality that our audience loved.',
      rating: 5
    },
    {
      id: 4,
      name: 'Siddharth Iyer',
      role: 'CEO, PrimeRealEstate',
      image: 'https://i.pravatar.cc/150?img=8',
      text: 'Their SEO and digital marketing strategies put us on the map. We are now ranking #1 for our most competitive keywords.',
      rating: 5
    },
    {
      id: 5,
      name: 'Anita Patel',
      role: 'VP Product, FinFlow',
      image: 'https://i.pravatar.cc/150?img=9',
      text: 'The UI/UX design they created for our mobile app is stunning and incredibly intuitive. User engagement has skyrocketed since the redesign.',
      rating: 5
    },
    {
      id: 6,
      name: 'Vikram Singh',
      role: 'CTO, DataSync',
      image: 'https://i.pravatar.cc/150?img=12',
      text: 'AthiLoka engineered a custom ERP solution that streamlined our entire supply chain. Their technical expertise is truly unmatched.',
      rating: 5
    },
    {
      id: 7,
      name: 'Priya Sharma',
      role: 'Head of Brand, Lotus Lifestyle',
      image: 'https://i.pravatar.cc/150?img=10',
      text: 'From the logo redesign to the complete brand book, they captured the exact essence of our luxury brand. Phenomenal creativity.',
      rating: 5
    },
    {
      id: 8,
      name: 'Anand Kumar',
      role: 'Director of Growth, ScaleUp',
      image: 'https://i.pravatar.cc/150?img=15',
      text: 'Their performance marketing campaigns dropped our Customer Acquisition Cost by 45%. We could not be happier with the ROI.',
      rating: 5
    },
    {
      id: 9,
      name: 'Kavya Rao',
      role: 'E-Commerce Manager, Bloom',
      image: 'https://i.pravatar.cc/150?img=16',
      text: 'Our Shopify conversion rates doubled after AthiLoka implemented their advanced UX optimizations. A brilliant partner.',
      rating: 5
    },
    {
      id: 10,
      name: 'Raghav Krishnan',
      role: 'COO, NextGen Logistics',
      image: 'https://i.pravatar.cc/150?img=33',
      text: 'They built a scalable web platform that handles thousands of concurrent users flawlessly. Highly professional execution.',
      rating: 5
    },
    {
      id: 11,
      name: 'Shruti Verma',
      role: 'Founder, Foodie Haven',
      image: 'https://i.pravatar.cc/150?img=24',
      text: 'The React Native app they developed is lightning fast and perfectly responsive on both iOS and Android. Our customers love it!',
      rating: 5
    },
    {
      id: 12,
      name: 'Arjun Das',
      role: 'Marketing Lead, EduTech Pro',
      image: 'https://i.pravatar.cc/150?img=59',
      text: 'The 3D motion graphics they delivered for our ad campaigns completely changed the way we tell our story. Visually stunning work.',
      rating: 5
    },
    {
      id: 13,
      name: 'Sneha Joshi',
      role: 'CEO, Boutique Maison',
      image: 'https://i.pravatar.cc/150?img=43',
      text: 'Their comprehensive SEO audit and content strategy helped us dominate the local search results in less than 3 months.',
      rating: 5
    },
    {
      id: 14,
      name: 'Omar Farooq',
      role: 'Operations Head, BuildRight',
      image: 'https://i.pravatar.cc/150?img=60',
      text: 'AthiLoka integrated all our legacy databases into a sleek, modern dashboard. We now have real-time visibility into our business.',
      rating: 5
    },
    {
      id: 15,
      name: 'Divya Nair',
      role: 'Director, Green Energy Co.',
      image: 'https://i.pravatar.cc/150?img=47',
      text: 'Our corporate identity feels fresh, modern, and perfectly aligned with our sustainable mission, thanks to their branding experts.',
      rating: 5
    },
    {
      id: 16,
      name: 'Gaurav Chawla',
      role: 'Founder, FitnessAI',
      image: 'https://i.pravatar.cc/150?img=53',
      text: 'They transformed our complex AI backend into a beautifully simple and intuitive consumer-facing application.',
      rating: 5
    },
    {
      id: 17,
      name: 'Neha Kapoor',
      role: 'CMO, StyleHub',
      image: 'https://i.pravatar.cc/150?img=38',
      text: 'The social media campaigns they orchestrated went viral. Our brand engagement has never been this high before.',
      rating: 5
    },
    {
      id: 18,
      name: 'Rahul Bhatia',
      role: 'Product Owner, FinTech Forward',
      image: 'https://i.pravatar.cc/150?img=13',
      text: 'They delivered the project two weeks ahead of schedule with zero major bugs. Their development pipeline is incredibly solid.',
      rating: 5
    },
    {
      id: 19,
      name: 'Anjali Gupta',
      role: 'Event Director, Global Summits',
      image: 'https://i.pravatar.cc/150?img=32',
      text: 'The promotional videos and motion graphics they created were the highlight of our international summit.',
      rating: 5
    },
    {
      id: 20,
      name: 'Karthik Menon',
      role: 'CEO, Menon Holdings',
      image: 'https://i.pravatar.cc/150?img=68',
      text: 'A true strategic partner. They don’t just execute tasks; they provide vision and guidance that drives real business growth.',
      rating: 5
    }
  ];

  return (
    <div>
      <section className="pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark -z-10" />
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Client <span className="gradient-text">Success Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear what industry leaders have to say about partnering with AthiLoka.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="w-full max-w-5xl !pb-20"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="w-[300px] md:w-[600px]">
                  <div className="glass-card p-10 md:p-14 relative h-full flex flex-col justify-between border border-white/10 mx-auto">
                    <Quote className="absolute top-6 right-6 text-white/5" size={80} />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium mb-10 relative z-10">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="mt-auto">
                      <h4 className="font-bold text-white text-lg text-primary">{testimonial.name}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
