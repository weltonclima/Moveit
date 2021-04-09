import styled from "styled-components";

export const Welcome = styled.div`

  img {
  width: 15.75rem;
  height: 3.32rem;
  margin-bottom: 3.2rem;
  }

  strong {
  width: 8.35rem;
  height: 2.01rem;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 1.57rem;
  line-height: 2.01rem;
  color: var(--white);
}
`;

export const Github = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 1.48rem;
  margin-bottom: 2.18rem;

  small {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 1.40rem;
    line-height: 1.87rem;
    color: var(--text-highlight);
  }
`;

export const Div = styled.div`
  display: flex;
  align-items:center;
  justify-content: left;
`;

interface ButtonProps {
  isActive: boolean;
  isRadius: number;
  isBorder: boolean;
}

export const Button = styled.button<ButtonProps>`
  height: 3rem;
  width: 3rem;

  border-radius:${(props) => props.isRadius > 0
    && `${props.isRadius}px`};
  
  background: var(--blue-dark);
  color:var(--white);
  border: ${(props) => props.isBorder
    ? `1px solid var(--white)`
    : `2px solid var(--blue-dark)`};

  display: flex;
  align-items: center;
  justify-content:center;

  svg{
    width: 3rem;
    height: 3rem;
  }

  transition: background 0.2s;

  &:hover{
  background:${(props) => props.isActive
    && `var(--white)`};

  color:${(props) => props.isActive
    && `var(--blue-dark)`};

  border: ${(props) => props.isBorder
    ? `2px solid var(--blue-dark)`
    : `1px solid var(--white)`};
  }

  &+button{
    margin-left: 0.5rem;
  }
`;