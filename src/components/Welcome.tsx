import { useLoginContext } from '../hooks/useHooks';
import { Container } from '../styles/components/Welcome';
export function Welcome() {
  const { login } = useLoginContext()
  function username() {

  }
  return (
    <Container>
      <div>
        <img src="Logo.svg" alt="Logo move.it" />
      </div>
      <strong>{`Bem-vindo ${login.data.name != "" &&
        login.data.name != null ?
        login.data.name : ""}`
      }</strong>
    </Container>
  );
}