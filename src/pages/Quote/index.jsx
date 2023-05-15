import React from 'react';
import './style.scss';

import cap from '../../assets/images/cap.png';
import fett from '../../assets/images/fett.png';
import glasses from '../../assets/images/glasses.png';

const Quote = () => (
  <div id="page-4" className="page font-serif">
    <article>
      {/* <q>
        Senioridade, acima de tudo, é uma questão de postura.
        <br />
        De nada vale um currículo todo enfeitadinho se, na hora do pega, tu não assume teus BO.
      </q> */}
      <q>
        Seniority, above all, is a matter of posture.
        <br />
        It's useless to have a fancy resume if, when everything is falling apart, you can't handle your mess.
      </q>
      <strong>Felipe Fett</strong>
    </article>
    <aside>
      <figure>
        <img className="fett" src={fett} alt="Felipe Fett" />
        <img className="glasses" src={glasses} alt="Thug Life Glasses" />
        <img className="cap" src={cap} alt="Thug Life Cap" />
      </figure>
    </aside>
  </div>
);

export default Quote;
