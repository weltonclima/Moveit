import { useChallengesContext } from '../hooks/useHooks';
import { Container } from '../styles/components/CompletedChallenges';
export function CompletedChallenges() {
  const { challengesCompleted } = useChallengesContext()
  return (
    <Container>
      <span>Desfios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}