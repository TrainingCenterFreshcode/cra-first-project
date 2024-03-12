import React from "react";
import UserCard from "./UserCard";
import { getUsers } from "../../api";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100
        }
    }

    componentDidMount() {
        const { userCount } = this.state;

        getUsers(userCount).then(data => {
            const { results } = data;

            this.setState({
                users: results
            })
        });
    }

    renderUsers = () => {
        const { users, filteredUsers } = this.state;
        return filteredUsers.length > 0 
        ?
        filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
        :
        users.map((user) => <UserCard user={user} key={user.login.uuid} />);
    }

    clickHandler = () => {
        getUsers().then(data => {
            const { results } = data;

            const tempArray = this.state.users;
            tempArray.push(results[0]);

            this.setState({
                users: tempArray
            })
        });
    }

    handleSearch = (event) => {
        const { target: {value: searchValue} } = event;
        const { users } = this.state;

        // 1
        // якщо в інпутику нічого немає, то чистимо масив відфільтрованих юзерів
        if(searchValue === '') {
            this.setState({
                filteredUsers: []
            });

            return;
        }
        
        // 2
        // Фільтруємо по прізвищу
        const filteredUsers = users.filter(user => user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);

        // 3
        // кладемо в стейт відфільтрованих юзерів
        this.setState({
            filteredUsers
        });
    }

    handleSetUserCount = (event) => {
        const { target: {value} } = event;

        this.setState({
            userCount: value
        });
    }

    handleLoadUsersClick = () => {
        const { userCount } = this.state;

        getUsers(userCount).then(data => {
            const { results } = data;

            const tempArray = this.state.users;
            results.forEach((user) => {
                tempArray.push(user);
            })

            this.setState({
                users: tempArray
            })
        });
    }

    render() {
        const { users } = this.state;

        return (
            <>
                <h1 className="header-text">Users List</h1>

                <input type="number" min={1} max={500} onChange={this.handleSetUserCount} />
                <button onClick={this.handleLoadUsersClick}>Load users</button>

                <input type="text" placeholder="Search by lastname" onChange={this.handleSearch} />


                <button onClick={() => this.clickHandler()}>Add user</button>
                <section className="card-container">{users.length ? this.renderUsers() : <h2>Users loading...</h2>}</section>
            </>
        )
    }
}

export default UserList;

/*

+ 1. Реалізувати таку логіку, щоб за замовчуванням ми підвантажували 100 користувачів.

+ 2. Отримуємо список користувачів з БД (randomuser.me)
Зробити інпутик завдяки якому можна буде фільтрувати користувачів за прізвищем

+ 3. Додаткове завдання.
Зробити ще один інпут з кнопкою, де ви можете вказати, яку кількість користувачів ви маєте підгрузити

*/