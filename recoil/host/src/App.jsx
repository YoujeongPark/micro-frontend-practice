import React from 'react';
import './App.css';
import { countState } from "./store/atoms";
import { useRecoilState, useResetRecoilState } from "recoil";

// Module Federation - importing this from application 2
const Card = React.lazy(() =>
  // @ts-ignore
  import("remote/Card").then((module) => {
    return {
      default: module.Card,
    };
  })
);

function App() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      {count}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Card />
      </React.Suspense>
    </div>
  );
}

export default App;
