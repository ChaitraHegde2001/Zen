import React from 'react';
import styled from 'styled-components';
import logo from '../dist/fabricioduarte-logo.jpg';
import github from '../dist/GitHub-Mark-32px.png';

const Container = styled.header`
  background-color: white;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e4e2e2;
  box-shadow: 0px 0px 10px rgba(97, 97, 97, 0.3);
`;

const Header = () => (
  <Container>
    <img src={logo} alt="fabricio duarte logo" width="32" height="32" />
    <h1 className="ml-2 text-lg font-semibold text-blue-600">Link generator</h1>
    <a href="https://github.com/FabDuarte/link-generator">
      <img src={github} alt="github logo" width="32" height="32" />
    </a>
  </Container>
);

export default Header;
