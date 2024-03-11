import React from "react";

class HiForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    changeHandler = ({target: {value}}) => {
        this.setState({
            username: value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state); // на цьому місці ми потенційно можемо зробити запит на сервер
        alert(`Hi ${this.state.username}`);
    }

    render() {
        const { username } = this.state;

        return (
            <>
                <h1>Hi Form 😺😼</h1>
                <form onSubmit={this.submitHandler}>
                    <input type='text' value={username} onChange={this.changeHandler} />
                    <button>Send form</button>
                </form>
            </>
        )
    }
}

export default HiForm;