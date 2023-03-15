import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { countState } from "host/atoms";

export const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  const resetCount = useResetRecoilState(countState);

  const increase = () => {
    setCount(count + 1);
  };

  const reset = () => {
    resetCount();
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => increase()}>+</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};
