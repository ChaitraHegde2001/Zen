import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { css } from '@emotion/core';
import constants from '../constants';

const Container = styled.div`
  text-align: center;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const getTextDecoration = decoration => {
  switch (decoration) {
    case constants.textDecorationTypes.underline:
    case constants.textDecorationTypes.underlineCustomStyle:
      return 'underline';
    case constants.textDecorationTypes.wavy:
      return 'underline wavy';
    default:
      return 'none';
  }
};

const Preview = ({
  text,
  fontSize,
  color,
  textDecoration,
  scale,
  lineHeight,
  underlineColor,
  bottom,
  scaleHover,
  rotation,
  customStyles,
}) => {
  let customStyle = null;
  if (customStyles) {
    customStyle = `&:before {
      position: absolute;
      content: '';
      width: 100%;
      z-index: -1;
      transition: transform 0.1s;
      height: ${lineHeight}px;
      background: ${underlineColor};
      bottom: ${bottom}px;
      transform: skew(-20deg) rotate(var(--rotate)) scaleX(var(--scaleX));
    }

    &:hover {
      --scaleX: ${scaleHover};
    }`;
  }
  const dynamicStyles = () => css`
    --scaleX: ${scale};
    --rotate: ${rotation}deg;

    color: ${color};
    font-size: ${fontSize}px;
    text-decoration: ${getTextDecoration(textDecoration)};
    position: relative;
    cursor: pointer;

    ${customStyle}
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
  color: propTypes.string,
  textDecoration: propTypes.string,
  scale: propTypes.number,
  lineHeight: propTypes.number,
  underlineColor: propTypes.string,
  bottom: propTypes.number,
  scaleHover: propTypes.number,
  rotation: propTypes.number,
  customStyles: propTypes.bool.isRequired,
};

Preview.defaultProps = {
  color: '#000',
  textDecoration: 'underline',
  underlineColor: '#000',
  scale: null,
  lineHeight: null,
  bottom: null,
  scaleHover: null,
  rotation: null,
};

export default Preview;
