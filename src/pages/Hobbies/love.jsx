import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';
import family from '../../assets/images/family.jpg';
import food from '../../assets/images/food.jpg';
import morebeer from '../../assets/images/morebeer.jpg';
import son from '../../assets/images/son.jpg';
import fun from '../../assets/images/fun.jpg';
import movies from '../../assets/images/movies.jpg';

export default () => (
  <ul className="pictures">
    <li>
      <FramedImage className="default " src={movies} />
    </li>
    <li className="wide fun">
      <FramedImage className="default " src={fun} />
    </li>
    <li>
      <FramedImage className="default " src={food} />
    </li>
    <li>
      <FramedImage className="default " src={son} />
    </li>
    <li>
      <FramedImage className="default " src={morebeer} />
    </li>
    <li>
      <FramedImage className="default " src={family} />
    </li>
  </ul>
);
