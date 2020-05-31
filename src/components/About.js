import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 16px;
  background-color: white;
  color: white;
  color: blue;
`;

const Footer = () => (
  <Container>
    <h1>About this project</h1>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </span>
  </Container>
);

export default Footer;
