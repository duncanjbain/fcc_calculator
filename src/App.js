import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import ReactFCCtest from 'react-fcctest';
import { evaluate} from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: '',
      previousValue: '',
    }

  }

  handleCalculatorClear() {
    this.setState({
      currentValue: '',
      previousValue: '',
    })
  }

  handleNumber(event) {
    let target = event.target.value;

    if(target == '0' && this.state.currentValue == 0) {
      this.setState({
        currentValue: 0
      })
    } else if(target == '.' && this.state.previousValue.includes('.')) {
      this.setState({
        previousValue: '.'
      })
    } else {
      this.setState({
        currentValue: this.state.currentValue + target,
        previousValue: this.state.previousValue + target,
      })
    }
  }
  
  handleOperands(event) {
    let target = event.target.value;
    let number = this.state.currentValue;

    if(target === '-') {
      this.setState({
        currentValue: number + target,
        previousValue: target
      })
    } else if(this.state.previousValue == '+' || this.state.previousValue == '*' || this.state.previousValue == '/' || this.state.previousValue == '-') {
      this.setState({
        currentValue: number.replace(/[*\-/+]/g, '') + target,
        previousValue: event.target.value
      })
    } else {
      this.setState({
        currentValue: number + target,
        previousValue: target
      })
    }
  }


  handleEvaluation() {
    
    let answer = evaluate(this.state.currentValue);
    this.setState({
      currentValue: answer,
      previousValue: answer
    })
  }

  render() {
  return (
    <div className="App">
       <ReactFCCtest />
      <div className="container">
      <div className="level">
          <div className="level-item">
            {this.state.currentValue=='' ? <p className="has-background-black has-text-danger" id="display">0</p> : 
            <p className="has-background-black has-text-danger" id="display">{this.state.currentValue}</p> }
            
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="seven" value='7' onClick={(event) => this.handleNumber(event)}>7</button>
            <button className="button" id="eight" value='8' onClick={(event) => this.handleNumber(event)}>8</button>
            <button className="button" id="nine" value = '9' onClick={(event) => this.handleNumber(event)}>9</button>
            <button className="button" id="multiply" value='*' onClick={(event) => this.handleOperands(event)}>*</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="four" value='4' onClick={(event) => this.handleNumber(event)}>4</button>
            <button className="button" id="five" value='5' onClick={(event) => this.handleNumber(event)}>5</button>
            <button className="button" id="six" value='6' onClick={(event) => this.handleNumber(event)}>6</button>
            <button className="button" id="subtract" value='-' onClick={(event) => this.handleOperands(event)}>-</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="one" value='1' onClick={(event) => this.handleNumber(event)}>1</button>
            <button className="button" id="two" value='2' onClick={(event) => this.handleNumber(event)}>2</button>
            <button className="button" id="three" value='3' onClick={(event) => this.handleNumber(event)}>3</button>
            <button className="button" id="add" value='+' onClick={(event) => this.handleOperands(event)}>+</button>
          </div>
        </div>
        <div className="level is-marginless is-paddingless">
          <div className="level-item">
            <button className="button" id="zero" value='0' onClick={(event) => this.handleNumber(event)}>0</button>
            <button className="button" id="decimal" value='.' onClick={(event) => this.handleNumber(event)}>.</button>
            <button className="button" id="clear" onClick={() => this.handleCalculatorClear()}>AC</button>
            <button className="button" id="divide" value='/' onClick={(event) => this.handleOperands(event)}>/</button>
            <button className="button" id="equals" onClick={() => this.handleEvaluation()}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
