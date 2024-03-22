import React from 'react';
import InnerChild from './InnerChild/InnerChild';
import { withUser } from '../../../../../HOC';
import styles from './Child.module.css';

const Child = (props) => {
    return (
        <div className={styles.border}>
            Child
            <img className={styles.img} src={props.user.avatar} alt={`${props.user.firstName} ${props.user.lastName}`} />
            <InnerChild />
        </div>
    )
}

export default withUser(Child);

/*

+В компоненті Child відобразити або картинку або прізвище / ім’я

Декомпозиція задачі:

+ 1. Підписатись Consumer до контексту юзера (UserContext)
+2. В рендер-пропі Consumer витягнути об'єкт юзера і відобразити необхідну інформацію 

*/
