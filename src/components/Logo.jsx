import React from "react";
import styled from "styled-components";

import logo from "../media/BraunLogo.svg";

const StyledLogo = styled.div`
`;

const LogoImage = styled.img`
  width: 3rem;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <LogoImage src={logo} alt="Braun Logo" />
    </StyledLogo>
  );
};

export default Logo;
