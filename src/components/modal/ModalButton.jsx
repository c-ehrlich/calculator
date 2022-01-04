import styled from "styled-components";
import { visuallyHidden } from "../../styles";

const StyledModalButton = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  font-size: 16px;
  border-radius: 50%;
  font-family: "Cutive", monospace;
  cursor: pointer;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

// Create elements that screen readers can see, but don't modify the visual
// UI in any way
const ForScreenReader = styled.div`
  ${visuallyHidden}
`;

const ModalButton = (props) => {
  return (
    <StyledModalButton onClick={props.openModal}>
      <span>i</span>
      <ForScreenReader>Open Info Modal</ForScreenReader>
    </StyledModalButton>
  );
};

export default ModalButton;
