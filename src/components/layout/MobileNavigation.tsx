
import { Home, Image, Bookmark, User, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Image, label: 'Templates', path: '/templates' },
  { icon: Bookmark, label: 'My Posters', path: '/my-posters' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function MobileNavigation() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border mobile-safe-area">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.path} to={item.path} className="flex-1">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "flex flex-col items-center gap-1 h-auto py-2 w-full",
                  isActive && "text-primary bg-primary/10"
                )}
              >
                <Icon size={20} />
                <span className="text-xs">{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </div>
      
      {/* Floating Action Button */}
      <Link to="/editor" className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          size="icon"
          className="w-12 h-12 rounded-full gradient-primary shadow-custom-lg"
        >
          <Plus size={24} className="text-primary-foreground" />
        </Button>
      </Link>
    </div>
  );
}