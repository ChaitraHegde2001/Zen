import constants from '../constants';

export const getTextDecoration = decoration => {
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

export const cssGenerator = (
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
) => {
  let customStyle = '';

  if (customStyles) {
    customStyle = `
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
    }

    &:hover {
      --scaleX: ${scaleHover};
    }`;
  }

  const css = `
    --scaleX: ${scale};
    --rotate: ${rotation}deg;

    color: ${color};
    font-size: ${fontSize}px;
    text-decoration: ${getTextDecoration(textDecoration)};
    position: relative;
    cursor: pointer;
    ${customStyle}`;

  return css;
};
