import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

import 'antd/dist/antd.css';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>React.js</div>
        <nav>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default Toolbar;