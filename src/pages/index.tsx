import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { useState } from "react";
import { ChallengeBox } from "../components/ChallengeBox/index";
import { CompletedChallenges } from "../components/CompletedChallenges/index";
import { CountDown } from "../components/CountDown/index";
import { ExperienceBar } from "../components/ExperienceBar/index";
import { LeaderBoard } from "../components/LeaderBoard/index";
import { Login } from "../components/Login/index";
import { Logo } from "../components/Logo/index";
import { Profile } from "../components/Profile/index";
import { SideBar } from "../components/SideBar/index";
import { ChallengesProvider } from "../hooks/useChallengesContext";
import { CountDownProvider } from "../hooks/useCountDownContext";
import {
  BackLogin,
  Container,
  ContainerLogin
} from "../styles/Home";

interface HomeProps {
  session: Session
}

export default function Home({ session }: HomeProps) {
  const [home, setHome] = useState(true);

  return (
    <ChallengesProvider>
      <CountDownProvider>
        {!session ? (
          <BackLogin>
            <ContainerLogin>
              <Head>
                <title>Login | move.it</title>
              </Head>
              <section>
                <div>
                  <Logo />
                </div>
                <div>
                  <Login />
                </div>
              </section>
            </ContainerLogin>
          </BackLogin>
        ) : (
          <Container>

            <Head>
              <title>Inicio | move.it</title>
            </Head>
            {home ? <>
              <ExperienceBar />
              <SideBar
                setHome={setHome}
                home={home}
              />
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <CountDown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </> : <>
              <Head>
                <title>LeaderBoard | move.it</title>
              </Head>
              <SideBar
                setHome={setHome}
                home={home}
              />
              <LeaderBoard 
                home={home}
              />
            </>}
          </Container>
        )}
      </CountDownProvider>
    </ChallengesProvider >
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      session,      
    }
  }
}