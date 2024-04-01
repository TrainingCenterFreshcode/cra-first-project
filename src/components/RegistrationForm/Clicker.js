import { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'CLICK_INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case 'CLICK_DECREMENT': {
            return {
                ...state,
                count: state.count - 1
            };
        }
        case 'INPUT_CHANGE': {
            // 1. Розбираємось з атрибутом name
            // 2. Коли ми розібралися, в який саме стейт має зайти значення - кладемо у відповідний стейт значення
            break;
        }
        default: {
            return state;
        }
    }
}

const initialState = {
    count: 0,
    // тут ще може бути багато інших полей
}

const Clicker = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clickIncrementHandler = () => {
        dispatch({
            type: 'CLICK_INCREMENT'
        }); // В dispatch ви передаєте об'єкт action
    }

    const clickDecrementHandler = () => {
        dispatch({
            type: 'CLICK_DECREMENT'
        });
    }

    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={clickIncrementHandler}>Increment</button>
            <button onClick={clickDecrementHandler}>Decrement</button>
        </>
    );
}

/*

Задача

+ Додати декремент лічильника до функціоналу

+ 1. Пропишіть відповідний case у редьюсері
+ 2. Зробіть обробник події натиснення (onClick) кнопки декременту
+ 3. Створіть у верстці кнопку і прикрутіть до неї обробник події, який ви зробили на попередньому кроці

*/

export default Clicker;