import React from 'react';
import './style.scss';

import fett from '../../assets/images/fett.png';

export default () => (
  <div id="page-4" className="page font-serif">
    <article>
      <q>
        Senioridade, acima de tudo, é uma questão de postura.
        <br />
        Os problemas não deixarão de aparecer por conta do teu currículo espetacular.
      </q>
      <strong>Felipe Fett</strong>
    </article>
    <aside>
      <img src={fett} alt="Felipe Fett" />
    </aside>
  </div>
);
