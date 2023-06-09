import React, { useState, useRef } from 'react';
import { SliderPicker } from 'react-color';
import Preview from './components/LinkPreview';
import Header from './components/Header';
import { CopyToClipboard } from './components/CopyToClipboard';
import { Footer } from './components/Footer';
import constants from './constants';
import { cssGenerator } from './utils/cssGenerator';
import {
  Title,
  InputDataContainer,
  Label,
  Input,
  Select,
} from './components/styles';
import './App.css';

const copyText = 'Copy to clipboard 📝';

function App() {
  // State
  const [copyButtonText, setCopyButtonText] = useState(copyText);

  // General settings
  const [text, setText] = useState('This is a link!');
  const [fontSize, setFontSize] = useState(35);
  const [color, setColor] = useState('#2774c3');

  // Underline settings
  const [textDecoration, setTextDecoration] = useState(
    constants.textDecoration.underline
  );
  const [scale, setScale] = useState(1.05);
  const [underlineColor, setUnderlineColor] = useState('#ecb12c');
  const [lineHeight, setLineHeight] = useState(4);
  const [bottom, setBottom] = useState(2);
  const [scaleHover, setScaleHover] = useState(1.15);
  const [rotation, setRotation] = useState(-2);

  const codeEl = useRef(null);

  const includesCustomStyles =
    [
      constants.textDecorationTypes.underlineCustomStyle,
      constants.textDecorationTypes.customStyle,
    ].indexOf(textDecoration) >= 0;

  const generatedCode = cssGenerator(
    scale,
    rotation,
    color,
    fontSize,
    textDecoration,
    lineHeight,
    underlineColor,
    bottom,
    scaleHover,
    includesCustomStyles
  );

  const copyToClipboard = () => {
    const el = codeEl;
    navigator.clipboard.writeText(el.current.innerText);
    setCopyButtonText('Copied! 😊');
    setTimeout(() => {
      setCopyButtonText(copyButtonText);
    }, 1500);
  };

  return (
    <>
      <Header />
      <div className="flex flex-wrap flex-grow mb-12">
        {/* Preview */}
        <div className="w-full sm:w-full md:w-1/2 pb-10 text-center mx-auto">
          <Preview
            text={text}
            fontSize={fontSize}
            textDecoration={textDecoration}
            scale={scale}
            scaleHover={scaleHover}
            underlineColor={underlineColor}
            lineHeight={lineHeight}
            bottom={bottom}
            rotation={rotation}
            color={color}
            customStyles={includesCustomStyles}
          />
        </div>

        {/* Generated Code */}
        <div className="code-preview w-full sm:w-full md:w-1/2 pd-4">
          <pre className="code code-css rounded-lg">
            <CopyToClipboard
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClickHandler={copyToClipboard}
              text={copyButtonText}
            />
            <code id="code" ref={codeEl}>
              {`a {${generatedCode}
}
             `}
            </code>
          </pre>
        </div>

        {/* Settings */}
        <div className="w-full p-2">
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
                  <Input
                    id="text"
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                  />
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
                  <Input
                    id="font-size"
                    type="number"
                    value={fontSize}
                    onChange={e => setFontSize(e.target.value)}
                  />
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
                  <SliderPicker color={color} onChange={c => setColor(c.hex)} />
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
                      {constants.textDecoration.map(td => (
                        <option value={td.value} key={td.id}>
                          {td.id}
                        </option>
                      ))}
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
                    value={scale}
                    onChange={e => setScale(e.target.value)}
                    disabled={!includesCustomStyles}
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
                    value={scaleHover}
                    onChange={e => setScaleHover(e.target.value)}
                    disabled={!includesCustomStyles}
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
                    value={lineHeight}
                    onChange={e => setLineHeight(e.target.value)}
                    disabled={!includesCustomStyles}
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
                    value={bottom}
                    onChange={e => setBottom(e.target.value)}
                    disabled={!includesCustomStyles}
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
                  <SliderPicker
                    color={underlineColor}
                    onChange={c => setUnderlineColor(c.hex)}
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
                    value={rotation}
                    onChange={e => setRotation(e.target.value)}
                    disabled={!includesCustomStyles}
                  />
                </div>
              </InputDataContainer>
            </div>
          </>
        </div>
      </div>
      {/* About */}
      <div className="bottom-0 w-full sm:w-full md:w-1/2 fixed text-center mx-auto">
        <Footer />
      </div>
    </>
  );
}

export default App;
