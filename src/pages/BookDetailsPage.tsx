import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { mockBooks } from '../data/mockBooks';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, Minus, Plus } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const book = mockBooks.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-gray-900 mb-4">Book not found</h2>
            <Button onClick={() => navigate('/')}>Back to Home</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedBooks = mockBooks
    .filter(b => b.category === book.category && b.id !== book.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image
    }, quantity);
    toast.success(`Added ${quantity} ${quantity === 1 ? 'copy' : 'copies'} to cart!`);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < book.stock) setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Book Details */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Book Cover */}
              <div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 shadow-lg">
                  <ImageWithFallback
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Book Info */}
              <div className="flex flex-col">
                <h1 className="text-gray-900 mb-2">{book.title}</h1>
                <p className="text-gray-600 text-xl mb-4">by {book.author}</p>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < Math.floor(book.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">{book.rating.toFixed(1)}</span>
                </div>

                <div className="mb-6">
                  <span className="text-[#1f6feb] text-3xl">${book.price.toFixed(2)}</span>
                </div>

                <div className="mb-6">
                  <span className={`text-sm ${book.stock > 10 ? 'text-green-600' : 'text-orange-600'}`}>
                    {book.stock > 10 ? 'In Stock' : `Only ${book.stock} left in stock`}
                  </span>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="size-4" />
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (val >= 1 && val <= book.stock) {
                          setQuantity(val);
                        }
                      }}
                      className="w-20 text-center"
                      min={1}
                      max={book.stock}
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={increaseQuantity}
                      disabled={quantity >= book.stock}
                    >
                      <Plus className="size-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#1f6feb] hover:bg-[#1a5acc] mb-4"
                  onClick={handleAddToCart}
                  disabled={book.stock === 0}
                >
                  <ShoppingCart className="size-5 mr-2" />
                  Add to Cart
                </Button>

                <div className="mt-auto pt-8 border-t">
                  <p className="text-gray-600 text-sm">
                    <span className="text-gray-900">Category:</span> {book.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-gray-900 mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed">{book.description}</p>
          </div>

          {/* Related Books */}
          {relatedBooks.length > 0 && (
            <div>
              <h2 className="text-gray-900 mb-6">Related Books</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedBooks.map((relatedBook) => (
                  <BookCard key={relatedBook.id} book={relatedBook} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
