import React from 'react'
import styled from 'styled-components'
import ModeToggle from './ModeToggle';

const ModeToggleContainerOuter = styled.div`
  display: flex;
  gap: 6px;
`;

const Labels = styled.div`
  top: -2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 6px 0;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  font-family: "AGRegular";
`;

const LabelText = styled.span`
  font-size: 12px;
  color: #DDD;
`;

const LabelDot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  border: none;
  background-color: #DDD;
`;

const ModeToggleContainer = () => {
  return (
    <ModeToggleContainerOuter>
      <Labels>
        <Label>
          <LabelText>SCI</LabelText>
          <LabelDot />
        </Label>
        <Label>
          <LabelText>REG</LabelText>
          <LabelDot />
        </Label>
      </Labels>
      <ModeToggle />
    </ModeToggleContainerOuter>
  )
}

export default ModeToggleContainer
