import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    return (
        <UserContext.Consumer>
            {({user: {firstName, lastName, email, avatar}, logOut}) => {
                return (
                    <div>
                        I'm InnerChild
                        <button onClick={logOut}>Log out</button>
                        <p>{firstName} {lastName} {email}</p>
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;

/*

ДЗ: Переробити компоненту InnerChild таким чином, щоб вона використовувала HOC, який ми розробили

Декомпозиція задачі:
1. export default withUser(InnerChild); // HOC withUser потрібно попередньо заімпортувати
2. В return innerChild потрібно просто повернути верстку без загортання в Consumer
Вся необхідна інформація для відображення компоненти буде знаходитись у прпосах

P.S. Підглянути можна у компоненту Child

*/
