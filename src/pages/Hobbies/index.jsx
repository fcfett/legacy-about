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
      <h1>Hobbies</h1>
      <ul>
        <li>
          <button onClick={() => openModal(music)}>
            <span>Music </span>
            <Emoji content="🎙" label="microphone" />
          </button>
        </li>
        <li>
          <button onClick={() => openModal(beer)}>
            <span>Beer </span>
            <Emoji content="🍻" label="beer" />
          </button>
        </li>
        <li>
          <button onClick={() => openModal(memes)}>
            <span>Memes </span>
            <Emoji content="💩" label="poop" />
          </button>
        </li>
        <li>
          <button onClick={() => openModal(love)}>
            <span>Family Time </span>
            <Emoji content="🖤" label="heart" />
          </button>
        </li>
      </ul>
      <Modal closeHandler={closeModal} visible={showModal} content={content} />
    </div>
  );
};

export default Hobbies