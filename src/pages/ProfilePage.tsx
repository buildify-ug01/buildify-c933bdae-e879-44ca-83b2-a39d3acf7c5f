
import { Settings, Share2, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MobileNavigation from '@/components/layout/MobileNavigation';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border mobile-safe-area">
        <div className="mobile-container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Profile</h1>
            <Button variant="ghost" size="icon">
              <Settings size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mobile-container py-6">
        <Card className="mb-6">
          <CardContent className="p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">U</span>
            </div>
            <h2 className="text-lg font-semibold mb-1">User Profile</h2>
            <p className="text-muted-foreground text-sm">Creative Designer</p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-xs text-muted-foreground">Posters</div>
            </CardContent>
          </Card>
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-accent">48</div>
              <div className="text-xs text-muted-foreground">Shares</div>
            </CardContent>
          </Card>
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-2xl font-bold text-success">156</div>
              <div className="text-xs text-muted-foreground">Likes</div>
            </CardContent>
          </Card>
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Download size={20} className="text-muted-foreground" />
                <span>Downloads</span>
              </div>
              <span className="text-muted-foreground">→</span>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Share2 size={20} className="text-muted-foreground" />
                <span>Share App</span>
              </div>
              <span className="text-muted-foreground">→</span>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Star size={20} className="text-muted-foreground" />
                <span>Rate Us</span>
              </div>
              <span className="text-muted-foreground">→</span>
            </CardContent>
          </Card>
        </div>
      </div>

      <MobileNavigation />
    </div>
  );
}