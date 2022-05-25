import React from 'react';

const Emoji = ({ content, label }) => (
  <span className="emoji" role="img" aria-label={label}>
    {content}
  </span>
);

export default Emoji