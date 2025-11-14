export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  category: string;
  rating: number;
}

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
    stock: 15,
    category: 'Classic',
    rating: 4.5
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop',
    stock: 20,
    category: 'Classic',
    rating: 4.8
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    description: '1984 is a dystopian social science fiction novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell\'s ninth and final book completed in his lifetime.',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
    stock: 12,
    category: 'Science Fiction',
    rating: 4.7
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'Pride and Prejudice is an 1813 novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments.',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
    stock: 18,
    category: 'Romance',
    rating: 4.6
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults, but is often read by adolescents for its themes of angst and alienation.',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop',
    stock: 10,
    category: 'Classic',
    rating: 4.3
  },
  {
    id: '6',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop',
    stock: 25,
    category: 'Fantasy',
    rating: 4.9
  },
  {
    id: '7',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    description: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?w=400&h=600&fit=crop',
    stock: 30,
    category: 'Fantasy',
    rating: 4.9
  },
  {
    id: '8',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    description: 'The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop',
    stock: 14,
    category: 'Mystery',
    rating: 4.2
  },
  {
    id: '9',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop',
    stock: 22,
    category: 'Fiction',
    rating: 4.4
  },
  {
    id: '10',
    title: 'The Book Thief',
    author: 'Markus Zusak',
    description: 'The Book Thief is a historical fiction novel by Australian author Markus Zusak, and is his most popular work. Published in 2005, The Book Thief became an international bestseller.',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
    stock: 16,
    category: 'Historical Fiction',
    rating: 4.7
  },
  {
    id: '11',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description: 'Brave New World is a dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Set in a futuristic World State, the novel anticipates huge scientific advancements.',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop',
    stock: 11,
    category: 'Science Fiction',
    rating: 4.5
  },
  {
    id: '12',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description: 'The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien\'s 1937 children\'s book The Hobbit.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1596496181848-3091d4878b24?w=400&h=600&fit=crop',
    stock: 20,
    category: 'Fantasy',
    rating: 5.0
  }
];

export const categories = [
  'All',
  'Classic',
  'Science Fiction',
  'Fantasy',
  'Romance',
  'Mystery',
  'Fiction',
  'Historical Fiction'
];
