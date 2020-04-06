import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger</NavigationItem>
        <NavigationItem link="/orders" >Commandes</NavigationItem>
        {!props.isAuthenticated ? <NavigationItem link="/auth" >Inscription</NavigationItem> : <NavigationItem link="/logout">Logout</NavigationItem>}
    </ul>
);

export default NavigationItems;