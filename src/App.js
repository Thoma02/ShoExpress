import React from 'react';
import './styles/App.css';
import './styles/media-queries.css';

import Header from './components/Header/Header';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2-BlackFriday/Section2';
import Section3 from './components/Section3-Popular/Section3';
import Section5 from './components/Section5-SignUp/Section5';
import Footer from './components/Footer/Footer';
import Settings from "./components/Settings-BeneathFooter/Settings";

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Footer />
      <Settings />
    </>
  );
}

export default App;
