import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, MapPin, CheckCircle, Menu, X, Instagram, Facebook, Twitter, ChevronRight, Home, Users, Bed, Bath, Maximize } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navDark = !isHomePage || scrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navDark ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50 py-0' : 'bg-transparent py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Home className={`w-8 h-8 ${navDark ? 'text-earth-600' : 'text-stone-50'}`} />
            <span className={`font-serif text-2xl font-semibold tracking-tight ${navDark ? 'text-stone-900' : 'text-stone-50'}`}>Oak & Iron</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/homes" className={`text-sm font-medium transition-colors ${navDark ? 'text-stone-600 hover:text-earth-600' : 'text-stone-200 hover:text-stone-50'}`}>Our Homes</Link>
            <Link to="/neighborhoods" className={`text-sm font-medium transition-colors ${navDark ? 'text-stone-600 hover:text-earth-600' : 'text-stone-200 hover:text-stone-50'}`}>Neighborhoods</Link>
            <a href="/#about" className={`text-sm font-medium transition-colors ${navDark ? 'text-stone-600 hover:text-earth-600' : 'text-stone-200 hover:text-stone-50'}`}>About Us</a>
            <Link to="/reviews" className={`text-sm font-medium transition-colors ${navDark ? 'text-stone-600 hover:text-earth-600' : 'text-stone-200 hover:text-stone-50'}`}>Reviews</Link>
            <Link to="/schedule" className={`${navDark ? 'bg-stone-900 text-stone-50 hover:bg-earth-600' : 'bg-stone-50 text-stone-900 hover:bg-stone-200'} px-5 py-2.5 rounded-full text-sm font-medium transition-colors inline-block`}>
              Schedule a Tour
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={navDark ? 'text-stone-900' : 'text-stone-50'}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/homes" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-earth-600">Our Homes</Link>
            <Link to="/neighborhoods" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-earth-600">Neighborhoods</Link>
            <a href="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-earth-600">About Us</a>
            <Link to="/reviews" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-earth-600">Reviews</Link>
            <div className="pt-4">
              <Link to="/schedule" onClick={() => setIsOpen(false)} className="w-full flex justify-center bg-stone-900 text-stone-50 px-5 py-3 rounded-full text-sm font-medium hover:bg-earth-600 transition-colors">
                Schedule a Tour
              </Link>
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
          <Link to="/neighborhoods" className="shrink-0 bg-transparent border border-stone-300 text-stone-900 px-6 py-3 rounded-full text-sm font-medium hover:border-stone-900 transition-colors inline-block">
            View All Communities
          </Link>
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
              <li><Link to="/homes" className="hover:text-stone-200 transition-colors">Our Homes</Link></li>
              <li><Link to="/neighborhoods" className="hover:text-stone-200 transition-colors">Communities</Link></li>
              <li><a href="/#about" className="hover:text-stone-200 transition-colors">About Us</a></li>
              <li><Link to="/reviews" className="hover:text-stone-200 transition-colors">Testimonials</Link></li>
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

function HomePage() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutHomesSection />
      <NeighborhoodsSection />
      <WhyUsSection />
      <ReviewsSection />
    </main>
  );
}

function AllReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allReviews = [
    {
      text: "The attention to detail in our new Oak & Iron home is incredible. The entire process from selecting our lot to the final walkthrough was seamless and enjoyable.",
      author: "Sarah & Michael T.",
      community: "Whispering Pines",
      date: "October 2025"
    },
    {
      text: "We looked at several builders before choosing Oak & Iron. Their floor plans just made sense for our family, and the quality of construction is evident in every room.",
      author: "David R.",
      community: "Highland Estates",
      date: "August 2025"
    },
    {
      text: "The design center experience was fantastic. They helped us bring our vision to life while staying within our budget. We couldn't be happier with our forever home.",
      author: "The Johnson Family",
      community: "The Reserve",
      date: "June 2025"
    },
    {
      text: "From the first meeting to the day we got our keys, the Oak & Iron team was professional, transparent, and truly cared about our satisfaction. Highly recommend!",
      author: "Emily & James W.",
      community: "Whispering Pines",
      date: "May 2025"
    },
    {
      text: "We've built three homes in our lifetime, and this was by far the best experience. The craftsmanship is unparalleled, and the warranty team is incredibly responsive.",
      author: "Robert M.",
      community: "The Reserve",
      date: "March 2025"
    },
    {
      text: "Our new home is everything we dreamed of and more. The energy efficiency features have already saved us money, and the open concept layout is perfect for entertaining.",
      author: "Jessica L.",
      community: "Highland Estates",
      date: "January 2025"
    }
  ];

  return (
    <main className="flex-grow pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-earth-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Client Stories</span>
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Hear From Our Homeowners</h1>
          <p className="text-stone-600 text-lg font-light">
            Read authentic experiences from families who have chosen Oak & Iron to build their dream homes across our various communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-earth-500 text-earth-500" />
                ))}
              </div>
              <p className="text-stone-700 italic mb-8 leading-relaxed flex-grow">"{review.text}"</p>
              <div className="pt-6 border-t border-stone-100">
                <p className="font-medium text-stone-900">{review.author}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-stone-500">{review.community}</p>
                  <p className="text-xs text-stone-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-stone-900 rounded-3xl p-12 text-stone-50">
          <h2 className="text-3xl font-serif mb-4">Ready to start your own story?</h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">Join hundreds of happy homeowners and let us build the perfect backdrop for your family's memories.</p>
          <Link to="/schedule" className="bg-earth-600 text-stone-50 px-8 py-4 rounded-full text-sm font-medium hover:bg-earth-500 transition-colors inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}

const homesData = [
  { id: "aspen", name: "The Aspen", sqft: "2,450", beds: 3, baths: 2.5, price: "From $850k", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "The Aspen offers a perfect blend of cozy charm and modern elegance. Featuring an open-concept living area, a gourmet kitchen with a large island, and a luxurious master suite on the main level. Large windows flood the space with natural light, making it an inviting retreat for families of all sizes.", features: ["Gourmet Kitchen", "Main Level Master", "Covered Patio", "3-Car Garage", "Walk-in Pantry", "Vaulted Ceilings"] },
  { id: "sequoia", name: "The Sequoia", sqft: "3,200", beds: 4, baths: 3.5, price: "From $1.1M", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Designed for those who love to entertain, The Sequoia boasts a massive great room that flows seamlessly into an outdoor living space. The second floor features a versatile loft area and spacious secondary bedrooms, while the private study on the main floor provides the perfect work-from-home environment.", features: ["Outdoor Living Space", "Second Floor Loft", "Private Study", "Spa-like Master Bath", "Formal Dining Room", "Mudroom"] },
  { id: "magnolia", name: "The Magnolia", sqft: "2,800", beds: 4, baths: 3, price: "From $920k", image: "https://images.unsplash.com/photo-1600607687931-cecebd808ce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "The Magnolia is a testament to timeless architecture. With its striking curb appeal and a thoughtfully laid out interior, this home balances formal and casual living spaces perfectly. The chef's kitchen overlooks a bright morning room, creating an ideal spot for family breakfasts.", features: ["Chef's Kitchen", "Morning Room", "Jack-and-Jill Bath", "Oversized Windows", "Custom Cabinetry", "Hardwood Floors"] },
  { id: "juniper", name: "The Juniper", sqft: "1,950", beds: 3, baths: 2, price: "From $750k", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Smart, efficient, and beautifully appointed, The Juniper is single-story living at its finest. Every square foot is maximized to provide spacious living areas without the upkeep of a larger home. The split-bedroom design ensures privacy for the master suite.", features: ["Single-Story Layout", "Split-Bedroom Design", "Energy Efficient", "Low Maintenance Yard", "Granite Countertops", "Smart Home Tech"] },
  { id: "cypress", name: "The Cypress", sqft: "3,800", beds: 5, baths: 4.5, price: "From $1.4M", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "Our flagship model, The Cypress, offers unparalleled luxury and space. From the grand two-story foyer to the expansive finished basement option, this home is designed for grand living. It includes a multi-generational suite on the main floor and a breathtaking master wing upstairs.", features: ["Two-Story Foyer", "Multi-Gen Suite", "Finished Basement Option", "Wine Cellar", "Dual Walk-in Closets", "Luxury Finishes"] },
  { id: "willow", name: "The Willow", sqft: "2,100", beds: 3, baths: 2.5, price: "From $790k", image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "The Willow combines traditional charm with modern necessities. A welcoming front porch leads into a bright, open living space. The upstairs features a convenient laundry room and a versatile bonus room that can serve as a playroom, gym, or home theater.", features: ["Welcoming Front Porch", "Upstairs Laundry", "Bonus Room", "Open Concept", "Stainless Steel Appliances", "Fenced Backyard"] }
];

function OurHomesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-earth-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Floor Plans</span>
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Our Home Collection</h1>
          <p className="text-stone-600 text-lg font-light">
            Explore our portfolio of thoughtfully designed floor plans, each crafted with modern living and timeless aesthetics in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homesData.map((home, i) => (
            <Link 
              to={`/homes/${home.id}`}
              key={i}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={home.image} 
                    alt={home.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-sm text-stone-50 px-3 py-1 rounded-full text-sm font-medium">
                    {home.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-stone-900 mb-4">{home.name}</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6 text-stone-600 text-sm mt-auto">
                    <div className="flex flex-col items-center justify-center p-3 bg-stone-50 rounded-xl">
                      <Maximize className="w-5 h-5 mb-1 text-earth-600" />
                      <span>{home.sqft} sq ft</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-stone-50 rounded-xl">
                      <Bed className="w-5 h-5 mb-1 text-earth-600" />
                      <span>{home.beds} Beds</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-stone-50 rounded-xl">
                      <Bath className="w-5 h-5 mb-1 text-earth-600" />
                      <span>{home.baths} Baths</span>
                    </div>
                  </div>
                  <div className="w-full py-3 border border-stone-200 rounded-xl text-stone-900 font-medium group-hover:bg-stone-50 transition-colors text-center">
                    View Floor Plan
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

function HomeDetailsPage() {
  const { id } = useParams();
  const home = homesData.find(h => h.id === id) || homesData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="flex-grow bg-stone-50 pb-24">
      {/* Hero Section */}
      <div className="w-full h-[60vh] relative mt-20">
        <img 
          src={home.image} 
          alt={home.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40"></div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-stone-900/90 to-transparent pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-stone-300 text-sm font-medium tracking-[0.2em] uppercase mb-4 block"
              >
                Floor Plan
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif text-stone-50 mb-2"
              >
                {home.name}
              </motion.h1>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-stone-50/10 backdrop-blur-md border border-stone-50/20 px-6 py-4 rounded-2xl"
            >
              <p className="text-stone-300 text-sm mb-1">Starting at</p>
              <p className="text-3xl font-serif text-stone-50">{home.price}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Bar */}
        <div className="flex flex-wrap gap-4 md:gap-12 mb-16 pb-12 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-earth-600">
              <Maximize className="w-6 h-6" />
            </div>
            <div>
              <p className="text-stone-500 text-sm">Square Feet</p>
              <p className="text-2xl font-serif text-stone-900">{home.sqft}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-earth-600">
              <Bed className="w-6 h-6" />
            </div>
            <div>
              <p className="text-stone-500 text-sm">Bedrooms</p>
              <p className="text-2xl font-serif text-stone-900">{home.beds}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-earth-600">
              <Bath className="w-6 h-6" />
            </div>
            <div>
              <p className="text-stone-500 text-sm">Bathrooms</p>
              <p className="text-2xl font-serif text-stone-900">{home.baths}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-stone-900 mb-6">About {home.name}</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-12 font-light">
              {home.description}
            </p>

            <h3 className="text-2xl font-serif text-stone-900 mb-6">Signature Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
              {home.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-stone-700 bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-earth-600 shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-serif text-stone-900 mb-6">Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600607687931-cecebd808ce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Interior" className="w-full aspect-square object-cover rounded-2xl" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen" className="w-full aspect-square object-cover rounded-2xl" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 sticky top-28">
              <h3 className="text-2xl font-serif text-stone-900 mb-2">Interested in {home.name}?</h3>
              <p className="text-stone-600 mb-8 font-light">Schedule a tour or request more information about this floor plan.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors" placeholder="Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors" placeholder="(555) 123-4567" />
                </div>
                <button className="w-full bg-stone-900 text-stone-50 py-4 rounded-xl font-medium hover:bg-earth-600 transition-colors mt-4">
                  Request Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function NeighborhoodsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const neighborhoodsData = [
    {
      id: "whispering-pines",
      name: "Whispering Pines",
      location: "North Scottsdale",
      price: "From the $800s",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Nestled among mature pine trees, this serene community offers large lots and a community clubhouse.",
      amenities: ["Community Pool", "Walking Trails", "Clubhouse", "Gated Entry"]
    },
    {
      id: "reserve-oak-creek",
      name: "The Reserve at Oak Creek",
      location: "Westlake Valley",
      price: "From the $1.2M",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury living at its finest. The Reserve features custom-built estates with breathtaking valley views.",
      amenities: ["Golf Course Access", "Tennis Courts", "Private Security", "Fitness Center"]
    },
    {
      id: "highland-estates",
      name: "Highland Estates",
      location: "East Ridge",
      price: "From the $950s",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A family-friendly neighborhood with top-rated schools, multiple parks, and a vibrant community atmosphere.",
      amenities: ["Playgrounds", "Top-Rated Schools", "Community Garden", "Dog Park"]
    }
  ];

  return (
    <main className="flex-grow pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-earth-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Communities</span>
          <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Find Your Place</h1>
          <p className="text-stone-600 text-lg font-light">
            Discover thoughtfully planned neighborhoods designed to foster connection, celebrate nature, and provide the perfect setting for your new home.
          </p>
        </div>

        <div className="space-y-24">
          {neighborhoodsData.map((hood, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={hood.image} 
                    alt={hood.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-2 text-stone-500 mb-4">
                  <MapPin className="w-5 h-5 text-earth-600" />
                  <span className="font-medium tracking-wide uppercase text-sm">{hood.location}</span>
                </div>
                <h2 className="text-4xl font-serif text-stone-900 mb-4">{hood.name}</h2>
                <p className="text-2xl font-light text-stone-500 mb-6">{hood.price}</p>
                <p className="text-stone-600 text-lg leading-relaxed mb-8 font-light">
                  {hood.description}
                </p>
                
                <h3 className="text-lg font-medium text-stone-900 mb-4">Community Amenities</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {hood.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-700">
                      <CheckCircle className="w-4 h-4 text-earth-600 shrink-0" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/schedule" className="inline-flex items-center justify-center bg-stone-900 text-stone-50 px-8 py-4 rounded-full text-sm font-medium hover:bg-earth-600 transition-colors">
                  Schedule a Tour
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function ScheduleTourPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-earth-600 text-sm font-semibold tracking-wider uppercase mb-4 block">Visit Us</span>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Experience It <br/><span className="italic text-stone-500">In Person</span></h1>
            <p className="text-stone-600 text-lg font-light leading-relaxed mb-12">
              There's no better way to understand the Oak & Iron difference than walking through our homes. Schedule a private tour with one of our design consultants to explore our communities, view our model homes, and discuss your vision.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-earth-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-900 mb-1">Design Studio & Headquarters</h3>
                  <p className="text-stone-600 font-light">123 Builder Way, Suite 100<br/>Design City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-earth-600 shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-900 mb-1">Contact Our Team</h3>
                  <p className="text-stone-600 font-light">hello@oakandiron.com<br/>(555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100"
          >
            <h2 className="text-2xl font-serif text-stone-900 mb-6">Request a Tour</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Community of Interest</label>
                <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors text-stone-700">
                  <option value="">Select a community...</option>
                  <option value="whispering-pines">Whispering Pines</option>
                  <option value="reserve">The Reserve at Oak Creek</option>
                  <option value="highland">Highland Estates</option>
                  <option value="undecided">I'm not sure yet</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Preferred Date</label>
                  <input type="date" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors text-stone-700" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Preferred Time</label>
                  <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors text-stone-700">
                    <option value="">Select a time...</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 6PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Additional Notes or Questions</label>
                <textarea rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-earth-500 focus:ring-1 focus:ring-earth-500 transition-colors" placeholder="Tell us what you're looking for..."></textarea>
              </div>

              <button className="w-full bg-stone-900 text-stone-50 py-4 rounded-xl font-medium hover:bg-earth-600 transition-colors text-lg">
                Confirm Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-earth-500/30">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews" element={<AllReviewsPage />} />
        <Route path="/homes" element={<OurHomesPage />} />
        <Route path="/homes/:id" element={<HomeDetailsPage />} />
        <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
        <Route path="/schedule" element={<ScheduleTourPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
