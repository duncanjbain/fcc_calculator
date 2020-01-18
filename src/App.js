import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import ReactFCCtest from 'react-fcctest';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: '0',
      currentTotal: '',
    }

    this.handleCalculatorCLear = this.handleCalculatorCLear.bind(this);
  }

  handleCalculatorCLear() {
    this.setState({
      currentValue: '0',
      currentTotal: ''
    })
  }

  handleDisplayedValue(value) {
    
  }
  
  
  render() {
  return (
    <div className="App">
       <ReactFCCtest />
      <div className="container">
      <div className="level">
          <div className="level-item">
            <h2 className="has-background-black has-text-danger" id="display">{this.state.displayedValue}</h2>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="seven" onClick={() => this.handleDisplayedValue(7)}>7</button>
            <button className="button" id="eight"onClick={() => this.handleDisplayedValue(8)}>8</button>
            <button className="button" id="nine" onClick={() => this.handleDisplayedValue(9)}>9</button>
            <button className="button" id="multiply">X</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="four" onClick={() => this.handleDisplayedValue(4)}>4</button>
            <button className="button" id="five"onClick={() => this.handleDisplayedValue(5)}>5</button>
            <button className="button" id="six"onClick={() => this.handleDisplayedValue(6)}>6</button>
            <button className="button" id="subtract">-</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="one"onClick={() => this.handleDisplayedValue(1)}>1</button>
            <button className="button" id="two"onClick={() => this.handleDisplayedValue(2)}>2</button>
            <button className="button" id="three"onClick={() => this.handleDisplayedValue(3)}>3</button>
            <button className="button" id="add">+</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="zero">0</button>
            <button className="button" id="decimal">.</button>
            <button className="button" id="clear" onClick={this.clearCalculator}>AC</button>
            <button className="button" id="divide">/</button>
            <button className="button" id="equals">=</button>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
