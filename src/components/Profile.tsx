import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { LoginContext } from '../contexts/LoginContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const {level} = useContext(ChallengesContext);
  const {login} = useContext(LoginContext);
  return (
    <div className={styles.profileContainer}>
      <img src={login.data.avatar_url} alt={login.data.name} />
      <div>
        <strong>{login.data.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}