import React from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => (
    <Aux>
        <Toolbar isAuth={props.isAuthenticated} />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);