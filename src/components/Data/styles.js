import tw from 'tailwind.macro';

const InputDataContainer = tw.div`
  md:flex md:items-center w-full md:w-1/2 lg:w-1/3 mb-4
`;

const Title = tw.h2`
text-green-700 font-bold text-lg my-3 mx-2
`;

const Label = tw.label`
  block
  text-blue-800
  font-bold
  md:text-right
  mb-1
  md:mb-0
  pr-4
`;

const Input = tw.input`
  bg-gray-200
  appearance-none
  border-2
  border-blue-700
  rounded w-full
  py-2
  px-4
  text-gray-700
  leading-tight
  focus:outline-none
  focus:bg-white
  focus:border-blue-500
`;

export { InputDataContainer, Input, Label, Title };
