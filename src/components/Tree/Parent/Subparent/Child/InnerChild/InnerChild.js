import { useContext } from 'react';
import { UserContext } from '../../../../../../contexts/userContext';

const InnerChild = (props) => {
    const {user: {firstName, lastName, email, avatar}, logOut} = useContext(UserContext);
    
    return (
        <div>
            I'm InnerChild
            <button onClick={logOut}>Log out</button>
            <p>{firstName} {lastName} {email}</p>
        </div>
    )
}

export default InnerChild;
