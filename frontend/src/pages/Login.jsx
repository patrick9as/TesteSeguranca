import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
	const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
	const navigate = useNavigate();

  const handleSubmit = () => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao fazer login");
      }
      return response.json();
    }).then((data) => {
      localStorage.setItem('username', data.username);
      localStorage.setItem("role", data.role);
			navigate("/home");
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <input placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button type="submit" onClick={(e) => {
          e.preventDefault()
          handleSubmit()}
          }>Entrar</button>
      </form>
    </div>
  );
}