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
  gap: 2rem;
`;

export const TimerDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  span {
    height: 100%;

    display: flex;
    align-items: center;

    font-size: 6rem;

    &:first-child, &:last-child {
      background: var(--gray-800);

      padding: 1rem;
      border-radius: 8px;
      font-weight: 900;
      line-height: 1.6;
    }
  }
`;

export const TimerControllers = styled.div``;