import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

const BurgerBuilder = props => {
    const [purchasing, setPurchasing] = useState(false);

    const { onInitIngredients } = props;

    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients]); 
    

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0;
    };

    const purchaseHandler = () => {
        if(props.isAuthenticated) {
            setPurchasing(true);
        } else {
            props.onSetAuthRedirectPath('checkout');
            props.history.push('/auth');
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        props.onInitPurchase();
        props.history.push('/checkout');
    }

    const disabledInfo = {
        ...props.ings
    };
    for(let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

    let burger = props.error ? <p>Les ingrédients ne peuvent pas être chargés!</p> : <Spinner />;
    
    if(props.ings) {
        burger = (
            <Aux>
                <Burger ingredients={props.ings} />
                <BuildControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={updatePurchaseState(props.ings)}
                    ordered={purchaseHandler}
                    isAuth={props.isAuthenticated}
                    price={props.price} />
            </Aux>
        );
        orderSummary = <OrderSummary
            ingredients={props.ings}
            price={props.price.toFixed(2)}
            purchaseCancelled={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler} />;   
    }

    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );

}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, axios));