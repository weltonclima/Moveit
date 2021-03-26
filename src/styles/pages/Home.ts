import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-items: center;
  }
`;

export const BackLogin = styled.div`
  background: var(--blue-dark);
`;

export const ContainerLogin = styled.div`
  height: 100vh;
  max-width: 1108px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  section {
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    background: var(--blue);
    border-radius: 5px;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-items: center;
  }
`;