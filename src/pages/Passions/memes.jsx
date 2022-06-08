import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';
import magic from '../../assets/images/magic.gif';
import lasier from '../../assets/images/lasier.gif';
import hidding from '../../assets/images/hidding.gif';
import fogo from '../../assets/images/fogo.gif';
import mindblow from '../../assets/images/mindblow.gif';
import santana from '../../assets/images/santana.gif';

const Memes = () => (
  <ul className="pictures">
    <li>
      <FramedImage className="default" src={mindblow} />
    </li>
    <li>
      <FramedImage className="default" src={magic} />
    </li>
    <li>
      <FramedImage className="default" src={hidding} />
    </li>
    <li>
      <FramedImage className="default" src={lasier} />
    </li>
    <li className="wide">
      <FramedImage className="default" src={fogo} />
    </li>
    <li>
      <FramedImage className="default" src={santana} />
    </li>
  </ul>
);

export default Memes;
