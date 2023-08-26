import { useState } from "react";
import { userLogin } from "src/services/user.service";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLogin(formLogin)
      .then((resp) => {
        /**
         * 1. lưu storage
         * 2. navigate profile
         */
        localStorage.setItem(
          "accessToken",
          JSON.stringify(resp.content.accessToken)
        );
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        name="email"
        value={formLogin.email}
        onChange={handleChange}
        placeholder="email"
      />
      <input
        name="password"
        onChange={handleChange}
        value={formLogin.password}
        placeholder="password"
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
