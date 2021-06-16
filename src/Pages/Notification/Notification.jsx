


export default function notification() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 nav">
          <img src="/images/imagem.png" alt="perfil"></img>
          <div class="nav-info">
            <small>Seja bem vinda.</small>
            <h2>Ana Maria</h2>
            <ul class="list-group">
              <li class="list-group-item nav-lista"><i class="fas fa-home">Dashboard</i></li>
              <li class="list-group-item nav-lista"><i class="fas fa-bell">Notificações</i></li>
              <li class="list-group-item nav-lista"><i class="fas fa-cog">Preferências</i></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 offset-md-2">
          <div class="form form-login">
            <div class="cadastro">
              <img src="/images/imagem.png" alt="foto_perfil" class="perfil-img"></img>
            </div>
            <div class="row">
              <p class="h2 nome">Mariana Silva</p>
              <small class="nome">Serviço Agendado</small>
              <button type="submit" class="btn btn-warning input-maior ajuste">Corte Simples <br></br> <strong>11 de Agosto de 2020</strong>  <br></br> <strong>07:00-07:30 AM</strong>      </button>

              <p class="nome">Total R$20,50</p>
              <p class="nome">Descontos - R$10,00</p>
              <p class="nome"><strong>Valor Final R$10,50</strong></p>
              <small class="nome">Cupom aplicado PRIMEIRACOMPRA</small>
              <p class="agradecimento">Obrigado! Os detalhes foram enviados para o e-mailanamaria@gmail.com</p>
              <button type="submit" class="btn btn-warning input-maior inicio">Voltar ao início</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}