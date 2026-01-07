import { motion } from "framer-motion";
import { Mail, Github, Linkedin, X, Send } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/SagnikParamanik",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sagnik-paramanik-146730267/",
      color: "hover:text-blue-600",
    },
    {
      name: "X",
      icon: X,
      url: "https://x.com/SagnikParamanik",
      color: "hover:text-black dark:hover:text-white",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:sagnikparamanik169@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:sagnikparamanik169@gmail.com";
  };

  return (
    <section
      id="contact"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3">Contact Me</h2>
          <p className="text-gray-400">
            Have a project, idea, or collaboration in mind? Let’s talk.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] rounded-2xl p-8 shadow-xl border border-white/10 text-center"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-r from-purple-600 to-pink-600 mb-6"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-2xl font-semibold mb-4">
            Let’s Work Together
          </h3>

          <p className="text-gray-400 mb-6">
            Whether you want to build something cool or just say hi, my inbox is
            always open.
          </p>

          <motion.button
            onClick={handleEmailClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg"
          >
            <Send className="w-4 h-4" />
            Send Email
          </motion.button>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-8">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 transition ${item.color}`}
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
