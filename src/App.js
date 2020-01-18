import React from 'react';
import 'bulma/css/bulma.css'
import ReactFCCtest from 'react-fcctest';

function App() {
  return (
    <div className="App">
       <ReactFCCtest />
      <div className="container">
      <div className="level">
          <div className="level-item">
            <h2 className="has-background-black has-text-danger" id="display">Calculator Display</h2>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="seven">7</button>
            <button className="button" id="eight">8</button>
            <button className="button" id="nine">9</button>
            <button className="button" id="multiply">X</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="four">4</button>
            <button className="button" id="five">5</button>
            <button className="button" id="six">6</button>
            <button className="button" id="subtract">-</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="one">1</button>
            <button className="button" id="two">2</button>
            <button className="button" id="three">3</button>
            <button className="button" id="add">+</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="zero">0</button>
            <button className="button" id="decimal">.</button>
            <button className="button" id="clear">AC</button>
            <button className="button" id="divide">/</button>
            <button className="button" id="equals">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
