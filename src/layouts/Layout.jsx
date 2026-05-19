import { motion, useScroll } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen flex flex-col relative bg-dark">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main className="flex-grow pt-20 overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
