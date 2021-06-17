import React, { useState } from "react";
import img from "../../Assets/ilustracao.svg";
import logo from "../../Assets/Logo.svg";
import {TOKEN_POST } from '../../api'
import { useHistory } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    senha: ''
  })
  let history = useHistory();




  const handleSubmit = (e) => {
    e.preventDefault()
  setForm(data =>
    ({
      ...data,
      [e.target.name]: e.target.value
    })
    )
}

 async function loginSubmit(e) {
    e.preventDefault();
    const { url, options } = TOKEN_POST(form);
    const tokenRes = await fetch(url, options);
    const content = await tokenRes.json();
    
    localStorage.setItem(
       'Token', JSON.stringify(content)
    );

    history.push('/login/dashboard');
}

  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-7 welcome">
            <h1>Seja bem-vindo!</h1> <br></br>
            <p>Faça login com seu usuário e senha e aproveite ao máximo o sistema da Wally!</p>
            <br></br>
            <img className="ilustra" src={img} alt="Ilustração"></img>
          </div>
          <div className="col-5 mw-100 div-form div-res">
            <div>
              <div className="cadastro">
                <span>Login</span>
              </div>
              <form onSubmit={loginSubmit}>
                <div className="row res-row">
                  <small id="passwordHelpBlock" className="form-text text-muted descricao">
                    Endereço de e-mail
                  </small>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Endereço de email"
                    onChange={handleSubmit}
                  />
                  <small id="passwordHelpBlock" className="form-text text-muted descricao">
                    Senha
                  </small>
                  <input
                    type="password"
                    className="form-control"
                    name="senha"
                    placeholder="Senha"
                    onChange={handleSubmit}
                  />
                  <small id="passwordHelpBlock" className="form-text text-muted descricao">
                    Manter Logado
                    <input type="checkbox" name="lembreLogado" />
                  </small>
                  <div>
                    <button type="submit" className="btn btn-warning input-maior">
                      Efetuar login
                    </button>
                    <img src={logo} alt="logo do site" className="logotipo logo-res"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
