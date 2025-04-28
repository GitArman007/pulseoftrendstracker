
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check for user's preferred color scheme
const setInitialColorMode = () => {
  // Check for dark mode preference
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('trends-observer-theme');
  
  // If a theme is stored, use that
  if (storedTheme) {
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    return;
  }
  
  // If no stored preference, use system preference
  if (prefersDarkMode) {
    document.documentElement.classList.add('dark');
  }
};

// Set initial color mode before initial render
setInitialColorMode();

createRoot(document.getElementById("root")!).render(<App />);
