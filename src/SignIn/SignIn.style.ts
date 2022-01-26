import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3{
    font-size: 1.5rem;
    text-align: center;
    margin: 2rem 0 0 0;
  }

  .contents-wrap{
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem
  }

  .to-signup,
  .to-guest{
    font-size: 0.8rem;
    text-align: center;
  }

`;