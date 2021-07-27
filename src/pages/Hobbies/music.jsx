import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';

import band from '../../assets/images/band.jpg';
import shows from '../../assets/images/shows.jpg';
import alldaylong from '../../assets/images/alldaylong.jpg';
import playtogether from '../../assets/images/playtogether.jpg';

export default () => (
  <ul className="pictures">
    <li>
      <FramedImage className="default" src={alldaylong} caption="All Day Long..." />
    </li>
    <li className="wide">
      <FramedImage
        className="default"
        src={shows}
        caption={
          <>
            Shows
            <br />
            (KsE ❤)
          </>
        }
      />
    </li>
    <li>
      <FramedImage className="default" src={playtogether} caption="Family Business" />
    </li>
    <li className="wide wide-backwards">
      <FramedImage
        className="default"
        src={band}
        caption={
          <a href="https://youtu.be/zNM4x-Oapw0" target="_blank" rel="noopener noreferrer">
            Yep, I had a band...
          </a>
        }
      />
    </li>
  </ul>
);
