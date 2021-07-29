import React from 'react';

import { List, ListItem, Icon, Paragraph } from './StyledMyStack';
import Section from '../data/Section';
import Header from '../data/Header';
import Header3 from '../data/Header3';
import stackData from '../data/Stack.js';

//would need styledmystack.
function MyStack() {
  return (
    <Section id="Stack">
      <Header text="My stack" />
      <List>
        {stackData.map(
          ({ technology, description, favIconClass: icon }, index) => (
            <ListItem key={index}>
              <Icon className={`fab ${icon}`} />
              <Header3>{technology}</Header3>
              <Paragraph>{description}</Paragraph>
            </ListItem>
          )
        )}
      </List>
    </Section>
  );
}

export default MyStack;
