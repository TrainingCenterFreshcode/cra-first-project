import React from 'react';
import Parent from './Parent/Parent';
import style from './Tree.module.css';
import { ThemeContext } from '../../contexts/themeContext';
import CONSTANTS from '../../constants';
import cx from 'classnames';

const { THEMES } = CONSTANTS;


const Tree = (props) => {
    return (
        <ThemeContext.Consumer>
            {({theme, setTheme}) => {
                const classNames = cx(style.container, {
                    [style.lightTheme]: theme === THEMES.LIGHT,
                    [style.darkTheme]: theme === THEMES.DARK
                });

                return (
                    <div className={classNames}>
                        Tree
                        <Parent />
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    );
}

export default Tree;
