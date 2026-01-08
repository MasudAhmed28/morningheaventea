import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Leaf, Award, Shield, Clock, Droplets, Heart, Send, CheckCircle } from 'lucide-react';
import "./index.css";
import CONFIG from './assets/config';
import emailjs from '@emailjs/browser';

const maskPhoneNumber = (phone) => {
  return phone.slice(0, 8) + "****" + phone.slice(-2);
};


// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Products', 'Features', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
    setActiveSection(section.toLowerCase());
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-4xl"><img src={CONFIG.brand.navlogo} alt='herologo'  className="w-10 h-10 md:w-12 md:h-12 object-contain"/></div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-green-900">{CONFIG.brand.name}</h1>
              <p className="text-xs text-green-700 hidden md:block">{CONFIG.brand.tagline}</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-green-700'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ background: CONFIG.brand.heroBackground }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl">🍃</div>
        <div className="absolute bottom-20 right-10 text-8xl">☕</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">🌿</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Main Logo/Icon */}
          <div className="text-9xl mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
           <img src={CONFIG.brand.heroLogo} alt='herologo' className="block mx-auto w-48"/>
          </div>

          {/* Brand Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            {CONFIG.brand.name}
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-green-100 mb-8 font-light">
            {CONFIG.brand.tagline}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Experience the perfect blend of tradition and taste. Premium quality tea leaves
            delivering strong flavor and lasting freshness in every cup.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProducts}
              className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
            >
              Explore Our Teas
              <ChevronRight size={20} />
            </button>
            <button
              onClick={scrollToContact}
              className="bg-green-800/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-800 transition-all transform hover:scale-105 shadow-xl border-2 border-white/30"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-sm mb-2">Scroll Down</div>
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            {CONFIG.about.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {CONFIG.about.description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {CONFIG.about.highlight}
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold text-green-900">Our Promise</p>
                <p className="text-gray-600">Quality in every cup, freshness in every sip</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-center">
              <div className="text-8xl mb-6">🌅</div>
              <h3 className="text-3xl font-bold mb-4">Dawn to Cup</h3>
              <p className="text-green-100 text-lg">
                Handpicked at sunrise when leaves are at their freshest and most flavorful
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONFIG.about.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform"
            >
              <div className="text-5xl font-bold text-green-700 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
      
      {/* Product Image */}
      <div className="h-56 bg-blue-500 flex items-center justify-center overflow-hidden">
        {typeof product.image === "string" &&
        (product.image.startsWith("http") || product.image.startsWith("/")) ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-9xl">{product.image}</span> // Emoji fallback
        )}
      </div>

      {/* Product Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-900 mb-3">{product.name}</h3>

        <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>

        {/* Pack Sizes */}
        {product.sizes && (
          <>
            <p className="text-sm font-semibold text-green-800 mb-2">Available Sizes</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Features */}
        {product.features && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.map((feature, index) => (
              <span
                key={index}
                className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          disabled={product.comingSoon}
          className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2
            ${
              product.comingSoon
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-green-700 text-white hover:bg-green-800"
            }`}
        >
          {product.comingSoon ? "Launching Soon" : "Enquire Now"}
          {!product.comingSoon && <ChevronRight size={18} />}
        </button>
      </div>
    </div>
  );
};



// Products Section Component
const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Our Premium Teas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium teas, each crafted to perfection
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONFIG.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-xl font-bold text-green-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Why Choose Morning Heaven Tea?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference that quality and care make in every cup
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONFIG.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);


  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
  if (!validateForm()) return;
  setSending(true);

   const templateParams = {
    title: "Morning Heaven Tea Enquiry", // or you can pass product name if needed
    name: formData.name,
    time: new Date().toLocaleString(),
    message: formData.message,
    email: formData.email,
    phone:formData.phone
  };

 
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY             
  ).then(
    (result) => {
      console.log('Email sent:', result.text);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    },
    (error) => {
      console.log('Email send error:', error.text);
      alert('Failed to send message. Please try again.');
    }
  ).finally(() => setSending(false));
};

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                   <a href={`tel:${CONFIG.contact.phone.replace(/\s+/g, "")}`} className="text-green-100 hover:text-white transition-colors">
                   {maskPhoneNumber(CONFIG.contact.phone)}</a>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-green-100">{CONFIG.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-green-100">{CONFIG.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-900 mb-6">Send us a Message</h3>

            {submitted && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
                <CheckCircle size={20} />
                <span className="font-medium">Thank you! We'll get back to you soon.</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-green-600 transition-all`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-green-600 transition-all`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-green-600 transition-all`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-green-600 transition-all resize-none`}
                  placeholder="Tell us about your enquiry..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button onClick={handleSubmit} disabled={sending} className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg transform transition-all
    ${sending
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-green-700 text-white hover:bg-green-800 hover:scale-105"
    }`}
>
  {sending ? (
    <div className="flex items-center gap-2">
      {/* Simple spinner */}
      <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></div>
      Sending...
    </div>
  ) : (
    <>
      <Send size={20} />
      Send Message
    </>
  )}
</button>
<p className="text-sm text-gray-500 mt-4">
  Your email and phone number will only be used to respond to your enquiry. We will never share your information with third parties.
</p>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-4xl"><img src={CONFIG.brand.navlogo} alt='herologo'  className="w-10 h-10 md:w-12 md:h-12 object-contain"/></div>
              <div>
                <h3 className="text-2xl font-bold">{CONFIG.brand.name}</h3>
                <p className="text-green-200 text-sm">{CONFIG.brand.tagline}</p>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              Premium quality tea leaves delivering strong flavor and lasting freshness in every cup.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-green-100 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                 <a href={`tel:${CONFIG.contact.phone.replace(/\s+/g, "")}`} className="text-green-100 hover:text-white transition-colors">
                   {maskPhoneNumber(CONFIG.contact.phone)}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                {CONFIG.contact.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 pt-8 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} {CONFIG.brand.name}. All rights reserved.</p>
          <p className="text-sm mt-2">Crafted with ❤️ for tea lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
export default function MorningHeavenTea() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}