import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
  color: black;
`;

function Header(props) {
  return <StyledHeader className={props.className}>{props.text}</StyledHeader>;
}

export default Header;
