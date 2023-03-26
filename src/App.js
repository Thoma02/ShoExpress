import React from 'react';
import './styles/App.css';
import './styles/media-queries.css';

import Nav from './components/Nav/Nav';
import Main1 from './components/Main1/Main1';
import Main2 from './components/Main2/Main2';
import Main3 from './components/Main3/Main3';
// import Main4 from './components/Main4/Main4';
import Main5 from './components/Main5/Main5';
import Footer from './components/Footer/Footer';
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <>
      <Nav />
      <Main1 />
      <Main2 />
      <Main3 />
      {/* <Main4 /> */}
      <Main5 />
      <Footer />
      <Settings />
    </>
  );
}

export default App;
