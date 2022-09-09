import styled from 'styled-components';

export const TimerContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
`;

export const TimerView = styled.div`
  display: flex;
  gap: 10px;
  
  span {
    font-size: 6rem;
    font-weight: 900;
  }
`;

export const TimerControllers = styled.div``;