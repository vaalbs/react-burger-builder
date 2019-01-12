import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBugerSucces = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCES,
        orderId : id,
        orderData: orderData
    };
};

export const purchaseBugerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBugerStart = (orderData) => {
    return dispatch => {
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBugerSucces(response.data, orderData));
            })
            .catch(error => {
                dispatch(purchaseBugerFail(error));
            });
    };
};