export const ecommerceReducer=(state = {allProducts:[],cart:[],selectedItems:{}},
    action)=>{
        if(action.data === "ALL_PRODUCTS"){
            return {...state,allProducts:action.data}
        }
    if(action.type === "ADD_TO_CART"){
        return{...state,cart:[...state.cart,action.data]}
    }
    if (action.type === "SELECTED_ITEMS"){
        return{...state,selectedItems:action.data}
    }
    return state;
};