"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaKeyboard,
  FaRobot,
  FaChartLine,
  FaGraduationCap,
  FaRocket,
  FaDollarSign,
  FaPaintBrush,
  FaFileAlt
} from "react-icons/fa";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  // Generate sparkles only on client-side
  useEffect(() => {
    const newSparkles = Array.from({ length: 100 }).map((_, index) => ({
      id: index,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main>
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <span className="typewriter-text">{typedText}</span>
            {!isComplete && <span className="cursor">|</span>}
          </div>
          <nav className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#waitlist" className="nav-link cta">Join Waitlist</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container hero-content">
          {/* Large FlashRad.AI Header with Sparkles */}
          <div style={{ position: 'relative', height: '250px', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.h2 
              style={{ 
                fontSize: '90px', 
                fontWeight: 700, 
                color: 'white', 
                position: 'relative',
                zIndex: 20,
                textAlign: 'center',
                fontFamily: 'var(--font-mono)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              FlashRad.AI
            </motion.h2>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0,
              overflow: 'hidden'
            }}>
              {sparkles.map((sparkle) => (
                <motion.div
                  key={sparkle.id}
                  className="sparkle"
                  style={{
                    position: 'absolute',
                    backgroundColor: '#00F0FF',
                    width: `${sparkle.size}px`,
                    height: `${sparkle.size}px`,
                    borderRadius: '50%',
                    left: `${sparkle.x}%`,
                    top: `${sparkle.y}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: sparkle.duration,
                    delay: sparkle.delay,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              ))}
            </div>
          </div>
          
          <h1>Making Radiology Reporting Easier and Efficient</h1>
          <h2>Dictate or type your findings. FlashRad.AI generates accurate reports in seconds.</h2>
          
          <div className="hero-cta">
            <a href="#waitlist" className="button">Join Waitlist – Get Free Access</a>
          </div>
          
          <div className="hero-features">
            <div className="hero-feature">
              <FaRobot className="hero-feature-icon" />
              <span>Eliminate Manual Errors</span>
            </div>
            <div className="hero-feature">
              <FaRocket className="hero-feature-icon" />
              <span>Faster Report Turnaround Times</span>
            </div>
            <div className="hero-feature">
              <FaChartLine className="hero-feature-icon" />
              <span>Adaptive to Your Reporting Style</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2>Why Choose FlashRad.AI?</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaMicrophone style={{ marginRight: "8px" }} />
                  <FaKeyboard />
                </div>
              </div>
              <h3>Flexible Input</h3>
              <p>Speak or type your findings. FlashRad.AI handles the rest.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaRobot />
              </div>
              <h3>Precision Reporting</h3>
              <p>No clinically significant errors or hallucinations.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Adaptive Learning</h3>
              <p>Learns from your reporting schemas to refine your future reports.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaDollarSign />
              </div>
              <h3>Cost-Effective</h3>
              <p>The industry's most cost-effective solution for radiology dictation.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaFileAlt />
              </div>
              <h3>Flexible Output</h3>
              <p>Download as Text, Document or PDF, in whatever format you choose.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaGraduationCap />
              </div>
              <h3>Free for Residents</h3>
              <p>Premium features at no cost for residents—no time limit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust" id="trusted-by">
        <div className="container">
          <h2>Trusted by Radiologists and Residents from Leading Institutes</h2>
          
          <div className="trust-logos">
            <div className="trust-logo">AIIMS</div>
            <div className="trust-logo">JIPMER</div>
            <div className="trust-logo">PGI Chandigarh</div>
            <div className="trust-logo">KMC Manipal</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          
          <div className="how-it-works-steps">
            <div className="step-line"></div>
            
            <div className="step">
              <div className="step-number">1</div>
              <h3>Dictate or Type</h3>
              <p>Start your report quickly, your way.</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Custom Styling</h3>
              <p>Choose your preferred style—Brief, Moderate, or Comprehensive.</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>FlashRad.AI Refinement</h3>
              <p>Our AI checks for errors and standardizes format.</p>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <h3>Instant Preview</h3>
              <p>Review the structured report in seconds.</p>
            </div>
            
            <div className="step">
              <div className="step-number">5</div>
              <h3>Download Options</h3>
              <p>Download as Text, Document or PDF, in whatever format you choose.</p>
            </div>
          </div>
          
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="#waitlist" className="button">Join Waitlist – Get Free Access</a>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="waitlist" id="waitlist">
        <div className="container">
          <h2>Join Our Waitlist Today</h2>
          <div className="waitlist-box">
            <h3>Trusted Early Adopters will get Free Lifetime Access to FlashRad.AI</h3>
            <p>Be among the first to experience the future of radiology reporting.</p>
          </div>
          
          <div className="waitlist-form">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Join Now</button>
              </div>
              {submitted && <p style={{ color: "var(--accent-primary)" }}>Thank you! We'll notify you with early access.</p>}
              <p style={{ fontSize: "0.875rem" }}>We respect your privacy—no spam, ever.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">FlashRad.AI</div>
            
            <div className="footer-links">
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms & Conditions</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright"> 2025 FlashRad.AI. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
