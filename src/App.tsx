
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

// Pages
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';
import TemplatesPage from './pages/TemplatesPage';
import MyPostersPage from './pages/MyPostersPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/editor/:id" element={<EditorPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/my-posters" element={<MyPostersPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
        <Toaster position="top-center" richColors />
      </Router>
    </ThemeProvider>
  );
}

export default App;