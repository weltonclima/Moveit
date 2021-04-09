import { useChallengesContext } from '../../hooks/useHooks';
import { Container, Div, Span } from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallengesContext()

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <Div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <Span style={{ left: `${percentToNextLevel}%` }} >
          {currentExperience} xp
        </Span>
      </Div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}