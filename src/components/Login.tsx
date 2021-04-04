import { signIn } from "next-auth/client";
import React, { useEffect, useState, } from 'react'
import { useLoginContext } from "../hooks/useHooks";
import { Button, Github, Input } from "../styles/components/Login";

export function Login() {
  const [stateInput, setStateInput] = useState(false);
  const [greenButton, setGreenButton] = useState(false);

  const { username, setUsername,
    login, setLogin, geGitHub
  } = useLoginContext()

  useEffect(() => {

    if (username.length > 0) {
      setTimeout(() => {
        setGreenButton(true);
      }, 5000);
      geGitHub();
    } else {
      setGreenButton(false);
      setLogin({
        data: { name: '', avatar_url: '' }
      })
    }
  }, [username])

  return (
    <>
      <Github>
        <img
          src={login.data.avatar_url != '' ? login.data.avatar_url : `Github.svg`}
          alt="Imagem Github" id="img-github"
        />
        <small>Faça login com seu Github <br /> para começar</small>
      </Github>
      <div>
        <Input
          value={username}
          isActive={stateInput}
          type="text"
          placeholder="Digite seu username"
          onFocus={e => setStateInput(true)}
          onBlur={e => setStateInput(false)}
          onChange={e => setUsername(e.target.value)}
        />
        <Button
          isValue={username}
          disabled={!greenButton}
          onClick={() => signIn('github')}
        >
          <img src="Vector.svg" alt="Icone do Botão" />
        </Button>
      </div>
    </>
  )
}