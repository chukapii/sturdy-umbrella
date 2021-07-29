

import React from 'react';
import styled from 'styled-components';

const Header3 = styled.h3`
  font-size: 1.3rem;
`;

function Header(props) {
  return <Header3>{props.children}</Header3>;
}

export default Header;
