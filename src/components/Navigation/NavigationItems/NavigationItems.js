import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/orders" >Commandes</NavigationItem> : null}
        {!props.isAuthenticated ? <NavigationItem link="/auth" >S'identifier</NavigationItem> : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default NavigationItems;