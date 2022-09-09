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

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
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

export const TimerControllers = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  button {
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background: var(--purple-500);
    color: var(--gray-100);

    transition: background 0.2s;

    &:hover {
      background: var(--purple-700);
    }
  }
`;