import React from 'react';
import './style.scss';

import FramedImage from '../../components/FramedImage';

import ntconsult from '../../assets/images/ntconsult.jpg';
import stefanini from '../../assets/images/stefanini.jpg';
import hypeflame from '../../assets/images/hypeflame.jpg';
import grupols from '../../assets/images/grupols.jpg';
import vg8 from '../../assets/images/vg8.jpg';
import adp from '../../assets/images/adp.jpg';
import lol from '../../assets/images/lol.jpg';

const Experience = () => (
  <div id="page-3" className="page">
    <h1>Experience</h1>
    <ul className="timeline">
      <li>
        <a href="https://www.linkedin.com/company/ntconsult" target="_blank" rel="noopener noreferrer">
          <FramedImage title="NTConsult" src={ntconsult} />
          <strong className="font-serif">NTConsult</strong>
        </a>
        <small>2011/05</small>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/stefanini-brasil" target="_blank" rel="noopener noreferrer">
          <FramedImage title="Stefanini/Dell" src={stefanini} />
          <strong className="font-serif">Stefanini / Dell</strong>
        </a>
        <small>2015/09</small>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/grupols/" target="_blank" rel="noopener noreferrer">
          <FramedImage title="Liberta Investimentos" src={grupols} />
          <strong className="font-serif">Grupo L&S / Liberta Investimentos</strong>
        </a>
        <small>2017/06</small>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/vg8/" target="_blank" rel="noopener noreferrer">
          <FramedImage title="VG8" src={vg8} />
          <strong className="font-serif">VG8</strong>
        </a>
        <small>2019/05</small>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/adpbrazillabs/" target="_blank" rel="noopener noreferrer">
          <FramedImage title="ADP" src={adp} />
          <strong className="font-serif">ADP Brazil Labs</strong>
        </a>
        <small>2020/03</small>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/hypeflame/" target="_blank" rel="noopener noreferrer">
          <FramedImage title="HypeFlame" src={hypeflame} />
          <strong className="font-serif">HypeFlame</strong>
        </a>
        <small>2021/01</small>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/legends-of-learning" target="_blank" rel="noopener noreferrer">
          <FramedImage title="Legends Of Learning" src={lol} />
          <strong className="font-serif">Legends Of Learning</strong>
        </a>
        <small>2022/01</small>
      </li>
    </ul>
  </div>
);

export default Experience;
