import { signIn } from "next-auth/client";
import React, { useEffect, useState, } from 'react'
import { useLoginContext } from "../hooks/useHooks";
import { Github, User } from "../styles/components/Login";

interface LoginData { }

export function Login({ }: LoginData) {
  const [stateInput, setStateInput] = useState<boolean>(false);
  const [greenButton, setGreenButton] = useState<boolean>(false);

  const { username, setUsername,
    login, setLogin, geGitHub
  } = useLoginContext()

  useEffect(() => {
    const inputValue = document.querySelector('input')

    stateInput ? inputValue.setAttribute('style', 'border: 2px solid #6b75df') :
      inputValue.removeAttribute('style');

  }, [stateInput])

  useEffect(() => {
    const input = document.querySelector('input').value
    const button = document.querySelector('button')
    const result = /\w+/g.test(input);

    if (result) {
      button.setAttribute('style', 'background: #4cd62b');
      setGreenButton(true);
      geGitHub();
    } else {
      button.removeAttribute('style');
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
          src={greenButton && login.data.avatar_url != '' ? login.data.avatar_url : `Github.svg`}
          alt="Imagem Github" id="img-github"
        />
        <small>Faça login com seu Github <br /> para começar</small>
      </Github>
      <User>
        <input
          type="text"
          placeholder="Digite seu username"
          onFocus={e => setStateInput(true)}
          onBlur={e => setStateInput(false)}
          onChange={e => setUsername(e.target.value)}
        />
        <button
          disabled={!greenButton}
          onClick={() => signIn()}
        >
          <img src="Vector.svg" alt="Icone do Botão" />
        </button>
      </User>
    </>
  )
}