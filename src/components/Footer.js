import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  left: 0;
  bottom: 0;
  width: 100vw;
  padding: 12px;
  background-color: white;

  a {
    text-decoration: underline !important;
  }
`;

export const Footer = () => (
  <Container>
    <span className="text-blue-700 text-sm font-bold">
      Made with &hearts; by{' '}
      <a href="https://fabricioduarte.dev">Fabricio Duarte</a> - ©{' '}
      {new Date().getFullYear()}
    </span>
  </Container>
);
