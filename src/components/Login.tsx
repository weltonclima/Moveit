import { signIn } from "next-auth/client";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import React from 'react'
import { Github, Div } from "../styles/components/Login";

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
      <Div>
        <button
          onClick={() => signIn('github')}
        >
          <FaGithub color="#dcdde0" />
        </button>
        <button>
          <FaLinkedin color="#dcdde0" />
        </button>
        <button>
          <FaFacebook color="#dcdde0" />
        </button>
        <button>
          <FaInstagram color="#dcdde0" />
        </button>
      </Div>
    </>
  )
}