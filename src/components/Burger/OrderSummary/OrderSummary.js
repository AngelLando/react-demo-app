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
            <h3>Votre commande</h3>
            <p>Vos ingrédients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price: {props.price}</strong></p>
            <p>Payer?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Annuler</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continuer</Button>
        </Aux>
    );
};

export default OrderSummary;