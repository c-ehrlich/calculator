import "./App.css";
import useStore from "./store";
import styled from "styled-components";
import GlobalFonts from "./media/fonts";

import Buttons from "./components/buttons/Buttons";
import Container from "./components/Container";
import Display from "./components/display/Display";
import Logo from "./components/Logo";
import ModeToggleContainer from "./components/mode/ModeToggleContainer";
import Power from "./components/power/Power";
import SettingsRow from "./layout/SettingsRow";
import ModalButton from "./components/modal/ModalButton";
import FullScreenModal from "./components/modal/FullScreenModal";
import InfoModal from "./components/modal/InfoModal";

const StyledApp = styled.div`
  height: 100%;
`;

function App() {
  const modalOpen = useStore((state) => state.modalOpen);
  const openModal = useStore((state) => state.openModal);
  const closeModal = useStore((state) => state.closeModal);

  return (
    <StyledApp className="App">
      <GlobalFonts />
      {modalOpen && (
        <FullScreenModal closeModal={closeModal}>
          <InfoModal closeModal={closeModal} />
        </FullScreenModal>
      )}
      <ModalButton openModal={openModal} />
      <Container>
        <Logo />
        <Display />
        <SettingsRow>
          <Power />
          <ModeToggleContainer />
        </SettingsRow>
        <Buttons />
      </Container>
    </StyledApp>
  );
}

export default App;
