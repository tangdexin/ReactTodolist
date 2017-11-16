import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input.jsx';
import ListItem from './components/listItem.jsx';

import './css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], todosDoing: [], todosDone: [] };
    this.addtodoApp = this.addtodoApp.bind(this);
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

  changeCheckDoing(index, isDone) {
    this.state.todosDoing[index].isDone = isDone;
    this.setState({
      todosDoing: this.state.todos.filter(function (n) {
        return n.isDone == false;
      }),
      todosDone: this.state.todos.filter(function (n) {
        return n.isDone == true;
      })
    })
  }

  changeCheckDone(index, isDone) {
    this.state.todosDone[index].isDone = isDone;
    this.setState({
      todosDoing: this.state.todos.filter(function (n) {
        return n.isDone == false;
      }),
      todosDone: this.state.todos.filter(function (n) {
        return n.isDone == true;
      })
    })
  }
  deleteTodoDoing(index) {
    this.state.todosDoing.splice(index, 1);
    this.state.todos.splice(index, 1);    
    this.setState({
      todosDoing: this.state.todosDoing,
      todos:this.state.todos
    })
  }

  deleteTodoDone(index) {
    this.state.todosDone.splice(index, 1);
    this.state.todos.splice(index, 1);    
    this.setState({
      todosDone: this.state.todosDone,
      todos:this.state.todos
    })
  }
  render() {
    const lengthTodoDoing = this.state.todosDoing.length;
    const lengthTodoDone = this.state.todosDone.length;
    return (
      <div>
        <div className="header">
          <Input addtodoInput={this.addtodoApp} />
        </div>
        <div className="todoBody">
          <h2>正在进行<span className="count">{lengthTodoDoing}</span></h2>
          <ListItem className="doings" todos={this.state.todosDoing} appChangeCheck={this.changeCheckDoing} appDeleteTodo={this.deleteTodoDoing} />
          <h2>已经完成 <span className="count">{lengthTodoDone}</span></h2>
          <ListItem className="dones" todos={this.state.todosDone} appChangeCheck={this.changeCheckDone} appDeleteTodo={this.deleteTodoDone} />
          <hr />
          <h2>共计{lengthTodoDoing + lengthTodoDone}件任务</h2>
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
