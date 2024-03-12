import React from "react";

// компонент представляє собою дочірній компонент з формою, в якому і буде запитуватись ім'я користувача

class HelloForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }
    
    submitHandler = (event) => {
        event.preventDefault();

        const {props: {sendUsernameToParent}, state: {name}} = this;

        sendUsernameToParent(name);
    }

    changeHandler = ({target: {value}}) => {
        this.setState({
            name: value
        });
    }

    render() {
        const { name } = this.state;

        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Type your name" value={name} onChange={this.changeHandler} />
                <button type="submit">Send my name</button>
            </form>
        )
    }
}

export default HelloForm;