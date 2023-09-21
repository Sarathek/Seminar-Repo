import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

function Button(props) {
  return (
    <StyledButton onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
