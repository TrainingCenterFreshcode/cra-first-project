// TodoForm - класова компонента

import React, { Component } from 'react';
import styles from './TodoFormStyle.module.css';

// "*" - заборонений символ. Реалізувати валідацію

class TodoForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // 1. Створити відповідне поле у стейті, які буде контролювати значення інпуту
            taskText: '',
            isInputValid: true
        }
    }

    // 2. Обробник onChange для інпута, який буде змінювати стейт
    changeHandler = ({ target: {value, name} }) => {
        if(value.includes('*')) {
            this.setState({
                isInputValid: false
            });
        } else {
            this.setState({
                [name]: value,
                isInputValid: true
            });
        }
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
        const { taskText, isInputValid } = this.state;

        const className = cx({
            [styles.input]: true,
            [styles['invalid-input']]: !isInputValid
        });

        return (
            <form onSubmit={this.submitHandler} className={styles.container}>
                <input 
                    type='text' 
                    // className={`${styles.input} ${isInputValid ? '' : styles['invalid-input']}`}
                    className={className}
                    value={taskText} 
                    name='taskText' 
                    onChange={this.changeHandler} 
                /> {/* 3. Потрібно вказати, що value інпута контролюється стейтом */}
                <button type='submit'>Add task</button>
            </form>
        );
    }
}

export default TodoForm;


/*
Коли інпут валідний:
<input class="input" >

Коли інпут невалідний:

<input class="input invalid-input" >

*/


function cx(objectClassNames) {
    // const cort = Object.entries(objectClassNames);
    // const filteredArray = cort.filter(([className, condition]) => condition);
    // const mapArray = filteredArray.map(([className, condition]) => className);
    // return mapArray.join(' ');

    return Object.entries(objectClassNames)
    .filter(([className, condition]) => condition)
    .map(([className, condition]) => className)
    .join(' ');
}

/*

objectClassNames = {
    className1: true,
    className2: true,
    className3: false
}

[[className1, true], [className2, true], [className3, false]] 
=>
[[className1, true], [className2, true]]
=>
[className1, className2]
=>
'className1 className2'

*/