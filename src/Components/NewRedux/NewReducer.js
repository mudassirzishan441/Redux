export const Reducer = (state = {cart:[], product:[], selecteditem:{}} , action) => {
    if(action.type==="PRODUCT"){
        return{...state, product:action.data}
    }
    if(action.type==="CART"){
        return{...state,cart:[...state.cart,action.data]}
    }
    if(action.type ==="SELECTED_ITEM"){
        return{...state,selecteditem:action.data}
    }
return state
}