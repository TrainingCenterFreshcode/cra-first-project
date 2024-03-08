import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [
                {id: 1, text: 'go to party'},
                {id: 2, text: 'meet friends'},
                {id: 3, text: 'have a walk'}
            ]
        }
    }

    removeTask(taskIDtoRemove) {
        const { todoList } = this.state;

        const filteredArray = todoList.filter(task => task.id !== taskIDtoRemove);

        this.setState({
            todoList: filteredArray
        });
    }

    renderLi() {
        const { todoList } = this.state;
        
        return todoList.map((task) => 
        <TodoItem 
            key={task.id} 
            text={task.text} 
            delCallback={() => this.removeTask(task.id)} 
        />);
    }

    render() {
        return (
            <>
                <h1>TODO LIST</h1>

                <ul>
                    {this.renderLi()}
                </ul>
            </>
        )
    }
}

export default TodoList;

/*

Задача 1 - DONE

+ Створити компоненту TodoList.
+ Ця компонента має в стейті масив об'єктів, в якому будуть знаходитись текст задачі та її id.

Приблизно це може виглядати ось таким чином:

[
    {id: 1, text: 'go to party'},
    {id: 2, text: 'meet friends'},
    {id: 3, text: 'have a walk'}
]

+ Компонента рендерить список <li>, всередині якого один рядок з масиву

Приблизно це може виглядати ось таким чином:

<ul>
    <li>go to party</li>
    <li>meet friends</li>
    <li>have a walk</li>
</ul>


Задача 2 (***) - DONE

+ В кожній li зробити кнопку, за натисненням на яку цей елемент списку має зникнути (реалізувати видалення завдання)
(тобто оновити стейт таким чином, щоб в масиві з рядками або об'єктами не було того, який пов'язаний з кнопкою)

*/