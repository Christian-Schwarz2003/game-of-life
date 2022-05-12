import Field from './Field.js';
import logo from './logo.svg';
import TimeControls from './TimeControls';
import React, { useState } from "react";
function App() {

  const childFunc = React.useRef(null)
  return (
    <div>
        <header>
        <TimeControls step={()=>childFunc.doUpdate()}></TimeControls>
        </header>
        <br/>
        <div>
          <Field childFunc={childFunc} ></Field>
        </div>
    </div>
  );
}

export default App;
