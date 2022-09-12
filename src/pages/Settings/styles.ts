import styled from "styled-components";

export const SettingsContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100vh;

  padding: 0 1.25rem;

  margin: 0 auto;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
`;

export const PageTitle = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;

    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      cursor: pointer;
    }
`;

export const TimeChanger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;