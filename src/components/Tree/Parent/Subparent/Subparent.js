import React from 'react';
import Child from './Child/Child';
import { withTheme, withUser } from '../../../../HOC';
import CONSTANTS from '../../../../constants';
const { THEMES } = CONSTANTS;

const Subparent = (props) => { // Тут ми фокусуємось на вирішенні нашої задачі, без хлам-коду типу консьюмерів
    const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    return (<div>
        Subparent
        <p>{props.user.firstName}</p>
        <button onClick={() => props.setTheme(nextTheme)}>Click to change theme</button>
        <Child />
    </div>)
}

// // 1. Огортаємо Сабперента в контекст теми
// const SubparentWithTheme = withTheme(Subparent);

// // 2. ОГортаємо SubparentWithTheme в контекст юзера
// const SubparentWithThemeAndUser = withUser(SubparentWithTheme);

export default withUser(withTheme(Subparent));
