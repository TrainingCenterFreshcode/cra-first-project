import React from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    return (
        <UserContext.Consumer>
            {({firstName, lastName, email, avatar}) => {
                return (
                    <div style={{border: '3px solid black', padding: '25px'}}>
                        I'm InnerChild
                        <p>{firstName} {lastName} {email}</p>
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
}

export default InnerChild;
