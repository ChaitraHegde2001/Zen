import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  right: 15px;
  top: 15px;
  position: absolute;
`;

export const CopyToClipboard = ({ text, onClickHandler }) => (
  <Button
    type="button"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
    onClick={onClickHandler}
  >
    {text}
  </Button>
);

CopyToClipboard.propTypes = {
  text: propTypes.string.isRequired,
  onClickHandler: propTypes.func.isRequired,
};
