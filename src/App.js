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
      lastValue: '',
      evaluated: false,
    }

  }

  handleCalculatorClear() {
    this.setState({
      currentValue: '0',
      previousValue: '0',
      formula: '',
      currentSign: 'positive',
      lastValue: '',
      evaluated: false,
    })
  }

  handleEvaluation() {
    let expressionToEvalate = this.state.formula;
    while(endsWithOperand.test(expressionToEvalate)) {
      expressionToEvalate = expressionToEvalate.slice(0,-1);
    }
    let answer = Math.round(1000000000000 * evaluate(expressionToEvalate)) / 1000000000000;
    this.setState({
      currentValue: answer.toString(),
      formula: expressionToEvalate.replace(/\*/g, "⋅").replace(/-/g, "‑") + "=" + answer,
      previousValue: answer,
      evaluated: true,
    })
  }

  handleNumber(value) {
    if(this.state.evaluated) {
      this.setState({
        currentValue: value,
        formula: value !== '0' ? value : ''
      })
    } else {
      this.setState({
        currentValue: this.state.currentValue === '0' || isOperand.test(this.state.currentValue) ?
        value : this.state.currentValue + value,
        formula: this.state.currentValue === '0' && value === '0' ?
        this.state.formula === '' ? value : this.state.formula : /([^.0-9]0|^0)$/.test(this.state.formula) ? this.state.formula.slice(0,-1) + value
        : this.state.formula + value
      })
    }
  }
  
  handleOperands(operand) {
    if(this.state.evaluated) {
      this.setState({
        formula: this.state.previousValue + operand
      });
    } else if(!endsWithOperand.test(this.state.formula)) {
      this.setState({
        previousValue: this.state.formula,
        formula: this.state.formula + operand
      });
    } else if(!endsWithNegativeOperand.test(this.state.formula)) {
      this.setState({
        formula: (endsWithNegativeOperand.test(this.state.formula + operand) ? 
        this.state.formula : this.state.previousValue) + operand
      });
    } else if(operand !== '-') {
      this.setState({
        formula: this.state.previousValue + operand
      })
    }
  }

  handleDecimal() {
    if(this.state.evaluated===true) {
      this.setState({
        currentValue: '0.',
        formula: '0.',
        evaluated: false
      });
    } else if(endsWithOperand.test(this.state.formula) || (this.state.currentValue === '0' && this.state.formula === '')) {
      console.log(endsWithOperand.test(this.state.formula))
      this.setState({
        currentValue: '0.',
        formula: this.state.formula + '0.'
      });
    } else {
      console.log('do else on decimal');
      this.setState({
        
        currentValue: this.state.formula.match(/(-?\d+\.?\d*)$/)[0] + '.',
        formula: this.state.formula + '.'
      })
    }
  }


  render() {
  return (
    <div className="App">
       <ReactFCCtest />
      <div className="container">
      <div className="level">
          <div className="level-item">
            <h1 className="has-background-black has-text-danger" id="display">{this.state.currentValue}</h1>
          </div>
        </div>
        <div className="level-item">
        <h2 className="has-background-black has-text-danger" id="formula">{this.state.formula}</h2>
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
            <button className="button" id="equals" onClick={() => this.handleEvaluation()}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
