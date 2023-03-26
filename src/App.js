import React from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import Main1 from './components/Main1/Main1';
import Main2 from './components/Main2/Main2';
import Main3 from './components/Main3/Main3';
import Main4 from './components/Main4/Main4';
import Main5 from './components/Main5/Main5'

function App() {
  return (
    <>
      <Nav />
      <Main1 />
      <Main2 />
      <Main3 />
      {/* <Main4 /> */}
      <Main5 />
    </>
  );
}

export default App;
