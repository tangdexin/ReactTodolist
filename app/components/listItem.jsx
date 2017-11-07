import React from 'react';
import ReactDOM from 'react-dom';
import Number from './number.jsx';
import List from './list.jsx';


// function List(props) {
//     return <li>
//         <input type="checkbox" checked={props.isDone}/>{props.value}
//         </li>
// }
class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.itemChangeCheck = this.itemChangeCheck.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    itemChangeCheck(index,isDone){
        this.props.appChangeCheck(index,isDone);
    }
    deleteTodo(){
        this.props.appDeleteTodo()
    }
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo, index) =>
                        <List value={todo.text} checked={todo.isDone}
                         key={index} index={index} isDone={todo.isDone} 
                         itemChangeCheck={this.itemChangeCheck} deleteTodo={this.deleteTodo}/>
                    )

                }
            </ul>
        )
    }
}

export default ListItem;
