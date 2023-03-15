import React, { useState } from 'react';
import { countState } from "host/atoms";
import { useRecoilState } from "recoil";
import { Counter } from './Counter';

export const Card = () => {
  return (
    <div
      style={{ border: '2px dotted red', padding: 20 }}
      data-e2e="REMOTE_COMPONENT_INFO"
    >
      <Counter/>
      Test
      This is a component from the remote application
    </div>
  )
}

export default Card;
