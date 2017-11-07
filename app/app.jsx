import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input.jsx';
import ListItem from './components/listItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], todosDoing: [], todosDone: [] };
    this.addtodoApp = this.addtodoApp.bind(this);
    this.changeCheckBox = this.changeCheckBox.bind(this);
    this.changeCheckDoing = this.changeCheckDoing.bind(this);
    this.changeCheckDone = this.changeCheckDone.bind(this);
    this.deleteTodoDoing = this.deleteTodoDoing.bind(this);
    this.deleteTodoDone = this.deleteTodoDone.bind(this);

  }
  addtodoApp(newTodo) {
    this.state.todos.push(newTodo);
    this.state.todosDoing.push(newTodo);
    this.setState({
      todos: this.state.todos,
      todosDoing: this.state.todosDoing
    });
  }
  changeCheckBox(index, isDone) {
    this.state.todos[index].isDone = isDone;
    this.setState({
      todos: this.state.todos,
    })
  }
  changeCheckDoing(index,isDone){
    this.state.todosDoing[index].isDone = isDone;
    this.setState({
      todosDoing:this.state.todos.filter(function(n){
        return n.isDone == false;
      }),
      todosDone: this.state.todos.filter(function(n){
        return n.isDone == true;
      })
    })
  }

  changeCheckDone(index,isDone){
    this.state.todosDone[index].isDone = isDone;
    this.setState({
      todosDoing:this.state.todos.filter(function(n){
        return n.isDone == false;
      }),
      todosDone: this.state.todos.filter(function(n){
        return n.isDone == true;
      })
    })
  }
  deleteTodoDoing(index) {
    this.state.todosDoing.splice(index, 1);
    this.setState({
      todosDoing: this.state.todosDoing
    })
  }

  deleteTodoDone(index) {
    this.state.todosDone.splice(index, 1);
    this.setState({
      todosDone: this.state.todosDone
    })
  }
  render() {
    return (
      <div>
        <Input addtodoInput={this.addtodoApp} />
        <p>doing</p>
        <ListItem todos={this.state.todosDoing} appChangeCheck={this.changeCheckDoing} appDeleteTodo={this.deleteTodoDoing} />
        <p>done</p>
        <ListItem todos={this.state.todosDone} appChangeCheck={this.changeCheckDone} appDeleteTodo={this.deleteTodoDone} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

