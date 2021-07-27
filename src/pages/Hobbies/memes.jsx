import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';
import eita from '../../assets/images/eita.jpg';
import lasier from '../../assets/images/lasier.gif';
import cafe from '../../assets/images/cafe.jpg';
import fogo from '../../assets/images/fogo.gif';
import numsei from '../../assets/images/numsei.jpg';
import santana from '../../assets/images/santana.gif';

export default () => (
  <ul className="pictures">
    <li>
      <FramedImage className="default " src={eita} />
    </li>
    <li>
      <FramedImage className="default " src={numsei} />
    </li>
    <li>
      <FramedImage className="default " src={cafe} />
    </li>
    <li>
      <FramedImage className="default " src={lasier} />
    </li>
    <li className="wide">
      <FramedImage className="default " src={fogo} />
    </li>
    <li>
      <FramedImage className="default " src={santana} />
    </li>
  </ul>
);
