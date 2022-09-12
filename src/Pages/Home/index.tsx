import { useNavigate } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";

import { Timer } from "../../components/Timer";

import { HomeContainer } from "./styles";

export function Home() {
  const navigate = useNavigate();

  function redirectToSettings() {
    navigate("settings");
  }

  return (
    <HomeContainer>
      <BsFillGearFill size={24} onClick={redirectToSettings} className="settings-button" />
      <Timer />
    </HomeContainer>
  );
}