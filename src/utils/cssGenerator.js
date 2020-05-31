export const cssGenerator = {scale, rotation, color, fontSize, textDecoration, lineHeight, underlineColor, bottom, scaleHover, customStyle} => {
  let customStyle = "";

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
  a {
    --scaleX: ${scale};
    --rotate: ${rotation}deg;

    color: ${color};
    font-size: ${fontSize}px;
    text-decoration: ${getTextDecoration(textDecoration)};
    position: relative;
    cursor: pointer;

    ${customStyle}
  }
`;
  console.log(css);
  return css;
};
