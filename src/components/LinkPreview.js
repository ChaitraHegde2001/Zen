import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { css } from '@emotion/core';

const Container = styled.div`
  text-align: center;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Preview = ({
  text,
  fontSize,
  textColor,
  textDecoration,
  scale,
  lineHeight,
  underlineColor,
  bottom,
  scaleHover,
  rotation,
}) => {
  const dynamicStyles = () => css`
    --scaleX: ${scale};
    --rotate: ${rotation}deg;

    color: ${textColor};
    font-size: ${fontSize}px;
    text-decoration: ${textDecoration};
    position: relative;

    &:before {
      position: absolute;
      content: '';
      width: 100%;
      z-index: -1;
      transition: transform 0.1s;
      height: ${lineHeight}px;
      background: ${underlineColor};
      bottom: ${bottom}px;
      transform: skew(-20deg) rotate(var(--rotate)) scaleX(var(--scaleX));
      //transform: skew(-20deg) rotate(${rotation}deg) scaleX(var(--scaleX));
    }

    &:hover {
      --scaleX: ${scaleHover};
    }
  `;

  const Link = styled.a`
    ${dynamicStyles}
  `;

  return (
    <Container>
      <h2>Preview</h2>
      <LinkContainer>
        <Link>{text}</Link>
      </LinkContainer>
    </Container>
  );
};
Preview.propTypes = {
  text: propTypes.string.isRequired,
  fontSize: propTypes.number.isRequired,
  textColor: propTypes.string,
  textDecoration: propTypes.string,
  scale: propTypes.number,
  lineHeight: propTypes.string,
  underlineColor: propTypes.string,
  bottom: propTypes.string,
  scaleHover: propTypes.number,
  rotation: propTypes.string,
};

Preview.defaultProps = {
  textColor: 'black',
  textDecoration: 'underline',
  underlineColor: 'black',
  scale: null,
  lineHeight: null,
  bottom: null,
  scaleHover: null,
  rotation: null,
};

export default Preview;
