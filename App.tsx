import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookCard from './components/BookCard';
import SubjectCard from './components/SubjectCard';
import SubjectDetail from './components/SubjectDetail';
import AITutor from './components/AITutor';
import { Page, CartItem, Book, StoreItem, Subject } from './types';
import { FEATURED_BOOKS, KNOWLEDGE_BOOKS, SUBJECTS, STORE_ITEMS } from './constants';
import { X, Search, Filter, Mail } from 'lucide-react';

// Formspree Link
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjkdqzgj";

// Signup Modal Component connected to Formspree
const SignupModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-scale-up">
        <div className="relative bg-indigo-600 p-6 text-center text-white">
          <button onClick={onClose} className="absolute right-4 top-4 text-white/80 hover:text-white">
            <X size={20} />
          </button>
          <h2 className="text-2xl font-bold">Join Lumina</h2>
          <p className="mt-2 text-indigo-100">Start your learning journey today.</p>
        </div>
        <div className="p-8">
          <form 
            className="space-y-4" 
            action={FORMSPREE_ENDPOINT} 
            method="POST"
          >
            <input type="hidden" name="form-type" value="signup_registration" />
            <div>
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" 
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" 
                placeholder="you@example.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Primary Interest</label>
              <select 
                name="interest" 
                className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="General">General Education</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="Arts">Arts & Literature</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
            <button type="submit" className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-500 transition-colors">
              Create Account
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-slate-500">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

// Contact Modal Component connected to Formspree
const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl animate-scale-up">
        <div className="relative bg-slate-800 p-6 text-center text-white">
          <button onClick={onClose} className="absolute right-4 top-4 text-white/80 hover:text-white">
            <X size={20} />
          </button>
          <div className="flex justify-center mb-2">
            <Mail size={32} />
          </div>
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="mt-2 text-slate-300">We'd love to hear from you.</p>
        </div>
        <div className="p-8">
          <form 
            className="space-y-4" 
            action={FORMSPREE_ENDPOINT} 
            method="POST"
          >
            <input type="hidden" name="form-type" value="contact_inquiry" />
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input type="text" name="name" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows={4} required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"></textarea>
            </div>
            <button type="submit" className="w-full rounded-lg bg-slate-800 px-4 py-2.5 font-semibold text-white hover:bg-slate-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Cart Drawer Component with Booking Form
const CartDrawer = ({ isOpen, onClose, items }: { isOpen: boolean; onClose: () => void; items: CartItem[] }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Reset state when drawer closes
  useEffect(() => {
    if (!isOpen) setShowCheckout(false);
  }, [isOpen]);
  
  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />
      {/* Drawer */}
      <div className={`relative flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <h2 className="text-lg font-bold text-slate-900">{showCheckout ? 'Checkout & Booking' : 'Your Cart'}</h2>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100">
            <X size={20} className="text-slate-500" />
          </button>
        </div>
        
        {showCheckout ? (
          <div className="flex-1 overflow-y-auto p-4 animate-fade-in">
             <form action={FORMSPREE_ENDPOINT} method="POST" className="flex flex-col h-full space-y-4">
                <input type="hidden" name="form-type" value="new_order_booking" />
                <input type="hidden" name="order_total" value={total.toFixed(2)} />
                <textarea 
                  name="order_items" 
                  hidden 
                  readOnly 
                  value={items.map(i => `${i.quantity}x ${i.title} ($${i.price})`).join('\n')} 
                />

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-4">
                  <h3 className="font-semibold text-slate-700 mb-2">Order Summary</h3>
                  <div className="text-sm text-slate-600 space-y-1 max-h-32 overflow-y-auto">
                    {items.map((item, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span>{item.quantity}x {item.title}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-slate-200 mt-2 pt-2 flex justify-between font-bold text-slate-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input type="text" name="name" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email Address</label>
                  <input type="email" name="email" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Shipping Address</label>
                  <textarea name="address" rows={3} required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2"></textarea>
                </div>

                <div className="pt-4 mt-auto">
                  <button type="submit" className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-500 shadow-md">
                    Confirm Order
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setShowCheckout(false)}
                    className="mt-3 w-full rounded-lg text-slate-500 hover:text-slate-700 text-sm font-medium"
                  >
                    Back to Cart
                  </button>
                </div>
             </form>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-slate-400">
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="flex gap-4">
                      <img src={item.image} alt={item.title} className="h-20 w-16 rounded object-cover bg-slate-100" />
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-medium text-slate-900 line-clamp-1">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.type === 'book' ? 'Book' : 'Item'}</p>
                        <div className="mt-auto flex justify-between">
                          <span className="text-sm text-slate-500">Qty: {item.quantity}</span>
                          <span className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-slate-100 p-4">
              <div className="mb-4 flex justify-between text-lg font-bold text-slate-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => setShowCheckout(true)}
                className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={items.length === 0}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  // Add to cart handler
  const addToCart = (item: Book | StoreItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1, type: 'type' in item ? item.type : 'book' }];
    });
    setIsCartOpen(true);
  };

  const handleSubjectClick = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentPage(Page.SUBJECTS);
    window.scrollTo(0, 0);
  };

  const handleNavChange = (page: Page) => {
    setCurrentPage(page);
    if (page !== Page.SUBJECTS) {
        setSelectedSubject(null);
    }
  };

  // --- Views ---

  const HomeView = () => (
    <>
      <Hero onStart={() => setCurrentPage(Page.SUBJECTS)} />
      
      {/* Featured Books Section */}
      <section id="featured-books" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Books</h2>
            <button 
              onClick={() => setCurrentPage(Page.STORE)}
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              View all &rarr;
            </button>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {FEATURED_BOOKS.map(book => (
              <BookCard key={book.id} book={book} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section Preview */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Explore Subjects</h2>
            <p className="mt-4 text-lg text-slate-600">Dive into a wide range of topics curated by experts.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {SUBJECTS.slice(0, 6).map(subject => (
              <SubjectCard key={subject.id} subject={subject} onClick={handleSubjectClick} />
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Deep Knowledge</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {KNOWLEDGE_BOOKS.map(book => (
              <BookCard key={book.id} book={book} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>
    </>
  );

  const SubjectsView = () => {
    if (selectedSubject) {
        return <SubjectDetail subject={selectedSubject} onBack={() => setSelectedSubject(null)} />;
    }
    
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto min-h-screen">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900">All Subjects</h1>
            <p className="mt-4 text-slate-600">Select a subject to start learning.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUBJECTS.map(subject => (
            <div key={subject.id} className="transform transition-all hover:scale-[1.02] h-full">
                <SubjectCard subject={subject} onClick={handleSubjectClick} />
            </div>
            ))}
        </div>
        </div>
    );
  };

  const StoreView = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<'all' | 'book' | 'course' | 'equipment'>('all');

    const filteredItems = STORE_ITEMS.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'all' || item.type === filter;
      return matchesSearch && matchesFilter;
    });

    return (
      <div className="py-12 px-4 max-w-7xl mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Web Store</h1>
            <p className="text-slate-600">Educational resources, books, and equipment.</p>
          </div>
          
          <div className="flex gap-4">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search store..." 
                  className="pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <div className="relative">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Filter size={16} className="text-slate-500" />
               </div>
               <select 
                  className="pl-10 pr-8 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer appearance-none"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
               >
                 <option value="all">All Items</option>
                 <option value="book">Books</option>
                 <option value="course">Courses</option>
                 <option value="equipment">Equipment</option>
               </select>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredItems.map(item => (
              <BookCard key={item.id} book={item} onAddToCart={addToCart} />
            ))}
            {filteredItems.length === 0 && (
              <div className="col-span-full text-center py-20 text-slate-500">
                No items found matching your criteria.
              </div>
            )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={handleNavChange} 
        cartItems={cartItems} 
        onOpenSignup={() => setIsSignupOpen(true)}
        onToggleCart={() => setIsCartOpen(true)}
      />

      <main>
        {currentPage === Page.HOME && <HomeView />}
        {currentPage === Page.SUBJECTS && <SubjectsView />}
        {currentPage === Page.STORE && <StoreView />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <button onClick={() => setIsContactOpen(true)} className="text-slate-500 hover:text-indigo-600 font-semibold text-sm">
              Contact Us
            </button>
            {['About', 'Careers', 'Privacy', 'Terms'].map((item) => (
              <a key={item} href="#" className="text-slate-400 hover:text-slate-500 text-sm">
                {item}
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-slate-500">
              &copy; 2024 Lumina Education, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Overlays */}
      <AITutor />
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} />
    </div>
  );
};

export default App;