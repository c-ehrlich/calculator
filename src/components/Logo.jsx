import React, { useEffect } from "react";
import styled from "styled-components";
import useStore from "../store";

import braunLogo from "../media/BraunLogo.svg";
import reactLogo from "../media/ReactLogo.svg";

const StyledLogo = styled.div`
  margin-bottom: -8px;
`;

const LogoImage = styled.img`
  width: 48px;
  margin-left: 16px;
`;

const Logo = () => {
  const power = useStore((state) => state.power);

  return (
    <StyledLogo>
      <LogoImage src={power ? reactLogo : braunLogo} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
