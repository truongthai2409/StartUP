import { useTheme } from "@hooks/utils/use_theme";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center p-4 transition-colors border rounded-lg"
        aria-label="Toggle theme"
      >
        <Sun className="absolute w-5 h-5 transition-transform duration-300 scale-100 rotate-0 dark:rotate-90 dark:scale-0" />
        <Moon className="absolute w-5 h-5 transition-transform duration-300 scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  );
}
