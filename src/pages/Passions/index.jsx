import React, { useState } from 'react';
import './style.scss';

import Modal from '../../components/Modal';
import Emoji from '../../components/Emoji';

import music from './music';
import beer from './beer';
import memes from './memes';
import love from './love';

const INITIAL_STATE = {
  showModal: false,
  content: null,
};

const Hobbies = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const updateState = (payload) => setState((state) => ({ ...state, ...payload }));
  const closeModal = () => updateState(INITIAL_STATE);
  const openModal = (content) => updateState({ showModal: true, content });
  const { showModal, content } = state;

  return (
    <div id="page-6" className={`page ${showModal ? 'blur' : ''}`}>
      <h1>Passions</h1>
      <ul>
        <li>
          <button onClick={() => openModal(music)}>
            Music&nbsp;
            <Emoji content="🎙" label="microphone" />
          </button>
        </li>
        <li>
          <button onClick={() => openModal(beer)}>
            Beer&nbsp;
            <Emoji content="🍻" label="beer" />
          </button>
        </li>
        <li>
          <button onClick={() => openModal(memes)}>
            Memes&nbsp;
            <Emoji content="💩" label="poop" />
          </button>
        </li>
        <li>
          <button onClick={() => openModal(love)}>
            Family&nbsp;
            <Emoji content="🖤" label="heart" />
          </button>
        </li>
      </ul>
      <Modal closeHandler={closeModal} visible={showModal} content={content} />
    </div>
  );
};

export default Hobbies;
