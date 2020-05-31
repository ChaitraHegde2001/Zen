import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { css } from '@emotion/core';
import constants from '../constants';

const Container = styled.div`
  height: 100%;
  text-align: center;
  padding: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 32px;
`;

const LinkContainer = styled.div`
  margin-top: 32px;
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
  children,
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
      <h2 className="font-bold text-lg text-blue-700">Preview</h2>
      <LinkContainer>
        <Link>{text}</Link>
      </LinkContainer>

      <ButtonContainer>{children}</ButtonContainer>
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
  children: propTypes.object.isRequired,
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
