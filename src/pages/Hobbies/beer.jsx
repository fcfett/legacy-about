import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';

import festival from '../../assets/images/festival.jpg';
import bqc from '../../assets/images/bqc.jpg';
import craft from '../../assets/images/craft.jpg';
import morebeer from '../../assets/images/morebeer.jpg';

export default () => (
  <ul className="pictures">
    <li>
      <FramedImage className="default" src={craft} />
    </li>
    <li className="wide">
      <FramedImage className="default " src={festival} />
    </li>
    <li>
      <FramedImage className="default" src={morebeer} />
    </li>
    <li className="wide wide-backwards">
      <FramedImage
        className="default"
        src={bqc}
        caption={
          <a href="https://youtube.com/bahqueceva" target="_blank" rel="noopener noreferrer">
            YouTube Channel (Bah, Que Ceva)
          </a>
        }
      />
    </li>
  </ul>
);
