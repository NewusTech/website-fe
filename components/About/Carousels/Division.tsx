import React from 'react';
import { Component1, Component2 } from './Slider';
import Image from 'next/image';

const Division = ({ division, teams }: any) => {
  return (
    <div>
      <h2 className="text-white text-end text-2xl font-bold mb-4 font-asap tracking-[1.6px]">{division}</h2>
      {teams.length <= 3 ? (
        <Component1 team={teams} />
      ) : (
        <Component2 team={teams} />
      )}
    </div>
  );
};

export default Division;