
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

// Pages
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';
import TemplatesPage from './pages/TemplatesPage';
import MyPostersPage from './pages/MyPostersPage';
import ProfilePage from './pages/ProfilePage';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;