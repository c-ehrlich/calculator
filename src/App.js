import "./App.css";
import styled from "styled-components";
import GlobalFonts from "./media/fonts";

import Buttons from "./components/buttons/Buttons";
import Container from "./components/Container";
import Display from "./components/display/Display";
import Logo from "./components/Logo";
import ModeToggleContainer from "./components/mode/ModeToggleContainer";
import Power from "./components/power/Power";
import SettingsRow from "./layout/SettingsRow";

const StyledApp = styled.div`
  height: 100%;
`;

function App() {
  return (
    <StyledApp className="App">
      <GlobalFonts />
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
