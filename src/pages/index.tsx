import React, { useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next"
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Login } from "../components/Login";
import { Logo } from "../components/Logo";
import { Welcome } from "../components/Welcome";
import { LoginProvider } from "../contexts/LoginContext";
import { useSession } from "next-auth/client";
import {
  Container, BackLogin,
  ContainerLogin
} from "../styles/pages/Home";
import { SideBar } from "../components/SideBar";
import { LeaderBoard } from "../components/LeaderBoard";
interface HomeData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(
  { level,
    challengesCompleted,
    currentExperience
  }: HomeData) {
  const [home, setHome] = useState(true);
  const [session] = useSession()

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <CountDownProvider>
        {!session ? (
          <LoginProvider>
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
                    <Welcome />
                    <Login />
                  </div>
                </section>
              </ContainerLogin>
            </BackLogin>
          </LoginProvider >
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
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { level, currentExperience, challengesCompleted } = req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
