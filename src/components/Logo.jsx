import styled from "styled-components";
import useStore from "../store";

import braunLogo from "../media/BraunLogo.svg";

import { embossedTextSvg } from "../styles";

const StyledLogo = styled.div`
  margin-bottom: -8px;
`;

const LogoImage = styled.img`
  ${embossedTextSvg}

  width: 48px;
  margin-left: 16px;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <LogoImage src={braunLogo} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
