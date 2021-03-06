import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        var val = this.textInput.value;
        if (!val) {
            alert("请输入待办事项！");
            e.preventDefault();
            return false;
            console.log(val);
        }

        let newTodo={
            text:val,
            isDone:false
        }
        this.props.addtodoInput(newTodo);
        this.textInput.value = '';
        e.preventDefault();        
    }
    render() {
        return (
            <div className="inputDiv">
                <form onSubmit={this.handleSubmit}>
                <label className="title">ToDoList</label>
                    <input type="text" id="todoInput" ref={(input) => { this.textInput = input; }} placeholder="请输入代办事项" />
                </form>
            </div>
        )
    }
}

export default Input;