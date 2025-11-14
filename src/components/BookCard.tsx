import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { Book } from '../data/mockBooks';
import { toast } from 'sonner';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image
    });
    toast.success('Added to cart!');
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/book/${book.id}`)}
      >
        <div className="aspect-[3/4] overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-gray-900 mb-1 line-clamp-1">{book.title}</h3>
          <p className="text-gray-500 text-sm mb-2">{book.author}</p>
          
          <div className="flex items-center gap-1 mb-3">
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{book.rating.toFixed(1)}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#1f6feb]">${book.price.toFixed(2)}</span>
            <span className="text-xs text-gray-500">Stock: {book.stock}</span>
          </div>
        </div>
      </div>

      <div className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => navigate(`/book/${book.id}`)}
        >
          View
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-[#1f6feb] hover:bg-[#1a5acc]"
          onClick={handleAddToCart}
          disabled={book.stock === 0}
        >
          <ShoppingCart className="size-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
