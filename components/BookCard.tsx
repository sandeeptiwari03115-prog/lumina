import React from 'react';
import { Book } from '../types';
import { ShoppingBag, Star, Info } from 'lucide-react';
import { getBookSummary } from '../services/geminiService';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [summary, setSummary] = React.useState<string | null>(null);
  const [loadingSummary, setLoadingSummary] = React.useState(false);

  const handleSummarize = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (summary) return;
    
    setLoadingSummary(true);
    const text = await getBookSummary(book.title, book.author);
    setSummary(text);
    setLoadingSummary(false);
  };

  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[2/3] w-full overflow-hidden bg-slate-200 relative">
        <img
          src={book.image}
          alt={book.title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {/* Quick Summary Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/70 p-4 flex flex-col justify-end text-white animate-fade-in transition-opacity">
            <h4 className="font-bold text-sm mb-2">AI Summary</h4>
            <p className="text-xs leading-relaxed opacity-90">
              {loadingSummary ? 'Thinking...' : (summary || book.description.substring(0, 100) + '...')}
            </p>
            {!summary && (
              <button 
                onClick={handleSummarize}
                className="mt-3 flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-indigo-300 hover:text-indigo-200"
              >
                <Info size={12} /> Generate AI Summary
              </button>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
            {book.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 leading-tight">
          {book.title}
        </h3>
        <p className="mt-1 text-sm text-slate-500">{book.author}</p>
        
        <div className="mt-4 flex flex-1 items-end justify-between">
          <div>
            <div className="flex items-center gap-1 text-amber-400">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-medium text-slate-700">{book.rating}</span>
            </div>
            <p className="mt-1 text-lg font-bold text-slate-900">${book.price.toFixed(2)}</p>
          </div>
          
          <button
            onClick={() => onAddToCart(book)}
            className="rounded-full bg-indigo-600 p-2.5 text-white shadow-sm hover:bg-indigo-500 active:scale-95 transition-all"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
