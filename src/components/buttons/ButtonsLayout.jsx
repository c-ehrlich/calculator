import React from "react";
import styled from "styled-components";

import Button from "./Button";

const StyledButtonsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;

const ButtonsLayout = () => {
  return (
    <StyledButtonsLayout>
      <Button type="green">M+</Button>
      <Button type="green">M-</Button>
      <Button type="green">MR</Button>
      <Button type="green" id="mc">MC</Button>
      <Button type="green" passDownId="negative">
        +/-
      </Button>
      <Button type="brown" passDownId="sqrt">
        Sq
      </Button>
      <Button type="black" passDownId="seven">7</Button>
      <Button type="black" passDownId="eight">8</Button>
      <Button type="black" passDownId="nine">9</Button>
      <Button type="brown" passDownId="divide">/</Button>
      <Button type="brown" passDownId="percent">%</Button>
      <Button type="black" passDownId="four">4</Button>
      <Button type="black" passDownId="five">5</Button>
      <Button type="black" passDownId="six">6</Button>
      <Button type="brown" passDownId="multiply">x</Button>
      <Button type="brown" passDownId="clear">CE</Button>
      <Button type="black" passDownId="one">1</Button>
      <Button type="black" passDownId="two">2</Button>
      <Button type="black" passDownId="three">3</Button>
      <Button type="brown" passDownId="subtract">-</Button>
      <Button type="brown" passDownId="clear-current">C</Button>
      <Button type="black" passDownId="zero">0</Button>
      {/* TODO put a circular div in here instead */}
      <Button type="brown">.</Button> 
      <Button type="yellow" passDownId="equals">=</Button>
      <Button type="brown" passDownId="add">+</Button>
    </StyledButtonsLayout>
  );
};

export default ButtonsLayout;
