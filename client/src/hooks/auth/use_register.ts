import { LoginResponse } from 'types/auth/login.type';
import { useAppDispatch } from "@hooks/redux/use_app_dispatch";
import { loginSuccess } from "@stores/slices/auth_slices";
import { useMutation } from "@tanstack/react-query";
import { RegisterData } from "types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { registerSevice } from '@config/services/register_service';


export const useRegister = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (data: RegisterData) => {
      return registerSevice(data);
    },
    onSuccess(response: LoginResponse) {
      dispatch(
        loginSuccess({
          userId: response.user_id,
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
          isAuthenticated: true,
        })
      );
      localStorage.setItem("user_id", response.user_id!);
      localStorage.setItem("access_token", response.access_token!);
      localStorage.setItem("refresh_token", response.refresh_token!);
      toast.success("Register Success !");
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    },
    onError(error: any) {
      if (error.data.message) {
        toast.error(`Login failed: ${error.data.message || "Unknown error"}`);
      } else {
        toast.error("Login failed");
      }
    },
  });
};
