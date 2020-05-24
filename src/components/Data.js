/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div``;

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

const Data = () => (
  <Container>
    {/* General settings */}
    <Title>General settings</Title>
    <div className="flex flex-wrap" id="data-form">
      {/* Text */}
      <InputDataContainer>
        <div className="md:w-1/3">
          <Label id="label-text" htmlFor="inline-text">
            Text
          </Label>
        </div>
        <div className="md:w-2/3">
          <Input id="text" type="text" defaultValue="This is a link" />
        </div>
      </InputDataContainer>
      {/* Font size */}
      <InputDataContainer>
        <div className="md:w-1/3">
          <Label id="label-inline-text" htmlFor="inline-text">
            Font size
          </Label>
        </div>
        <div className="md:w-2/3">
          <Input id="font-size" type="number" defaultValue="16" />
        </div>
      </InputDataContainer>
      {/* Color */}
      <InputDataContainer>
        <div className="md:w-1/3">
          <Label id="label-inline-text" htmlFor="inline-text">
            Text Color
          </Label>
        </div>
        <div className="md:w-2/3">
          <Input id="font-size" type="number" defaultValue="16" />
        </div>
      </InputDataContainer>
    </div>

    {/* Underline settings */}
    <Title>Underline settings</Title>
    <div className="flex flex-wrap" id="data-form">
      {/* Scale */}
      <InputDataContainer>
        <div className="md:w-1/3">
          <Label id="label-scale" htmlFor="scale">
            Scale
          </Label>
        </div>
        <div className="md:w-2/3">
          <Input id="scale" step="0.01" type="number" defaultValue={1} />
        </div>
      </InputDataContainer>

      {/* Line height */}
      <InputDataContainer>
        <div className="md:w-1/3">
          <Label id="label-line-height" htmlFor="line-height">
            Line Height (px)
          </Label>
        </div>
        <div className="md:w-2/3">
          <Input id="line-height" type="number" defaultValue="5" />
        </div>
      </InputDataContainer>

      {/* Underline Color */}
      <InputDataContainer>
        <div className="md:w-1/3">
          <Label id="label-underline-color" htmlFor="underline-color">
            Underline Color
          </Label>
        </div>
        <div className="md:w-2/3">
          <Input id="underline-color" type="text" defaultValue="red" />
        </div>
      </InputDataContainer>

      {/* Bottom */}
      <InputDataContainer>
        <div className="md:w-1/3">
          <Label id="label-inline-text" htmlFor="bottom">
            Bottom (px)
          </Label>
        </div>
        <div className="md:w-2/3">
          <Input id="bottom" type="number" defaultValue={1} />
        </div>
      </InputDataContainer>

      {/* Scale hover */}
      <InputDataContainer>
        <div className="md:w-1/3">
          <Label id="label-inline-text" htmlFor="bottom">
            Scale (hover)
          </Label>
        </div>
        <div className="md:w-2/3">
          <Input id="bottom" type="number" step="0.01" defaultValue={1.05} />
        </div>
      </InputDataContainer>

      {/* Rotation */}
      <InputDataContainer>
        <div className="md:w-1/3">
          <Label id="label-inline-text" htmlFor="bottom">
            Rotation (deg)
          </Label>
        </div>
        <div className="md:w-2/3">
          <Input id="rotation" type="number" step="0.5" defaultValue={-2} />
        </div>
      </InputDataContainer>
    </div>
  </Container>
);

/*
    Underline
    --underlineScaleX: 1;
  --underlineColor: #ffc600;
  --underlineHeight: 5px;
  --underlineBottom: 1px;
  --underlineScaleHover: 1.05;
  --underlineRotation: -2deg; */

export default Data;
