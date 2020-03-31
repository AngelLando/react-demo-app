import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Moins</button>
        <button className={classes.More}>Plus</button>
    </div>
);

export default BuildControl;