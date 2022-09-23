import React, { createElement } from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';

const textToCharSpan = (text) => {
  const key = text.replace(/[^\w]*/g, '');
  const result = [];
  for (const i in text) {
    const char = text[i];
    result.push(createElement('span', { key: `${key}-${char}-${i}` }, char));
  }
  return result;
};

const Header = () => {
  const lastName = 'Fett';
  const firstName = 'Felipe';
  const stack = '{ Full Stack Software Engineer }';

  const toggleId = 'tg-name-input';

  return (
    <div id="page-2" className="page">
      <input type="checkbox" id={toggleId} />
      <h1 id="name" title={`${firstName} ${lastName}`}>
        <label id={`${toggleId}-label`} htmlFor={toggleId}>
          <span id="first-name">{textToCharSpan(firstName)}</span>
          <strong id="last-name">{textToCharSpan(lastName)}</strong>
        </label>
      </h1>
      <section>
        <h2 id="stack" title={stack}>
          {textToCharSpan(stack)}
        </h2>
        <h3 id="specialist">&amp; Front-end Specialist</h3>
      </section>
      <FramedImage
        className="left"
        src="https://raw.githubusercontent.com/fcfett/resources/master/profile.jpg"
        alt="Fett's professional profile picture"
      />
      <FramedImage
        className="right"
        alt="Boba/Jango Fett helmet"
        src="https://raw.githubusercontent.com/fcfett/resources/master/fett-helmet.png"
      />
    </div>
  );
};

export default Header;
