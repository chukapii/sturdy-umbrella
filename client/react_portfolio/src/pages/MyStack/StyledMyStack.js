import styled from 'styled-components';
import UnorderedList from './StyledUnorderedList';
import StyledIcon from './Favicon';
//import StyledParagraph from '../atoms/basicTypography/Paragraph';
import StyledParagraph from './Paragraph';

const List = styled(UnorderedList)`
  max-width: 850px;
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const ListItem = styled.li`
  width: 80%;
  margin: 1.2rem auto;
  text-align: left;
  @media (min-width: 600px) {
    width: 40%;
    margin-right: 0.5rem;
  }
  @media (min-width: 1000px) {
    width: 30%;
  }
`;
const Icon = styled(StyledIcon)`
  width: 70px;
  height: 70px;
  float: left;
  font-size: 4rem;
  margin-right: 1rem;
`;
const Paragraph = styled(StyledParagraph)`
  margin: 0;
  font-size: 1rem;
  line-height: 1.3rem;
`;
export { List, ListItem, Icon, Paragraph };