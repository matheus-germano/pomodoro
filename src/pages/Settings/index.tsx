import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { RangeInput } from "../../components/RangeInput";

import { PageTitle, Row, SettingsContainer, TimeChanger } from "./styles";

export function Settings() {
  const navigate = useNavigate();

  const [workTime, setWorkTime] = useState(25 * 60);
  const [restTime, setRestTime] = useState(5 * 60);

  return (
    <SettingsContainer>
      <PageTitle>
        <BsArrowLeftShort size={32} onClick={() => navigate("/")} className="back-button" />
        <h2>Timer Settings</h2>
      </PageTitle>
      <TimeChanger>
        <p>Change your work time!</p>
        <Row>
          <RangeInput
            min={5}
            max={60}
            step={1}
            value={workTime / 60}
            onChange={(e: any) => setWorkTime(e.target.value * 60)}
          />
          <p>{String(workTime / 60).padStart(2, '0')} min</p>
        </Row>
      </TimeChanger>
      <TimeChanger>
        <p>Change your break time!</p>
        <Row>
          <RangeInput
            min={5}
            max={60}
            step={1}
            value={restTime / 60}
            onChange={(e: any) => setRestTime(e.target.value * 60)}
          />
          <p>{String(restTime / 60).padStart(2, '0')} min</p>
        </Row>
      </TimeChanger>
    </SettingsContainer>
  );
}