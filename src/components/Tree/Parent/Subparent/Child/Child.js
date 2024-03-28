import { useContext } from 'react';
import InnerChild from './InnerChild/InnerChild';
import { UserContext } from '../../../../../contexts/userContext';
import styles from './Child.module.css';

const Child = () => {
    const {user: {avatar, firstName, lastName}} = useContext(UserContext);
    
    return (
        <div className={styles.border}>
            Child
            <img className={styles.img} src={avatar} alt={`${firstName} ${lastName}`} />
            <InnerChild />
        </div>
    )
}

export default Child;
