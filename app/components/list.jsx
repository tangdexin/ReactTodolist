import React from 'react';
import ReactDOM from 'react-dom';
import Number from './number.jsx';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.changeCheck = this.changeCheck.bind(this);
        this.deleteLi = this.deleteLi.bind(this);
    }

    changeCheck(){
        let isDone = !this.props.isDone;
        this.props.itemChangeCheck(this.props.index,isDone);
    }

    deleteLi(){
        this.props.deleteTodo(this.props.index);
    }
    render() {
        return <li><input type="checkbox" checked={this.props.isDone} onChange={this.changeCheck}/>
            <span>{this.props.value}</span>
            <input type="button" value='X' onClick={this.deleteLi}/>
        </li>
    }
}
export default List;
