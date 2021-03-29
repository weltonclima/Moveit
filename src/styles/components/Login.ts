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

interface DivProps {
  isActive: boolean;
}

export const Input = styled.input<DivProps>`

  background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);
  border-radius: 5px 0px 0px 5px;
  width: 238px;
  height: 56px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  border: ${(props) => props.isActive
    ? '2px solid #6b75df'
    : 'none'};
  outline: none;
  color: var(--text-highlight);
  padding: 0.5rem;

  &::placeholder {
    color: var(--text-highlight);
    padding-right: 0.5rem;
  }
`;

interface ButtonProps {
  isValue: string;
}

export const Button = styled.button<ButtonProps>`

  width: 56px;
  height: 56px;
  background: ${(event) => event.isValue.length > 0
    ? '#4cd62b'
    : '#4953B8'};
  border-radius: 0px 5px 5px 0px;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  img {
    width: 16.8px;
    height: 16.8px;
  }
`;