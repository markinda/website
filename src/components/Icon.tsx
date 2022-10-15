import React from 'react';
import Sprite from 'assets/icons/sprite.svg';

type IconProps = {
  name: string,
}

export const Icon: React.FC<IconProps> = ({ name }) => (
  <svg className="icon">
    <use href={`${Sprite}#${name}`} />
  </svg>
);
