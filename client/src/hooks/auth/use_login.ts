import { LoginResponse } from './../../types/auth/login.type';
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAppDispatch } from "@hooks/redux/use_app_dispatch";
import { loginSevice } from "@config/services/login_service";
import { loginSuccess } from "@stores/slices/auth_slices";
import store from "@stores/index";
import { LoginData } from "types/auth";
// import { LoginData } from "@types/auth";


export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (data: LoginData) => {
      return loginSevice(data);
    },
    onSuccess(response: LoginResponse) {
      console.log(response)
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
      navigate("/home");
      console.log('State after dispatch:', store.getState().auth);
    },
    onError(error: any) {
      toast.error(`Login failed: ${error || "Unknown error"}`);
    },
  });
};
