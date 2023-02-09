import Btn from "./back-button-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export const BackBtn = () => {
  const goBack = useNavigate();
  return (
    <Btn.Container>
      <Btn onClick={() => goBack(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Btn>
    </Btn.Container>
  );
};
