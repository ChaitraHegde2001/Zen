const textDecorationTypes = {
  underline: 'underline',
  wavy: 'underline wavy',
  customStyle: 'custom styles only',
  underlineCustomStyle: 'underline custom style',
  none: 'none',
};

const textDecoration = [
  { id: 'Underline', value: textDecorationTypes.underline },
  { id: 'Wavy', value: textDecorationTypes.wavy },
  { id: 'Custom styles', value: textDecorationTypes.customStyle },
  {
    id: 'Underline + custom styles',
    value: textDecorationTypes.underlineCustomStyle,
  },
  { id: 'None', value: textDecorationTypes.none },
];

export default { textDecoration, textDecorationTypes };
