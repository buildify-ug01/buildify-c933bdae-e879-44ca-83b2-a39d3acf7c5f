
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, Zap, Share2, Download, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MobileNavigation from '@/components/layout/MobileNavigation';

const featuredTemplates = [
  {
    id: 1,
    title: 'Social Media Post',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop',
    likes: 234,
  },
  {
    id: 2,
    title: 'Event Flyer',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop',
    likes: 189,
  },
  {
    id: 3,
    title: 'Business Card',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
    likes: 156,
  },
  {
    id: 4,
    title: 'Instagram Story',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=400&fit=crop',
    likes: 298,
  },
];

const categories = [
  { name: 'Social Media', icon: '📱', count: 120 },
  { name: 'Business', icon: '💼', count: 85 },
  { name: 'Events', icon: '🎉', count: 67 },
  { name: 'Marketing', icon: '📈', count: 94 },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border mobile-safe-area">
        <div className="mobile-container py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">PosterMaker</h1>
              <p className="text-sm text-muted-foreground">Create stunning posters</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <Sparkles size={20} className="text-primary-foreground" />
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mobile-container py-6">
        <div className="relative overflow-hidden rounded-xl gradient-primary p-6 text-center">
          <div className="relative z-10">
            <h2 className="text-xl font-bold text-primary-foreground mb-2">
              Create Amazing Posters
            </h2>
            <p className="text-primary-foreground/90 mb-4 text-sm">
              Professional designs made simple
            </p>
            <Link to="/editor">
              <Button variant="secondary" size="lg" className="shadow-custom-md">
                <Zap size={18} className="mr-2" />
                Start Creating
              </Button>
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mobile-container py-4">
        <div className="grid grid-cols-3 gap-3">
          <Link to="/editor">
            <Card className="p-4 text-center hover:shadow-custom-md transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap size={24} className="text-primary" />
                </div>
                <p className="text-sm font-medium">Create New</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/templates">
            <Card className="p-4 text-center hover:shadow-custom-md transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-2 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Search size={24} className="text-accent" />
                </div>
                <p className="text-sm font-medium">Browse</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/my-posters">
            <Card className="p-4 text-center hover:shadow-custom-md transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 mx-auto mb-2 bg-success/10 rounded-lg flex items-center justify-center">
                  <Download size={24} className="text-success" />
                </div>
                <p className="text-sm font-medium">My Work</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="mobile-container py-4">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <Link key={category.name} to="/templates">
              <Card className="p-4 hover:shadow-custom-md transition-shadow">
                <CardContent className="p-0 flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <p className="font-medium text-sm">{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.count} templates</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Templates */}
      <div className="mobile-container py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Trending Templates</h3>
          <Link to="/templates">
            <Button variant="ghost" size="sm">View All</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {featuredTemplates.map((template) => (
            <Link key={template.id} to="/editor">
              <Card className="overflow-hidden hover:shadow-custom-md transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm rounded-full p-1">
                    <Heart size={14} className="text-muted-foreground" />
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="font-medium text-sm mb-1">{template.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{template.category}</span>
                    <div className="flex items-center space-x-1">
                      <Heart size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{template.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mobile-container py-6">
        <h3 className="text-lg font-semibold mb-4">Why Choose PosterMaker?</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap size={16} className="text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">Easy to Use</p>
              <p className="text-xs text-muted-foreground">Drag and drop interface with professional results</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Share2 size={16} className="text-accent" />
            </div>
            <div>
              <p className="font-medium text-sm">Share Instantly</p>
              <p className="text-xs text-muted-foreground">Direct sharing to all your social media platforms</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Download size={16} className="text-success" />
            </div>
            <div>
              <p className="font-medium text-sm">High Quality</p>
              <p className="text-xs text-muted-foreground">Export in multiple formats and resolutions</p>
            </div>
          </div>
        </div>
      </div>

      <MobileNavigation />
    </div>
  );
}