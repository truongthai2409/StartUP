import http from "@config/api/api_config";
import { LoginResponse, RegisterData } from "types/auth";

export const registerSevice = async (resgister: RegisterData): Promise<LoginResponse> => {
  try {
    return await http().post('/auth/register', resgister)
  } catch (error) {
    console.warn("Error during login:", error);
    throw error;
  }
};
