import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { RangeInput } from "../../components/RangeInput";

import { PageTitle, SettingsContainer, TimeChanger } from "./styles";

export function Settings() {
  const navigate = useNavigate();
  return (
    <SettingsContainer>
      <PageTitle>
        <BsArrowLeftShort size={32} onClick={() => navigate("/")} className="back-button" />
        <h2>Timer Settings</h2>
      </PageTitle>
      <TimeChanger>
        <p>Change your work time!</p>
        <RangeInput
          min={5}
          max={60}
          step={1}
        />
      </TimeChanger>
      <TimeChanger>
        <p>Change your break time!</p>
        <RangeInput
          min={5}
          max={60}
          step={1}
        />
      </TimeChanger>
    </SettingsContainer>
  );
}