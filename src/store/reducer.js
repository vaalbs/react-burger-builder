import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0
    },
    totalPrice: ''
} 

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredietName]: state.ingredients[action.ingredietName] + 1
                }
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredietName]: state.ingredients[action.ingredietName] - 1
                }
            };
        default: 
            return state;
    }
    return state;
}

export default reducer;