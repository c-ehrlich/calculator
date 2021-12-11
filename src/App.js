import "./App.css";
import styled from "styled-components";
import GlobalFonts from "./media/fonts";
import ButtonsLayout from "./components/buttons/ButtonsLayout";
import Container from "./components/Container";
import Display from "./components/display/Display";
import Logo from "./components/Logo";
import Power from "./components/power/Power";

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
        <Power />
        <ButtonsLayout />
      </Container>
    </StyledApp>
  );
}

export default App;
