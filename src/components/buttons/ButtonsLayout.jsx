import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faEquals,
  faMinus,
  faPercent,
  faPlus,
  faSquareRootAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

const StyledButtonsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
`;

const WhiteDot = styled.div`
  width: 6px;
  height: 6px;
  border: none;
  background-color: white;
  border-radius: 50%;
`;

const ButtonsLayout = () => {
  return (
    <StyledButtonsLayout>
      <Button type="green">M+</Button>
      <Button type="green">M –</Button>
      <Button type="green">MR</Button>
      <Button type="green" id="mc">
        MC
      </Button>
      <Button type="green" passDownId="negative">
        +/-
      </Button>
      <Button type="brown" passDownId="sqrt">
        <FontAwesomeIcon icon={faSquareRootAlt} />
      </Button>
      <Button type="black" passDownId="seven">
        7
      </Button>
      <Button type="black" passDownId="eight">
        8
      </Button>
      <Button type="black" passDownId="nine">
        9
      </Button>
      <Button type="brown" passDownId="divide">
        <FontAwesomeIcon icon={faDivide} />
      </Button>
      <Button type="brown" passDownId="percent">
        <FontAwesomeIcon icon={faPercent} />
      </Button>
      <Button type="black" passDownId="four">
        4
      </Button>
      <Button type="black" passDownId="five">
        5
      </Button>
      <Button type="black" passDownId="six">
        6
      </Button>
      <Button type="brown" passDownId="multiply">
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <Button type="brown" passDownId="clear">
        CE
      </Button>
      <Button type="black" passDownId="one">
        1
      </Button>
      <Button type="black" passDownId="two">
        2
      </Button>
      <Button type="black" passDownId="three">
        3
      </Button>
      <Button type="brown" passDownId="subtract">
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Button type="brown" passDownId="clear-current">
        C
      </Button>
      <Button type="black" passDownId="zero">
        0
      </Button>
      {/* TODO put a circular div in here instead */}
      <Button type="brown"><WhiteDot /></Button>
      <Button type="yellow" passDownId="equals">
        <FontAwesomeIcon icon={faEquals} />
      </Button>
      <Button type="brown" passDownId="add">
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </StyledButtonsLayout>
  );
};

export default ButtonsLayout;
