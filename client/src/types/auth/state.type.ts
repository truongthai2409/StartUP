export interface AuthState {
  userId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}