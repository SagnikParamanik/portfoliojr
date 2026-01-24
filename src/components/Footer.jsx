import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-linear-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 border-t border-gray-200 dark:border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2"
          >
            <span>© {currentYear} Sagnik Paramanik. Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            <span>and React</span>
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-linear-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
