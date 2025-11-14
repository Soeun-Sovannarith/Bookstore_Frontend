import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BookOpen, Users, Package, Clock } from 'lucide-react';
import { mockBooks } from '../../data/mockBooks';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const stats = [
    {
      title: 'Total Books',
      value: mockBooks.length,
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Users',
      value: 248,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Orders',
      value: 156,
      icon: Package,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Pending Orders',
      value: 12,
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-gray-900 mb-8">Admin Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`size-10 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`size-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl text-gray-900">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Manage Books</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Add, edit, or remove books from your inventory. Manage pricing, stock levels, and categories.
                </p>
                <Button
                  onClick={() => navigate('/admin/books')}
                  className="bg-[#1f6feb] hover:bg-[#1a5acc]"
                >
                  Go to Books Manager
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  View and manage customer orders. Update order statuses and track fulfillment.
                </p>
                <Button
                  onClick={() => navigate('/admin/orders')}
                  className="bg-[#1f6feb] hover:bg-[#1a5acc]"
                >
                  Go to Orders Manager
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="mt-12">
            <h2 className="text-gray-900 mb-6">Recent Activity</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="size-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Package className="size-5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900">New order placed</p>
                      <p className="text-sm text-gray-600">Order #ORD-GHI789 - $16.99</p>
                    </div>
                    <span className="text-sm text-gray-500">2 min ago</span>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="size-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900">Book stock updated</p>
                      <p className="text-sm text-gray-600">The Hobbit - 5 units added</p>
                    </div>
                    <span className="text-sm text-gray-500">1 hour ago</span>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="size-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Users className="size-5 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900">New user registered</p>
                      <p className="text-sm text-gray-600">john.doe@example.com</p>
                    </div>
                    <span className="text-sm text-gray-500">3 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
