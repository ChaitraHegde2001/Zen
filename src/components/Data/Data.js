import React, { useState } from 'react';
import { InputDataContainer, Label, Input, Title, Select } from './styles';
import constants from './constants';

const Data = () => {
  const [textDecoration, setTextDecoration] = useState(
    constants.textDecoration.underline
  );

  const includesTextDecoration =
    textDecoration !== constants.textDecoration.none;

  return (
    <>
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
        {/* Underline type */}
        <InputDataContainer>
          <div className="md:w-1/3">
            <Label id="label-scale" htmlFor="typeSelect">
              Underline type
            </Label>
          </div>
          <div className="md:w-2/3">
            <div className="relative">
              <Select
                id="typeSelect"
                value={textDecoration}
                onChange={e => setTextDecoration(e.target.value)}
              >
                <option value={constants.textDecoration.underline}>Line</option>
                <option value={constants.textDecoration.wavy}>Wavy</option>
                <option value={constants.textDecoration.none}>None</option>
              </Select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </InputDataContainer>

        {/* Scale */}
        <InputDataContainer>
          <div className="md:w-1/3">
            <Label id="label-scale" htmlFor="scale">
              Scale
            </Label>
          </div>
          <div className="md:w-2/3">
            <Input
              id="scale"
              step="0.01"
              type="number"
              defaultValue={1}
              disabled={!includesTextDecoration}
            />
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
            <Input
              id="line-height"
              type="number"
              defaultValue="5"
              disabled={!includesTextDecoration}
            />
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
            <Input
              id="underline-color"
              type="text"
              defaultValue="red"
              disabled={!includesTextDecoration}
            />
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
            <Input
              id="bottom"
              type="number"
              defaultValue={1}
              disabled={!includesTextDecoration}
            />
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
            <Input
              id="bottom"
              type="number"
              step="0.01"
              defaultValue={1.05}
              disabled={!includesTextDecoration}
            />
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
            <Input
              id="rotation"
              type="number"
              step="0.5"
              defaultValue={-2}
              disabled={!includesTextDecoration}
            />
          </div>
        </InputDataContainer>
      </div>
    </>
  );
};

/*
    Underline
    --underlineScaleX: 1;
  --underlineColor: #ffc600;
  --underlineHeight: 5px;
  --underlineBottom: 1px;
  --underlineScaleHover: 1.05;
  --underlineRotation: -2deg; */

export default Data;
