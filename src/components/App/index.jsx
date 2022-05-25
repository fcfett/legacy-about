import React from 'react';

import PageSlider from '../PageSlider';
import Header from '../../pages/Header';
import Experience from '../../pages/Experience';
import Quote from '../../pages/Quote';
import Hobbies from '../../pages/Hobbies';
import Social from '../../pages/Social';
import SvgDefs from '../SvgDefs';

const App = () => {
  return (
    <div id="app">
      <SvgDefs />
      <PageSlider title="about/fcfett">
        <Header />
        <Experience />
        <Quote />
        <Hobbies />
        <Social />
      </PageSlider>
    </div>
  );
};


export default App