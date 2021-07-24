import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./index.css";
import { Redirect } from "react-router-dom";

const handleSubmit = (event, login, password, setLogado) => {
  event.preventDefault();

  const url = "https://localhost:44313/api/Usuario/Autenticar";
  const init = {
    method:"POST",
    headers: {"Content-type": "application/json"},
    credential:"include",
    body:JSON.stringify({
      login,password
    })
  }

  fetch(url, init).then(response => {
    if(response.status == 200)
      setLogado(true)
  });

};

const Login = () => {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  let [logado, setLogado] = useState(false);

  if (logado) return <Redirect to={"/dashboard"} />;

  return (
    <div className="TelaLogin">
      <img className="logo" src="/img/healthy.png" alt="logotipo" />

      <div className="ladoDireito">
        <span className="tituloLogin">Sistema de Nutrição</span>

        <form
          className="formulario"
          autoComplete="true"
          onSubmit={(e) => handleSubmit(e, login, password, setLogado)}
        >
          <TextField
            className="textField"
            margin="normal"
            label="Login"
            type="text"
            variant="outlined"
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            className="textField"
            margin="normal"
            label="Senha"
            type="password"
            variant="outlined"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="botaoLogin" variant="contained">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
