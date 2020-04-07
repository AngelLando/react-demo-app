import React from 'react';

import classes from './Order.module.css';

import { Card, Timeline } from 'antd';
import 'antd/dist/antd.css';

const Order = (props) => {
    const ingredients = [];

    for(let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return (
            <li key={ig}>
                <span style={{textTransform: 'capitalize'}}>{ig.name}: {ig.amount}</span>
            </li>
        );
    });

    return (
        <Card className={classes.Order}>
        <h3><strong>Etat</strong></h3>
        <br />
        <Timeline pending="En préparation...">
          <Timeline.Item color="green">Commande reçue</Timeline.Item>
        </Timeline>
        <h3><strong>Résumé</strong></h3>
        <ul>{ingredientOutput}</ul>
        <h3><strong>Prix total</strong></h3>
        <p><strong>CHF {props.price.toFixed(2)}</strong></p>
        </Card>
    );

};

export default Order;