"use client"; // Ensures interactivity

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaMicrophone,
  FaKeyboard,
  FaRobot,
  FaChartLine,
  FaGraduationCap,
  FaRocket,
  FaDollarSign,
  FaPaintBrush
} from "react-icons/fa";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const { scrollY: scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 100], [0, 1]);

  // Typewriter effect for the title
  useEffect(() => {
    const text = "FlashRad.AI";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Track scroll position for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Black & white radial gradient background
  const backgroundGradient = {
    background: "radial-gradient(circle at center, #333 0%, #000 100%)",
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen text-center text-white px-6 relative"
      style={backgroundGradient}
    >
      {/* Sticky Header/Waitlist Button */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-3 px-6 flex justify-between items-center ${
          scrollY > 100 ? "shadow-lg shadow-white/20" : ""
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center">
          <FaRocket className="text-2xl mr-2 text-gray-200" />
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            FlashRad.AI
          </span>
        </div>
        <motion.button
          className="px-4 py-2 bg-white text-black rounded-lg font-bold shadow-lg shadow-white/20 border border-white/20"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            document.getElementById("waitlist").scrollIntoView({ behavior: "smooth" })
          }
        >
          Join Waitlist - Get Free Access
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-3xl mt-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Brand Name with Typewriter Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-400 rounded-lg blur opacity-30"></div>
            <h1 className="relative text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-wide font-sans">
              {typedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </h1>
          </div>
          <motion.div
            className="h-1 w-48 mx-auto mt-2 bg-gradient-to-r from-white to-gray-400"
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ delay: 2.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-xl mt-4 text-gray-300 font-semibold">
          Redefining Radiology Reporting for Radiologists and Residents
        </motion.p>

        {/* Value Proposition Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {[
            {
              icon: (
                <div className="flex items-center">
                  <FaMicrophone className="mr-2" />
                  <FaKeyboard />
                </div>
              ),
              title: "Flexible Input",
              description: "Dictate your findings or type your keywords → Generate reports in seconds",
            },
            {
              icon: <FaRobot />,
              title: "AI Precision",
              description: "No clinically significant errors",
            },
            {
              icon: <FaDollarSign />,
              title: "Affordable",
              description: "Most affordable dictation software available",
            },
            {
              icon: <FaPaintBrush />,
              title: "Customizable",
              description: "Choose your reporting style → Brief, Moderate, or Comprehensive",
            },
            {
              icon: <FaChartLine />,
              title: "Adaptive Learning",
              description: "Adapts to your style the more you report",
            },
            {
              icon: <FaGraduationCap />,
              title: "Free for Residents",
              description: "We aim to keep it free for residents as long as possible!",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#222]/70 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(255, 255, 255, 0.15), 0 0 15px 2px rgba(255, 255, 255, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.5 + index * 0.1, duration: 0.5 },
              }}
            >
              <div className="text-3xl mb-4 text-white bg-[#111]/50 p-4 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-lg shadow-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-200">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Free Access Highlight */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-6 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl border border-white/20 shadow-lg shadow-white/10"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-100">
            <FaRocket className="inline-block mr-2 text-3xl" />
            Join Our Waitlist Today!
          </h2>
          <p className="text-lg text-gray-300">
            Early adopters get{" "}
            <span className="font-bold text-white underline decoration-gray-400">
              FREE LIFETIME ACCESS
            </span>{" "}
            to premium features
          </p>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          variants={itemVariants}
          id="waitlist"
          className="mt-10 p-8 rounded-2xl backdrop-blur-sm bg-[#222]/50 border border-white/10 max-w-xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">Join the Waitlist</h2>
          <p className="mb-6 text-gray-300">
            Be among the first to experience the future of radiology reporting.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <motion.input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-lg font-bold shadow-lg shadow-white/20 border border-white/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px 2px rgba(255, 255, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {submitted ? "Thanks!" : "Join Now"}
            </motion.button>
          </form>
        </motion.div>

        {/* Trusted by (Indian Institutions) */}
        <motion.div variants={itemVariants} className="mt-12 text-gray-400">
          <p className="mb-2 text-sm uppercase tracking-wider">
            Trusted by radiologists and residents from:
          </p>
          <div className="flex flex-wrap justify-center gap-6 opacity-70">
            {["AIIMS", "JIPMER", "PGI Chandigarh", "KMC Manipal"].map((org, i) => (
              <motion.span
                key={i}
                className="text-lg font-bold text-white"
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                {org}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Founders Info */}
        <motion.div variants={itemVariants} className="mt-8 text-gray-500 text-sm">
          Founders are alumni of AIIMS New Delhi, JIPMER, and IISc Bangalore.
        </motion.div>
      </motion.div>

      {/* Animated Particles in Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-white/20 to-gray-400/20"
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, Math.random() * -150 - 50],
              x: [0, Math.random() * 70 - 35],
              opacity: [0.7, 0],
              scale: [1, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <motion.footer
        variants={itemVariants}
        className="mt-20 text-sm text-gray-600 z-10 relative"
      >
        &copy; {new Date().getFullYear()} FlashRad.AI | All rights reserved
      </motion.footer>
    </main>
  );
}
