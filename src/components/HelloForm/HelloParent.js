/*

Задача (*)

Форма, яка вітається повинна бути всередині батьківської форми.
В батьківській формі зберігається ім'я користувача у стейті.

Тобто, форма у якій запитується ім'я користувача - дочірня форма.
Форма, у якій відображається вітання ім'я користувача - батьківська форма.
Дитина повинна передати батьку name юзера, щоб він зміг з ним привітатися.


*/

import React from "react";
import HelloForm from "./HelloForm";

// батьківський компонент, який містить ім'я користувача

class HelloParent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Anonym'
        }
    }

    getStateFromChild = (username) => {
        this.setState({
            name: username
        });
    }

    render() {
        const { name } = this.state;

        return (
            <>
                <HelloForm sendUsernameToParent={this.getStateFromChild} />
                <p>Hello {name}</p>
            </>
        )
    }
}

export default HelloParent;