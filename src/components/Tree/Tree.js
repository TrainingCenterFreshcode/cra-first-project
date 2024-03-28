import { useContext } from 'react';
import Parent from './Parent/Parent';
import style from './Tree.module.css';
import CONSTANTS from '../../constants';
import cx from 'classnames';
import { ThemeContext } from '../../contexts/themeContext';

const { THEMES } = CONSTANTS;


const Tree = (props) => {
    // 1. Використати useContext (дістати з контексту теми поле theme)
    // 2. По коду компоненти внести правки
    // 3. Виправити експорт у цьому файлі

    const classNames = cx(style.container, {
        [style.lightTheme]: props.theme === THEMES.LIGHT,
        [style.darkTheme]: props.theme === THEMES.DARK
    });

    return (
        <div className={classNames}>
            Tree
            <Parent />
        </div>
    )
}

const TreeWithTheme = withTheme(Tree);

export default TreeWithTheme;
