import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import classes from './Orders.module.css';
import * as actions from '../../store/actions/index';

import { Spin } from 'antd';
import 'antd/dist/antd.css';

const Orders = props => {
    const { onFetchOrders, token, userId } = props;

    useEffect(() => {
        onFetchOrders(token, userId);
    }, [onFetchOrders, token, userId]);

    let orders = <Spin className={classes.Spin} size="large" />;
    if(!props.loading) {
        orders = props.orders.map(order => (
            <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
        ));
    };
    return (
        <div>
            {orders}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(Orders, axios));