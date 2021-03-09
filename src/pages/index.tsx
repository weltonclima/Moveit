import React from "react";
import styles from "../styles/pages/Home.module.css"
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

  const [session, loading] = useSession()

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <LoginProvider>
        <CountDownProvider>
          {!session && <>
            <div className={(styles.backLogin)}> )
              <div className={(styles.containerLogin)}>
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
              </div>
            </div>
          </>}
          {session && <>
            <div className={styles.container}>
              <Head>
                <title>Inicio | move.it</title>
              </Head>
              <ExperienceBar />
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
            </div>
          </>}
        </CountDownProvider>
      </LoginProvider >
    </ChallengesProvider >
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { level, currentExperience, challengesCompleted, username } = req.cookies;


  //const resGitHub = await fetch(`https://api.github.com/users/${username}`)
  //const user = await resGitHub.json()

  return {
    props: {
      //username: username,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
