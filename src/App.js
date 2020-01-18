import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import ReactFCCtest from 'react-fcctest';
import { evaluate} from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: '0',
      hasDecimal: false
    }

    this.handleCalculatorCLear = this.handleCalculatorClear.bind(this);
    this.handleDisplayedValue = this.handleDisplayedValue.bind(this);
    this.handleDisplayDecimal = this.handleDisplayDecimal.bind(this);
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  handleCalculatorClear() {
    this.setState({
      currentValue: '0',
      currentTotal: ''
    })
  }

  handleDisplayedValue(value) {
    if(value === '0'){
      this.setState({currentValue: this.state.currentValue === '0' ? '0' : this.state.currentValue + value});
    } else {
      this.setState({currentValue: this.state.currentValue === '0' ? value : this.state.currentValue + value});
    }  
  } 

  handleDisplayDecimal() {
    if(this.state.hasDecimal === false){
      this.setState({currentValue: this.state.currentValue + '.',
                     hasDecimal: true
                    });
    }
  }

  handleDisplayOperand(operand) {
    let currOperand = operand;
    // string manipulation to check the last digit in the display
    let lastDigit = this.state.currentValue.slice(-1);

    // if the last entered digit was an operator then it replaces that operator with a new operator or if not then adds the operator to the display
    if(lastDigit === 'x' || lastDigit === '-' || lastDigit === '/' || lastDigit === '+'){
      this.setState({currentValue: this.state.currentValue.slice(0, -1) + currOperand});
    }
      this.setState({currentValue: this.state.currentValue + currOperand});

    // once an operator has been pressed then this allows the decimal key to become active again
    this.setState({hasDecimal: false});
  }

  handleCalculation() {
    let calculatedSum = evaluate(this.state.currentValue).toString();
    this.setState({
      currentValue: calculatedSum,
       displayDecimal: true
      });
  }
  
  
  render() {
  return (
    <div className="App">
       <ReactFCCtest />
      <div className="container">
      <div className="level">
          <div className="level-item">
            <h2 className="has-background-black has-text-danger" id="display">{this.state.currentValue}</h2>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="seven" onClick={() => this.handleDisplayedValue('7')}>7</button>
            <button className="button" id="eight"onClick={() => this.handleDisplayedValue('8')}>8</button>
            <button className="button" id="nine" onClick={() => this.handleDisplayedValue('9')}>9</button>
            <button className="button" id="multiply" onClick={() => this.handleDisplayOperand('x')}>x</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="four" onClick={() => this.handleDisplayedValue('4')}>4</button>
            <button className="button" id="five"onClick={() => this.handleDisplayedValue('5')}>5</button>
            <button className="button" id="six"onClick={() => this.handleDisplayedValue('6')}>6</button>
            <button className="button" id="subtract" onClick={() => this.handleDisplayOperand('-')}>-</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="one"onClick={() => this.handleDisplayedValue('1')}>1</button>
            <button className="button" id="two"onClick={() => this.handleDisplayedValue('2')}>2</button>
            <button className="button" id="three"onClick={() => this.handleDisplayedValue('3')}>3</button>
            <button className="button" id="add" onClick={() => this.handleDisplayOperand('+')}>+</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="zero" onClick={() => this.handleDisplayedValue('0')}>0</button>
            <button className="button" id="decimal" onClick={() => this.handleDisplayDecimal()}>.</button>
            <button className="button" id="clear" onClick={this.handleCalculatorCLear}>AC</button>
            <button className="button" id="divide" onClick={() => this.handleDisplayOperand('/')}>/</button>
            <button className="button" id="equals" onClick={this.handleCalculation}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
