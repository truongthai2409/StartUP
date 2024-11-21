import { useAppDispatch, useAppSelector } from "@hooks/redux/use_app_dispatch";
import { setTheme } from "@stores/slices/theme_slices";
import { useEffect } from "react";

export function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    // Kiểm tra localStorage xem có theme lưu chưa
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      try {
        const parsedTheme: { theme: "light" | "dark" } = JSON.parse(savedTheme);
        // Nếu có theme trong localStorage, cập nhật Redux store
        dispatch(setTheme(parsedTheme.theme));
      } catch (error) {
        console.error("Invalid theme data in localStorage:", error);
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // Nếu không có theme trong localStorage, kiểm tra hệ thống và thiết lập theme mặc định
      dispatch(setTheme("dark"));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify({ theme }));
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return {
    theme,
    setTheme: (newTheme: "light" | "dark") => dispatch(setTheme(newTheme)),
  };
}
