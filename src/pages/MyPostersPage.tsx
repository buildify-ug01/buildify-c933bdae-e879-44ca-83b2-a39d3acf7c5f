
import { Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MobileNavigation from '@/components/layout/MobileNavigation';

export default function MyPostersPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border mobile-safe-area">
        <div className="mobile-container py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold">My Posters</h1>
            <Link to="/editor">
              <Button size="sm" className="gradient-primary">
                <Plus size={16} className="mr-2" />
                New
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mobile-container py-6">
        <Card className="p-8 text-center">
          <CardContent className="p-0">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Search size={32} className="text-muted-foreground" />
            </div>
            <h2 className="text-lg font-semibold mb-2">Your Creations</h2>
            <p className="text-muted-foreground mb-4">All your saved posters will appear here</p>
            <Link to="/editor">
              <Button>Create Your First Poster</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <MobileNavigation />
    </div>
  );
}