import React from 'react';

import classes from './Order.module.css';

const Order = (props) => (
    <div className={classes.Order}>
        <p>Ingrédients: Salad (1)</p>
        <p>Prix: CHF 5.50</p>
    </div>
);

export default Order;