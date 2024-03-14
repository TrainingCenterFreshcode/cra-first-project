// TodoForm - класова компонента

import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // 1. Створити відповідне поле у стейті, які буде контролювати значення інпуту
            taskText: ''
        }
    }

    // 2. Обробник onChange для інпута, який буде змінювати стейт
    changeHandler = ({ target: {value, name} }) => {
        this.setState({
            [name]: value
        });
    }

    submitHandler = (event) => {
        const { props: { sendData }, state: { taskText } } = this;

        event.preventDefault();

        sendData(taskText);

        this.setState({
            taskText: ''
        });
    }
    

    render() {
        const { taskText } = this.state;

        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' value={taskText} name='taskText' onChange={this.changeHandler} /> {/* 3. Потрібно вказати, що value інпута контролюється стейтом */}
                <button type='submit'>Add task</button>
            </form>
        );
    }
}

export default TodoForm;
