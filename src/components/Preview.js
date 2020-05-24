import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../styles';

const Container = styled.div`
  text-align: center;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 2rem;
    text-decoration: underline;
    cursor: pointer;
    position: relative;
  }
`;

const Preview = ({ text }) => (
  <Container>
    <Title>Preview</Title>
    <LinkContainer>
      <a>{text}</a>
    </LinkContainer>
  </Container>
);

Preview.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Preview;
