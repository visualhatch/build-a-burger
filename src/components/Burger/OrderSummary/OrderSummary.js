import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';

import styles from './OrderSummary.module.css';

import Aux from '../../../hoc/Aux/Aux';

class OrderSummary extends Component {
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('OrderSummary Will Update');
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span className={styles.IngredientType}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                )
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType={'Danger'} clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType={'Success'} clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
}

// OrderSummary.propTypes = {};

export default OrderSummary;