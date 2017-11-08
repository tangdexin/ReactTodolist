import React from 'react';
import ReactDOM from 'react-dom';

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
        return <li><input type="checkbox" className="todoLi" checked={this.props.isDone} onChange={this.changeCheck}/>
            <span>{this.props.value}</span>
            <a type="button"  onClick={this.deleteLi}>-</a>
        </li>
    }
}
export default List;
