import React from "react";
import styled from "styled-components";

import logo from "../media/BraunLogo.svg";

const StyledLogo = styled.div`
  margin-bottom: -8px;
`;

const LogoImage = styled.img`
  width: 48px;
  margin-left: 16px;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <LogoImage src={logo} alt="Braun Logo" />
    </StyledLogo>
  );
};

export default Logo;
