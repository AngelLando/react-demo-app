import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients).map(key => {
        return (
            <li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
            </li> );
    });
    
    return (
        <Aux>
            <h3><strong>Votre commande</strong></h3>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total:</strong> CHF {props.price}</p>
            <Button btnType="Default" clicked={props.purchaseCancelled}>Annuler</Button>
            <Button btnType="Primary" clicked={props.purchaseContinued}>Continuer</Button>
        </Aux>
    );
};

export default OrderSummary;