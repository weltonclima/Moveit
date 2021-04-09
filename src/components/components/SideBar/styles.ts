import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 4.9rem;
  height: 35,87rem;
  left: 0px;
  top: 0px;
  bottom: 0;
  display: flex;
  align-items: center;
  background: var(--white);

  >img{
    position: absolute;
    top: 0px;
    height: 29.4px;
    width: 33.6px;
    margin: 1.4rem;
  }

  ul{
   li{
      div{
      width: 3.15rem;
      height: 2.45rem;

        img{
          color: var(--blue);
          width: 22.4px;
          height: 22.4px;
          margin: .5rem 0 0 1.6rem;
          cursor: pointer;
        }
      } 
    }
  }
  `;

interface ButtonProps{
  isActive: boolean;
}

export const Button = styled.button`
  position: absolute;
  margin:  .9rem;
  bottom: 0px;
  height: 3rem;
  width: 3rem;
  border-radius: 25px;
  background: var(--blue);
  
  border: 1px solid var(--blue);

  display: flex;
  align-items: center;
  justify-content:center;

  svg{
    width: 3rem;
    height: 3rem;
  }
`;

interface SpanProps {
  isActive: boolean;
}

export const Span = styled.span<SpanProps>`
  position: absolute;
  content: "";
  height: 2.45rem;
  width: .20rem;
  left: 1px;
  border-radius: 0px 5px 5px 0px;
  background: ${(props) => props.isActive
    ? `#5965e0`
    : `none`};
`;