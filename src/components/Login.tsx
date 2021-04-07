import { signIn } from "next-auth/client";
import { FaGithub } from 'react-icons/fa';
import React  from 'react'
import { Button, Github } from "../styles/components/Login";

export function Login() {

  return (
    <>
      <Github>
        <img
          src="Github.svg"
          alt="Imagem Github" id="img-github"
        />
        <small>Faça login com seu Github <br /> para começar</small>
      </Github>
      <div>
        <Button
          isValue={true}
          onClick={() => signIn('github')}
        >
          <FaGithub color="#dcdde0" />
          GitHub
        </Button>
      </div>
    </>
  )
}