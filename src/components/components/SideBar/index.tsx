import { signOut } from "next-auth/client";
import { useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Button, Container, Span } from './styles';

interface SideBarProp {
  setHome: (event) => void;
  home: boolean;
}
export function SideBar({ setHome, home }: SideBarProp) {
  const [focus, setFocus] = useState(false);

  function handleSignOut() {
    setTimeout(() => {
      setFocus(false);
    }, 1000);
  }

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
      <Button
        type="button"
        onMouseOver={e => setFocus(true)}
        onMouseOut={e => handleSignOut()}
        onClick={() => signOut()}
      >
        {focus ? <>
          <FiX color="#FFF" />
        </> : <>
          <FaGithub color="#FFF" />
        </>}
      </Button>
    </Container>
  );
}