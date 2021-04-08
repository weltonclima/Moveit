import React, { useState } from "react";
import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Login } from "../components/Login";
import { Logo } from "../components/Logo";
import { useSession } from "next-auth/client";
import {
  Container, BackLogin,
  ContainerLogin
} from "../styles/pages/Home";
import { SideBar } from "../components/SideBar";
import { LeaderBoard } from "../components/LeaderBoard";

export default function Home() {
  const [home, setHome] = useState(true);
  const [session] = useSession()

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
              <SideBar 
                setHome={setHome} 
                home={home}
              />
              <LeaderBoard />
            </>}
          </Container>
        )}
      </CountDownProvider>
    </ChallengesProvider >
  )
}
