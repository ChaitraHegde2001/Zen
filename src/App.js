import React from 'react';
import Preview from './components/Preview';
import Header from './components/Header';
import Data from './components/Data';
import './App.css';

function App() {
  return (
    <>
          <Header />
      <div className="flex flex-wrap">
        <div className="w-full sm:w-full md:w-1/2 mb-4"><Preview text="Hello world!" /></div>
        <div className="w-full sm:w-full md:w-1/2 mb-4">2</div>
        <div className="w-full p-2 bg-gray-200"><Data /></div>
      </div>
    </>
  );
}

export default App;
