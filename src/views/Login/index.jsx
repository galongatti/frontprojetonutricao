import React, { useState, useReducer, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import "./index.css";
import { Redirect } from "react-router-dom";
import { initialState, reducer } from "../../store";
import { login } from "../../store/action";

const axios = require("axios").default;

const HandleSubmit = async (event, login, password, setToken) => {
  event.preventDefault();

  const url = "https://localhost:44313/api/Usuario/Autenticar";
  const response = await axios.post(url, {
    login,
    password,
  });

  const { token } = response.data;

  if (response.status == 200) {
    setToken(token);
  }
};

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [token, setToken] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  if (token != "") {
    console.log("token2", token)
    login(dispatch, token);
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <div className="TelaLogin">
      <img className="logo" src="/img/healthy.png" alt="logotipo" />

      <div className="ladoDireito">
        <span className="tituloLogin">Sistema de Nutrição</span>

        <form
          className="formulario"
          autoComplete="true"
          onSubmit={(e) => HandleSubmit(e, username, password, setToken)}
        >
          <TextField
            className="textField"
            margin="normal"
            label="Login"
            type="text"
            variant="outlined"
            name="login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
