import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Bon appétit!</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>Annuler</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continuer</Button>
        </div>
    );
};

export default CheckoutSummary;