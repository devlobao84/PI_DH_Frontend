import client2 from '../../Assets/cliente-2.png'
import img from '../../Assets/imagem.png'
import './ConfirmedServide.css'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import { FaHotjar }  from 'react-icons/fa'
import { FaStar }  from 'react-icons/fa'
import payPal from '../../Assets/paypal.svg'

export default function confirm() {


  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("Token"));
  };
  const user = getCurrentUser()


  return (
    <div className="body">
      <div class="container-fluid">
        <div class="row">
        <div className="col-2 navProfile">
          <img src={client2} alt="perfil" className="foto-perfil" />
            <div class="nav-info">
              <small class="boas-vindas">Bem vindo(a)!</small>
              <h2 className="cliente">{user.user}</h2>
              <p className="email">{user.email}</p>
              <ul class="list-group">
              <li className="nav-lista"><FaHome />     Dashboard</li>
                <li className="nav-lista"><FaHotjar /> Notificações</li>
                <li className="nav-lista"><FaStar/> Preferências</li>
              </ul>
              <button className="exitButton">
                <Link className="exitLink" to="/" >Sair</Link>
              </button>
            </div>
          </div>
          <div class="col-md-4 offset-md-2 medium">
            <div class="form form-login">
              <div class="cadastro">
                <img src={img} alt="foto_perfil" className="perfil-img" />
              </div>
              <div class="row">
                <p className="h2 nome">Mariana Silva</p>
                <small className="nome">Serviço Agendado</small>
                <button type="submit" className="btn btn-warning confirmed">Corte Simples <br></br> <strong>11 de Agosto de 2020</strong>  <br></br> <strong>07:00-07:30 AM</strong></button>

                <p className="nome">Total R$20,50</p>
                <p className="nome">Descontos - R$10,00</p>
                <p className="nome"><strong>Valor Final R$10,50</strong></p>
                <small className="nome">Cupom aplicado PRIMEIRACOMPRA</small>
                <small className="nome">Inserir Cupom</small>
                <div>
                  <input type="text" placeholder="PRIMEIRACOMPRA"></input>
                </div>
                <button type="submit" className="btn btn-warning paypal"> <img src={payPal} alt="paypal" className="img-paypal" /><a href="/login/dashboard/notification">Pagar com PayPal</a> </button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}