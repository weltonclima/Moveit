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

export const Div = styled.div`
  display: flex;
  align-items:center;
  justify-content: left;

  button {
    height: 3rem;
    width: 3rem;
    border-radius: 25px;
    background: var(--blue-dark);
    border: 0;

    display: flex;
    align-items: center;
    justify-content:center;

    color:var(--white);
    font-weight: bold;

    svg{
      width: 25px;
      height: 25px;
    }

    transition: background 0.2s;

    &:hover{
      background: var(--green);
    }

    &+button{
      margin-left: 0.5rem;
    }
  }
`;