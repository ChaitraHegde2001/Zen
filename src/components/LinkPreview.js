import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { cssGenerator } from '../utils/cssGenerator';

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
  const styles = cssGenerator(
    scale,
    rotation,
    color,
    fontSize,
    textDecoration,
    lineHeight,
    underlineColor,
    bottom,
    scaleHover,
    customStyles
  );

  const Link = styled.a`
    ${styles}
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
