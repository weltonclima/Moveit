import { Container, Span } from "../styles/components/SideBar";

interface SideBarProp {
  setHome: (event) => void;
  home: boolean;
}
export function SideBar({ setHome, home }: SideBarProp) {

  return (
    <Container>
      <img src="LogoSideBar.svg" alt="Logo" />
      <ul>
        <li>
          <div>
            <Span isActive={home} />
            <img
              onClick={e => setHome(true)}

              src={home ? `home.svg` : `homeHide.svg`}
              alt="Home"
            />
          </div>
        </li>
        <li>
          <div>
            <Span isActive={!home} />
            <img
              onClick={e => setHome(false)}
              src={!home ? `award.svg` : `awardHide.svg`}
              alt="Ranking"
            />
          </div>
        </li>
      </ul>
    </Container>
  );
}