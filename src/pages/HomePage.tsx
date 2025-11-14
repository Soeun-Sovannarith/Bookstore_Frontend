import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import { mockBooks, categories } from '../data/mockBooks';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const [filteredBooks, setFilteredBooks] = useState(mockBooks);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let filtered = mockBooks;

    if (category && category !== 'All') {
      filtered = filtered.filter(book => book.category === category);
      setSelectedCategory(category);
    } else {
      setSelectedCategory('All');
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        book =>
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower)
      );
    }

    setFilteredBooks(filtered);
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const filtered = category === 'All'
      ? mockBooks
      : mockBooks.filter(book => book.category === category);
    setFilteredBooks(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#1f6feb] to-[#1a5acc] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Discover Your Next Great Read</h1>
            <p className="text-xl text-blue-50 mb-8">
              Explore thousands of books across all genres. From timeless classics to contemporary bestsellers.
            </p>
            <Button size="lg" variant="secondary">
              Browse Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className={selectedCategory === category ? 'bg-[#1f6feb] hover:bg-[#1a5acc]' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-gray-900">
              {selectedCategory === 'All' ? 'All Books' : selectedCategory}
            </h2>
            <span className="text-gray-600">
              {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
            </span>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-4">No books found</p>
              <Button onClick={() => handleCategoryChange('All')}>
                View All Books
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
