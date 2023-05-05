import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import s from "features/auth/Login/login.module.css";

export const Login = () => {
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    const payload = {
      email: "Lord23@mail.ru",
      password: "15141312",
      rememberMe: false,
    };
    dispatch(authThunks.login(payload));
  };

  return (
    <div className={s.container}>
      <h1>Login</h1>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
