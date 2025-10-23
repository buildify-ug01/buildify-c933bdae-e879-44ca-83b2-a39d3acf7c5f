
import { ArrowLeft, Download, Share2, Undo, Redo, Type, Image, Shapes } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border mobile-safe-area">
        <div className="mobile-container py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft size={20} />
                </Button>
              </Link>
              <h1 className="font-semibold">Poster Editor</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Undo size={18} />
              </Button>
              <Button variant="ghost" size="icon">
                <Redo size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 p-4">
        <div className="max-w-sm mx-auto">
          <Card className="aspect-[3/4] bg-muted border-2 border-dashed border-border flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Image size={32} className="text-primary" />
              </div>
              <p className="text-muted-foreground">Canvas Area</p>
              <p className="text-sm text-muted-foreground">Editor functionality coming soon</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Tools */}
      <div className="bg-card border-t border-border p-4">
        <div className="flex items-center justify-around">
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Type size={20} />
            <span className="text-xs">Text</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Image size={20} />
            <span className="text-xs">Image</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center gap-1">
            <Shapes size={20} />
            <span className="text-xs">Shapes</span>
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-card border-t border-border p-4 mobile-safe-area">
        <div className="flex space-x-3">
          <Button variant="outline" className="flex-1">
            <Download size={18} className="mr-2" />
            Save
          </Button>
          <Button className="flex-1 gradient-primary">
            <Share2 size={18} className="mr-2" />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
}