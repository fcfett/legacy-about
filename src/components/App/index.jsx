import React from 'react';

import PageSlider from '../PageSlider';
import Header from '../../pages/Header';
import Experience from '../../pages/Experience';
import Quote from '../../pages/Quote';
import Passions from '../../pages/Passions';
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
        <Passions />
        <Social />
      </PageSlider>
    </div>
  );
};

export default App;
