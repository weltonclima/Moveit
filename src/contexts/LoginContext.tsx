import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Login {
  data: {
    name: string,
    avatar_url: string
  }
}

interface LoginContextData {
  login: Login;
  setLogin: (Object: Login) => void;
  username: string;
  setUsername: (event: string) => void;
  geGitHub: () => void;
}
interface LoginProviderProps {
  children: ReactNode;
}
export const LoginContext = createContext({} as LoginContextData)

export function LoginProvider({ children, }: LoginProviderProps) {
  const [username, setUsername] = useState<string>('')
  const [login, setLogin] = useState<Login>({
    data: { name: '', avatar_url: '' }
  })

  async function geGitHub() {

      axios.get(`https://api.github.com/users/${username}`)
        .then(res => setLogin({
          data: {
            name: res.data.name,
            avatar_url: res.data.avatar_url
          }
        }))
        .catch(err => err.message)
  }



  return (
    <LoginContext.Provider
      value={{
        geGitHub,
        username,
        setUsername,
        login,
        setLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}