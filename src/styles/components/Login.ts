import styled from "styled-components";

export const Github = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 1.48rem;
    margin-bottom: 2.18rem;

    img {
      width: 50px;
      height: 50px;
      margin-right: 1.05rem;
      border-radius: 50%;
    }

    small {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.87rem;
      color: var(--text-highlight);
    }
`;

interface ButtonProps {
  isValue: string;
}

export const Button = styled.button<ButtonProps>`

  height: 3rem;
  border-radius: 3rem;
  background: ${(event) => event.isValue.length > 0
    ? '#4cd62b'
    : '#4953B8'};
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content:center;

  color:var(--white);
  font-weight: bold;

`;