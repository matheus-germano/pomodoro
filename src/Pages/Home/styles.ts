import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 1.25rem;

  margin: 0 auto;
  position: relative;

  & .settings-button {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;