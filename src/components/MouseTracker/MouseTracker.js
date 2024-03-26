/*

Задача: написати трекер положення миші на нашому екрані.

*/

import { useState, useEffect } from 'react';

const MouseTracker = (props) => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    });

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', trackerHandler);

        return () => { // clean function = componentWillUnmount
            window.removeEventListener('mousemove', trackerHandler);
        }

        // порожній масив залежностей = componentDidMount
    }, []); // коли ви прописуєте залежності в DependencyList = componentDidUpdate

    const trackerHandler = (event) => {
        const { clientX, clientY } = event;

        setCoordinates({
            x: clientX,
            y: clientY
        });
    }

    const clickHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <p>X: {coordinates.x}</p>
            <p>Y: {coordinates.y}</p>
            <button onClick={clickHandler}>Click me</button>
            <p>Counter: {counter}</p>
        </>
    );
}

export default MouseTracker;

/*

Класовий setState

previousState = {
    x: 0,
    y: 0,
    counter: 0
}

this.setState({
    counter: this.state.counter + 1
})

=>

{...prevState, ...newState} -->> {x: 0, y: 0, counter: 1}


Хуковий setState // Хуковий setState не буде доповнювати попопереднім станом!

previousState = {
    x: 0,
    y: 0,
    counter: 0
}

setState({
    counter: counter + 1
})

=>

{...newState} -->> {counter: 1}

*/
