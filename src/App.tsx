import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, CheckCircle, Menu, X, Instagram, Facebook, Twitter, ChevronRight, Home, Users } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50 py-0' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Home className={`w-8 h-8 ${scrolled ? 'text-earth-600' : 'text-stone-50'}`} />
            <span className={`font-serif text-2xl font-semibold tracking-tight ${scrolled ? 'text-stone-900' : 'text-stone-50'}`}>Oak & Iron</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#homes" className={`text-sm font-medium transition-colors ${scrolled ? 'text-stone-600 hover:text-earth-600' : 'text-stone-200 hover:text-stone-50'}`}>Our Homes</a>
            <a href="#neighborhoods" className={`text-sm font-medium transition-colors ${scrolled ? 'text-stone-600 hover:text-earth-600' : 'text-stone-200 hover:text-stone-50'}`}>Neighborhoods</a>
            <a href="#about" className={`text-sm font-medium transition-colors ${scrolled ? 'text-stone-600 hover:text-earth-600' : 'text-stone-200 hover:text-stone-50'}`}>About Us</a>
            <a href="#reviews" className={`text-sm font-medium transition-colors ${scrolled ? 'text-stone-600 hover:text-earth-600' : 'text-stone-200 hover:text-stone-50'}`}>Reviews</a>
            <button className={`${scrolled ? 'bg-stone-900 text-stone-50 hover:bg-earth-600' : 'bg-stone-50 text-stone-900 hover:bg-stone-200'} px-5 py-2.5 rounded-full text-sm font-medium transition-colors`}>
              Schedule a Tour
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-stone-900' : 'text-stone-50'}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#homes" className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-earth-600">Our Homes</a>
            <a href="#neighborhoods" className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-earth-600">Neighborhoods</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-earth-600">About Us</a>
            <a href="#reviews" className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-earth-600">Reviews</a>
            <div className="pt-4">
              <button className="w-full bg-stone-900 text-stone-50 px-5 py-3 rounded-full text-sm font-medium hover:bg-earth-600 transition-colors">
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Modern neighborhood home with a nice lawn at dusk" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/50"></div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        <div className="max-w-3xl text-left">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-stone-200 text-sm font-medium tracking-[0.2em] uppercase mb-6 drop-shadow-md"
          >
            Crafting Legacies Since 1998
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-stone-50 font-serif leading-none mb-8 lg:mb-0 drop-shadow-xl"
          >
            Homes Built for <br/><span className="italic font-light">Generations</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-stone-900/40 backdrop-blur-md border border-stone-50/20 p-8 rounded-3xl max-w-md shadow-2xl"
        >
          <p className="text-lg text-stone-100 mb-8 font-light leading-relaxed">
            Discover thoughtfully designed, masterfully constructed homes in the most sought-after neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full bg-stone-50 text-stone-900 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors flex items-center justify-center gap-2">
              Explore Homes <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full bg-stone-50/10 backdrop-blur-sm border border-stone-50/50 text-stone-50 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-stone-50/20 transition-colors">
              Communities
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutHomesSection() {
  return (
    <section id="homes" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-earth-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-stone-900 leading-tight">
              Thoughtfully Designed, <br/><span className="italic text-stone-500">Masterfully Built.</span>
            </h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed font-light">
              We believe a home is more than just a structure; it's the canvas for your life's memories. Every Oak & Iron home is characterized by open, light-filled spaces, premium materials, and an unwavering attention to detail that you can feel the moment you walk through the door.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Open-concept living spaces designed for modern families",
                "Energy-efficient appliances and sustainable building practices",
                "Premium finishes and customizable design options",
                "Smart home technology integrated seamlessly"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <CheckCircle className="w-5 h-5 text-earth-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-stone-900 font-medium hover:text-earth-600 transition-colors pb-1 border-b border-stone-900 hover:border-earth-600">
              View Floor Plans <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern kitchen interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square rounded-2xl overflow-hidden border-8 border-stone-50 shadow-xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Cozy living room" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NeighborhoodsSection() {
  const neighborhoods = [
    {
      name: "Whispering Pines",
      location: "North Scottsdale",
      price: "From the $800s",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "The Reserve at Oak Creek",
      location: "Westlake Valley",
      price: "From the $1.2M",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Highland Estates",
      location: "East Ridge",
      price: "From the $950s",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="neighborhoods" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-earth-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Communities</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Where You Belong
            </h2>
            <p className="text-stone-600 mt-4 text-lg font-light">
              We don't just build homes; we curate communities. Discover neighborhoods with tree-lined streets, parks, and amenities that bring people together.
            </p>
          </div>
          <button className="shrink-0 bg-transparent border border-stone-300 text-stone-900 px-6 py-3 rounded-full text-sm font-medium hover:border-stone-900 transition-colors">
            View All Communities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neighborhoods.map((hood, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={hood.image} 
                  alt={hood.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-stone-50 font-medium flex items-center gap-2">
                    Explore Community <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-2">{hood.name}</h3>
              <div className="flex items-center justify-between text-stone-600 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {hood.location}</span>
                <span className="font-medium">{hood.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section id="about" className="py-24 bg-stone-900 text-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-earth-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Foundation Built on <span className="italic text-stone-400">Trust</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center shrink-0">
                  <span className="font-serif text-xl text-earth-500">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Uncompromising Quality</h3>
                  <p className="text-stone-400 font-light leading-relaxed">
                    From the foundation to the roof, we use only premium materials and partner with the region's most skilled craftsmen to ensure your home stands the test of time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center shrink-0">
                  <span className="font-serif text-xl text-earth-500">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Transparent Process</h3>
                  <p className="text-stone-400 font-light leading-relaxed">
                    Building a home should be exciting, not stressful. We provide clear timelines, upfront pricing, and regular updates throughout the entire construction journey.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center shrink-0">
                  <span className="font-serif text-xl text-earth-500">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Personalized For You</h3>
                  <p className="text-stone-400 font-light leading-relaxed">
                    Our design studio allows you to customize finishes, fixtures, and layouts so your new house truly feels like your home from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Architect reviewing plans" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-stone-900/20"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-stone-900/80 backdrop-blur-md p-6 rounded-xl border border-stone-700">
              <div className="flex items-center gap-4 mb-2">
                <Users className="w-6 h-6 text-earth-500" />
                <span className="text-2xl font-serif">25+ Years</span>
              </div>
              <p className="text-stone-300 text-sm">Of building dreams into reality for over 1,000 families across the region.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      text: "The attention to detail in our new Oak & Iron home is incredible. The entire process from selecting our lot to the final walkthrough was seamless and enjoyable.",
      author: "Sarah & Michael T.",
      community: "Whispering Pines"
    },
    {
      text: "We looked at several builders before choosing Oak & Iron. Their floor plans just made sense for our family, and the quality of construction is evident in every room.",
      author: "David R.",
      community: "Highland Estates"
    },
    {
      text: "The design center experience was fantastic. They helped us bring our vision to life while staying within our budget. We couldn't be happier with our forever home.",
      author: "The Johnson Family",
      community: "The Reserve"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-earth-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Stories from Home</h2>
          <p className="text-stone-600 text-lg font-light">
            Don't just take our word for it. Hear from the families who have chosen to build their lives in an Oak & Iron home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-earth-500 text-earth-500" />
                ))}
              </div>
              <p className="text-stone-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-medium text-stone-900">{review.author}</p>
                <p className="text-sm text-stone-500">{review.community}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-stone-50">
              <Home className="w-6 h-6 text-earth-500" />
              <span className="font-serif text-xl font-semibold tracking-tight">Oak & Iron</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Crafting thoughtfully designed, masterfully built homes for generations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-earth-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-earth-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-stone-400 hover:text-earth-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-stone-50 font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#homes" className="hover:text-stone-200 transition-colors">Our Homes</a></li>
              <li><a href="#neighborhoods" className="hover:text-stone-200 transition-colors">Communities</a></li>
              <li><a href="#about" className="hover:text-stone-200 transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-stone-200 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-stone-200 transition-colors">Design Studio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-50 font-medium mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>123 Builder Way, Suite 100</li>
              <li>Design City, ST 12345</li>
              <li className="pt-2"><a href="tel:+15551234567" className="hover:text-stone-200 transition-colors">(555) 123-4567</a></li>
              <li><a href="mailto:hello@oakandiron.com" className="hover:text-stone-200 transition-colors">hello@oakandiron.com</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-stone-50 font-medium mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive updates on new communities and home designs.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-stone-900 border border-stone-800 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-earth-500 text-stone-200"
              />
              <button type="submit" className="bg-earth-600 text-stone-50 p-2 rounded-lg hover:bg-earth-500 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Oak & Iron Builders. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-earth-500/30">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutHomesSection />
        <NeighborhoodsSection />
        <WhyUsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
