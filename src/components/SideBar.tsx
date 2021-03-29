import { Container } from "../styles/components/SideBar";

export function SideBar() {
  return (
    <Container>
      <img src="LogoSideBar.svg" alt="Logo" />
      <ul>
        <li>
          <div>
            <span></span>
            <img src="home.svg" alt="Home" />
          </div>
        </li>
        <li>
          <div>
            <span></span>
            <img src="award.svg" alt="Ranking" />
          </div>
        </li>
      </ul>
    </Container>
  );
}