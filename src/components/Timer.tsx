import { IoTime } from "react-icons/io5";
import styled from "styled-components";
import useTimer from "../hooks/useTimer";
import { blue } from "../styles/Colors";
import { radius } from "../styles/Styles";

const Time = styled.div`
  position: fixed;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  gap: 10px;
  bottom: 10px;
  right: 10px;
  padding: 10px 20px;
  border-radius: ${radius};
  color: white;
  font-weight: bold;
  width: 300px;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(6px) saturate(1.7);
  -webkit-backdrop-filter: blur(6px) saturate(1.7);
  box-shadow: 0 0 3px 0px #8f8f8f52;
  background-color: ${blue};
  @media (max-width: 768px) {
    left: 50%;
    translate: -50%;
  }
`;

export const Timer = () => {
  const { hour, minutes } = useTimer();

  return (
    <Time>
      <IoTime />
      Buenos Aires time: {hour} : {minutes}
    </Time>
  );
};
