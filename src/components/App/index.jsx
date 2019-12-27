import React from 'react';
import './style.scss';

import PageSlider from '../PageSlider';
import Header from '../../pages/Header';
import Experience from '../../pages/Experience';
import Quote from '../../pages/Quote';
import Hobbies from '../../pages/Hobbies';
import Social from '../../pages/Social';
import SvgDefs from '../SvgDefs';

export default () => {
  return (
    <div id="app">
      <SvgDefs />
      <PageSlider>
        <Header />
        <Experience />
        <Quote />
        <Hobbies />
        <Social />
      </PageSlider>
    </div>
  );
};
