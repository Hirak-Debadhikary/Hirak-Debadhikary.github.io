
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by rendering only after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="rounded-full transition-colors animate-pulse-slow focus:animate-none"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-[360deg]" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-[360deg]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
