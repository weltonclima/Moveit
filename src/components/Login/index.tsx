import { signIn } from "next-auth/client";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react'
import { Github, Div, Button, Welcome } from "./styles";

export function Login() {
  const [focus, setFocus] = useState(false);

  return (
    <>
      <Welcome>
        <div>
          <img src="Logo.svg" alt="Logo move.it" />
        </div>
        <strong>Bem-vindo</strong>
      </Welcome>
      <Github>
        <small>Faça login para começar</small>
      </Github>
      <Div>
        <Button
          type="button"
          onMouseOver={e => setFocus(true)}
          onMouseOut={e => setFocus(false)}
          isActive={focus}
          isRadius={25}
          isBorder={false}
          onClick={() => signIn('github')}
        >
          <FaGithub />
        </Button>
        <Button
          type="button"
          onMouseOver={e => setFocus(true)}
          onMouseOut={e => setFocus(false)}
          isActive={focus}
          isRadius={5}
          isBorder={true}
        >
          <FaLinkedin />
        </Button>
        <Button
          type="button"
          onMouseOver={e => setFocus(true)}
          onMouseOut={e => setFocus(false)}
          isActive={focus}
          isRadius={25}
          isBorder={false}
        >
          <FaFacebook />
        </Button>
        <Button
          type="button"
          onMouseOver={e => setFocus(true)}
          onMouseOut={e => setFocus(false)}
          isActive={focus}
          isRadius={15}
          isBorder={true}
        >
          <FaInstagram />
        </Button>
      </Div>
    </>
  )
}