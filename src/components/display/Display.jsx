import React from 'react'
import useStore from '../../store'
import styled from 'styled-components';

const StyledDisplay = styled.div`
  width: 300px;
  border: 3px solid red;
  background-color: white;
  display: flex;
  justify-content: flex-end;
`;

const DisplayText = styled.span`
  margin: 0;
  padding: 0;
  color: purple;
`;

const Display = () => {
  const display = useStore((state) => state.display);
  return (
    <StyledDisplay>
      <DisplayText id="display">{display}</DisplayText>
    </StyledDisplay>
  )
}

export default Display
