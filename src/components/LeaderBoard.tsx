import { Container, User } from "../styles/components/LeaderBoard";

export function LeaderBoard() {

  return (
    <Container>
      <h1>LeaderBoard</h1>
      <table>
        <thead>
          <tr>
            <th>POSIÇÃO</th>
            <th>USUÁRIO</th>
            <th>DESAFIOS</th>
            <th>EXPERIÊNCIA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <User>
                <img src="https://github.com/diego3g.png" alt="" />
                <div>
                  <span>Diego Fernandes</span>
                  <div>
                    <img src="icons/level.svg" alt="Level" />
                    <small>Level 43</small>
                  </div>
                </div>
              </User>
            </td>
            <td>
              <span>127</span> completados
            </td>
            <td>
              <span>154000</span> xp
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <User>
                <img src="https://github.com/diego3g.png" alt="" />
                <div>
                  <span>Diego Fernandes</span>
                  <div>
                    <img src="icons/level.svg" alt="Level" />
                    <small>Level 43</small>
                  </div>
                </div>
              </User>
            </td>
            <td>
              <span>127</span> completados
            </td>
            <td>
              <span>154000</span> xp
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}