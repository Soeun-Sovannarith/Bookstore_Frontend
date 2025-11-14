import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'sonner@2.0.3';
import { BookOpen, Shield } from 'lucide-react';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    const success = await login(formData.email, formData.password, true);
    if (success) {
      toast.success('Admin login successful!');
      navigate('/admin/dashboard');
    } else {
      toast.error('Invalid admin credentials');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <BookOpen className="size-8 text-[#1f6feb]" />
            <span className="text-[#1f6feb]">BookStore</span>
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="size-12 rounded-full bg-[#1f6feb] flex items-center justify-center">
              <Shield className="size-6 text-white" />
            </div>
            <div>
              <h1 className="text-gray-900">Admin Portal</h1>
              <p className="text-gray-600">Secure admin access</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Admin Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="admin@bookstore.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#1f6feb] hover:bg-[#1a5acc]"
              size="lg"
            >
              Login to Admin Portal
            </Button>
          </form>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <span className="text-gray-900">Demo Credentials:</span><br />
              Email: admin@bookstore.com<br />
              Password: admin
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-gray-500 hover:text-gray-700">
              Back to User Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block flex-1 bg-gradient-to-br from-[#1f6feb] to-[#1a5acc]">
        <div className="h-full flex items-center justify-center p-12">
          <div className="text-white text-center">
            <Shield className="size-24 text-white mx-auto mb-6 opacity-90" />
            <h2 className="text-white mb-4">Admin Dashboard</h2>
            <p className="text-xl text-blue-50">
              Manage your bookstore, inventory, and orders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
