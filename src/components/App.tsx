// * Lib
import React from 'react';
// * Example
import {ImageSizes} from "../example/hero-img";
// * Component
import Header from "./header";

const App = () => {
  return (
    <>
      <Header heroImg={ImageSizes[0]}/>
    </>
  )
};

export default App;