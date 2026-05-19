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
      name: 'Sarah Jenkins',
      role: 'CMO, TechNova',
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'AthiLoka completely transformed our digital presence. Their strategic approach to our brand overhaul resulted in a 300% increase in lead generation within the first quarter.',
      rating: 5
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Founder, UrbanStyle',
      image: 'https://i.pravatar.cc/150?img=11',
      text: 'The web app they built for us is nothing short of extraordinary. The attention to detail and focus on performance helped us scale our e-commerce operations globally.',
      rating: 5
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Marketing Director, Aura Health',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'Working with AthiLoka on our video marketing campaign was a breeze. They understood our vision perfectly and delivered cinematic quality that our audience loved.',
      rating: 5
    },
    {
      id: 4,
      name: 'James Wilson',
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
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/50"
                      />
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                      </div>
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
