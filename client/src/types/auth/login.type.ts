export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  user_id: string;
  access_token: string | null;
  refresh_token: string;
  message: string;
}

// export type { LoginData, LoginResponse }
