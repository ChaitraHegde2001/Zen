import React from "react";
import styled from "styled-components";
import { Title } from "../styles";

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

const Preview = ({ text, styles }) => (
  <Container>
    <Title>Preview</Title>
    <LinkContainer>
      <a href="">{text}</a>
    </LinkContainer>
  </Container>
);

export default Preview;
