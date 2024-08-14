import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 2px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
  height: 30px; 
  background-color:beige;
  outline: none;
  border: none;
  font-weight: bold;
&:hover {
    background-color: lightgrey;
    color: white; /* 호버 시 텍스트 색상 변경 */
  }
`;

const Button = ({ onClick, disabled, children }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
