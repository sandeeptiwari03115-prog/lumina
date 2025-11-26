import React from 'react';
import { ShoppingCart, Menu, X, GraduationCap } from 'lucide-react';
import { Page, CartItem } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  cartItems: CartItem[];
  onOpenSignup: () => void;
  onToggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  setCurrentPage, 
  cartItems, 
  onOpenSignup,
  onToggleCart
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const NavLink = ({ page, label }: { page: Page; label: string }) => (
    <button
      onClick={() => {
        setCurrentPage(page);
        setIsMobileMenuOpen(false);
      }}
      className={`text-sm font-medium transition-colors ${
        currentPage === page 
          ? 'text-indigo-600' 
          : 'text-slate-600 hover:text-indigo-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setCurrentPage(Page.HOME)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <GraduationCap size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Lumina</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink page={Page.HOME} label="Home" />
          <NavLink page={Page.SUBJECTS} label="Subjects" />
          <NavLink page={Page.STORE} label="Web Store" />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleCart}
            className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
          
          <button
            onClick={onOpenSignup}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-95"
          >
            Sign Up
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-4 shadow-lg">
          <div className="flex flex-col gap-4">
            <NavLink page={Page.HOME} label="Home" />
            <NavLink page={Page.SUBJECTS} label="Subjects" />
            <NavLink page={Page.STORE} label="Web Store" />
            <hr className="border-slate-100" />
            <button
              onClick={() => {
                onOpenSignup();
                setIsMobileMenuOpen(false);
              }}
              className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
