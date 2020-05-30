import React from 'react';
import propTypes from 'prop-types';

const defaultValues = { text: 'Hello world!' };

export const LinkContext = React.createContext(defaultValues);
export const LinkProvider = ({ children }) => (
  <LinkContext.Provider value={defaultValues}>{children}</LinkContext.Provider>
);

LinkProvider.propTypes = {
  children: propTypes.object.isRequired,
};
