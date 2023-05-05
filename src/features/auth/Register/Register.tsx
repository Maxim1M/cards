import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import s from "features/auth/Register/register.module.css";

export const Register = () => {
  const dispatch = useAppDispatch();

  const registerHandler = () => {
    const payload = {
      email: "Lord23@mail.ru",
      password: "15141312",
    };
    dispatch(authThunks.register(payload));
  };

  return (
    <div className={s.container}>
      <h1>Register</h1>
      <button onClick={registerHandler}>register</button>
    </div>
  );
};
