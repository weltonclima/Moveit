import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountDownContext } from "../contexts/CountDownContext";
import { LoginContext } from "../contexts/LoginContext";

export function useChallengesContext(){
  const context = useContext(ChallengesContext)
  return context;
}

export function useCountDownContext(){
  const context = useContext(CountDownContext)
  return context;
}

export function useLoginContext(){
  const context = useContext(LoginContext)
  return context;
}