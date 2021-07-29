import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: ${(props) =>
    typeof props.background !== 'undefined' ? props.background : 'transparent'};
  padding: 1.5rem 3rem;
  text-align: center;
`;

function Section(props) {
  return (
    <StyledSection
      className={props.className}
      background={props.background}
      id={props.id}
    >
      {props.children}
    </StyledSection>
  );
}

export default Section;
