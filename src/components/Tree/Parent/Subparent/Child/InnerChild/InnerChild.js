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
