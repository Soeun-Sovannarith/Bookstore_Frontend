import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useAuth } from '../../context/AuthContext';
import { Badge } from '../../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

interface Order {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  date: string;
  status: 'pending' | 'shipping' | 'completed';
  total: number;
  items: Array<{
    id: string;
    title: string;
    author: string;
    price: number;
    quantity: number;
    image: string;
  }>;
}

const mockOrders: Order[] = [
  {
    id: 'ORD-ABC123',
    userId: 'user-1',
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
    date: '2024-11-10T10:30:00',
    status: 'completed',
    total: 42.97,
    items: [
      {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 12.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop'
      },
      {
        id: '2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 14.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'ORD-DEF456',
    userId: 'user-2',
    userName: 'Jane Smith',
    userEmail: 'jane.smith@example.com',
    date: '2024-11-12T14:15:00',
    status: 'shipping',
    total: 28.98,
    items: [
      {
        id: '3',
        title: '1984',
        author: 'George Orwell',
        price: 13.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop'
      },
      {
        id: '6',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 14.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'ORD-GHI789',
    userId: 'user-3',
    userName: 'Bob Wilson',
    userEmail: 'bob.wilson@example.com',
    date: '2024-11-14T09:45:00',
    status: 'pending',
    total: 16.99,
    items: [
      {
        id: '7',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        price: 16.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?w=400&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'ORD-JKL012',
    userId: 'user-4',
    userName: 'Alice Brown',
    userEmail: 'alice.brown@example.com',
    date: '2024-11-13T16:20:00',
    status: 'shipping',
    total: 24.99,
    items: [
      {
        id: '12',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        price: 24.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1596496181848-3091d4878b24?w=400&h=600&fit=crop'
      }
    ]
  },
  {
    id: 'ORD-MNO345',
    userId: 'user-5',
    userName: 'Charlie Davis',
    userEmail: 'charlie.davis@example.com',
    date: '2024-11-11T11:00:00',
    status: 'pending',
    total: 39.97,
    items: [
      {
        id: '8',
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        price: 14.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop'
      },
      {
        id: '9',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        price: 12.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop'
      },
      {
        id: '5',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        price: 11.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop'
      }
    ]
  }
];

export default function AdminOrdersPage() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'shipping':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleStatusChange = (orderId: string, newStatus: 'pending' | 'shipping' | 'completed') => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    if (selectedOrder?.id === orderId) {
      setSelectedOrder(prev => prev ? { ...prev, status: newStatus } : null);
    }
    toast.success('Order status updated successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-gray-900 mb-8">Manage Orders</h1>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow
                    key={order.id}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <TableCell>{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="text-gray-900">{order.userName}</p>
                        <p className="text-sm text-gray-500">{order.userEmail}</p>
                      </div>
                    </TableCell>
                    <TableCell>{formatDateTime(order.date)}</TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Select
                        value={order.status}
                        onValueChange={(value: 'pending' | 'shipping' | 'completed') => {
                          handleStatusChange(order.id, value);
                        }}
                      >
                        <SelectTrigger className="w-32" onClick={(e) => e.stopPropagation()}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="shipping">Shipping</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>

      {/* Order Details Modal */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedOrder && (
            <>
              <DialogHeader>
                <DialogTitle>Order Details</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="text-gray-900">{selectedOrder.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Order Date</p>
                    <p className="text-gray-900">{formatDateTime(selectedOrder.date)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Customer</p>
                    <p className="text-gray-900">{selectedOrder.userName}</p>
                    <p className="text-sm text-gray-500">{selectedOrder.userEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Status</p>
                    <Select
                      value={selectedOrder.status}
                      onValueChange={(value: 'pending' | 'shipping' | 'completed') => {
                        handleStatusChange(selectedOrder.id, value);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="shipping">Shipping</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-900 mb-4">Order Items</h3>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                        <div className="w-16 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.author}</p>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                            <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-gray-900">
                    <span>Total</span>
                    <span className="text-[#1f6feb]">${selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
