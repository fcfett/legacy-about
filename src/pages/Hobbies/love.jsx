import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';

import family from '../../assets/images/family.jpg';
import food from '../../assets/images/food.jpg';
import us from '../../assets/images/us.jpg';
import son from '../../assets/images/son.jpg';
import fun from '../../assets/images/fun.jpg';
import movies from '../../assets/images/movies.jpg';

export default () => (
  <ul className="pictures">
    <li>
      <FramedImage className="default " src={movies} />
    </li>
    <li className="wide wide-forwards">
      <FramedImage className="default " src={fun} />
    </li>
    <li>
      <FramedImage className="default " src={food} />
    </li>
    <li>
      <FramedImage className="default " src={family} />
    </li>
    <li className="wide backwards">
      <FramedImage className="default " src={us} />
    </li>
    <li>
      <FramedImage className="default " src={son} />
    </li>
  </ul>
);
