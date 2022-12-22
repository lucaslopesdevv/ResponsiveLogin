import { Header } from "../../components/Header/Header";

import svgCrediceripa from "../../assets/logo-Crediceripa.svg";
import fundo from "../../assets/fundo.jpg";
import imagemLogin from "../../assets/NewAnimation.svg";

import styles from "./Login.module.css";

export function Login() {
  return (
    <>
      <div className={styles.mainLogin}>
        <div className={styles.leftLogin}>
          <h1>
            Faça Login <br /> E acesse nosso sistema de chamados
          </h1>
          <img src={imagemLogin} alt="Floating Image" />
        </div>
        <div className={styles.rightLogin}>
          <div className={styles.cardLogin}>
            <h1>Login</h1>
            <div className={styles.textField}>
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                name="usuario"
                placeholder="Insira o usuário da máquina"
              />
            </div>
            <div className={styles.textField}>
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Insira a senha da máquina"
              />
            </div>
            <button className={styles.btnLogin}>Acessar</button>
          </div>
        </div>
      </div>
    </>
  );
}
