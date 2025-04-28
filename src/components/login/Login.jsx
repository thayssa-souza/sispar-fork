import {useNavigate} from "react-router-dom"
//import Capa from "../../assets/Tela Login/imagem tela de login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss";
import api from "../../Services/Api";
import { useState } from "react";

function Login() {

const navigate = useNavigate() 

const irParaReembolsos = () => {
  navigate("/reembolsos") 
}

const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")

const fazerLogin = async (e) => {
  e.preventDefault()

  try {
    const response = await api.post("/colaborador/login", {
      "email": email,
      "senha": senha,
    })
    console.log(response.data)
    irParaReembolsos()

  } catch(error) {
    console.error("Erro ao fazer login:", error)
    alert("Erro ao fazer login.")
  }
}

  return (
    <main className={styles.mainLogin}>
      <section className={styles.containerFoto}>
        {/* <img src={Capa} alt="Foto de um navio cargueiro" /> */}
      </section>

      <section className={styles.formWapper}>
        <div className={styles.boxLogo}>
          <img src={Logo} alt="Logo da wilson sons" />
          <h1>Boas vindas ao Novo Portal SISPAR </h1>
          <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>

        <form action="">
          <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <p>Esqueci minha senha</p>

          <div className={styles.boxButton}>
            <button onClick={fazerLogin}>Entrar</button>
            <button>Criar conta</button>
          </div>

        </form>
      </section>
    </main>
  );
}
export default Login;
