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
   li:first-child{
      div{
      width: 3.15rem;
      height: 2.45rem;
      border-left: 2px solid var(--blue);

        span{
          position: absolute;
          height: 2.45rem;
          width: .17rem;
          background: #5965E0;
          border-radius: 0px 5px 5px 0px;
        }

        img{
          width: 22.4px;
          height: 22.4px;
          border: 1px solid red;
          margin: .5rem 0 0 1.6rem;
        }
      } 
    }

    li:last-child{
      div{
      width: 3.15rem;
      height: 2.45rem;

        img{
          width: 22.4px;
          height: 22.4px;
          border: 1px solid red;
          margin: .5rem 0 0 1.6rem;
        }
      }
    } 
  }
`;