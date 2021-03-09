import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import styles from '../styles/components/Welcome.module.css'
export function Welcome() {
  const { login } = useContext(LoginContext)
  function username() {

  }
  return (
    <div className={styles.container}>
      <div>
        <img src="logo.svg" alt="Logo move.it" />
      </div>
      <strong>{`Bem-vindo ${login.data.name != "" &&
          login.data.name != null ?
          login.data.name : ""}`
      }</strong>
    </div>
  );
}