import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import ReactFCCtest from 'react-fcctest';
import { evaluate} from 'mathjs';

//define regexp check
const isOperand = /[x/+-]/;
const endsWithNegativeOperand = /[x/+]-$/;
const endsWithOperand = /[x+-/]$/;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: '0',
      previousValue: '0',
      formula: '',
      currentSign: 'positive',
      lastValue: ''
    }

  }

  

  render() {
  return (
    <div className="App">
       <ReactFCCtest />
      <div className="container">
      <div className="level">
          <div className="level-item">
            <h2 className="has-background-black has-text-danger" id="display">{this.state.currentValue}</h2>
            <h2 className="has-background-black has-text-danger" id="formula">{this.state.formula}</h2>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="seven" onClick={() => this.handleNumber('7')}>7</button>
            <button className="button" id="eight"onClick={() => this.handleNumber('8')}>8</button>
            <button className="button" id="nine" onClick={() => this.handleNumber('9')}>9</button>
            <button className="button" id="multiply" onClick={() => this.handleOperands('*')}>*</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="four" onClick={() => this.handleNumber('4')}>4</button>
            <button className="button" id="five"onClick={() => this.handleNumber('5')}>5</button>
            <button className="button" id="six"onClick={() => this.handleNumber('6')}>6</button>
            <button className="button" id="subtract" onClick={() => this.handleOperands('-')}>-</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="one"onClick={() => this.handleNumber('1')}>1</button>
            <button className="button" id="two"onClick={() => this.handleNumber('2')}>2</button>
            <button className="button" id="three"onClick={() => this.handleNumber('3')}>3</button>
            <button className="button" id="add" onClick={() => this.handleOperands('+')}>+</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="zero" onClick={() => this.handleNumber('0')}>0</button>
            <button className="button" id="decimal" onClick={() => this.handleDecimal()}>.</button>
            <button className="button" id="clear" onClick={() => this.handleCalculatorClear()}>AC</button>
            <button className="button" id="divide" onClick={() => this.handleOperands('/')}>/</button>
            <button className="button" id="equals" onClick={this.handleCalculation}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
