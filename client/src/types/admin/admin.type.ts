export interface Customer {
  key: string;
  name: string;
  email: string;
  code: string;
  phone: string;
  address: string;
}
export interface ThemeState {
  theme: "light" | "dark";
}