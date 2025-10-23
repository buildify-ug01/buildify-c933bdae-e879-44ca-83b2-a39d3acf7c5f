
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MobileNavigation from '@/components/layout/MobileNavigation';

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border mobile-safe-area">
        <div className="mobile-container py-4">
          <h1 className="text-xl font-bold mb-4">Templates</h1>
          <div className="flex space-x-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
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
            <h2 className="text-lg font-semibold mb-2">Template Gallery</h2>
            <p className="text-muted-foreground mb-4">Browse and select from hundreds of professional templates</p>
            <Button variant="outline">Coming Soon</Button>
          </CardContent>
        </Card>
      </div>

      <MobileNavigation />
    </div>
  );
}