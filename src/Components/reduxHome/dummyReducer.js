export const dummyReducer=(state = {newAllProducts:[],newCart:[],newSelectedItems:{}},
    action)=>{
        if(action.data === "NEW_ALL_PRODUCTS"){
            return {...state,newAllProducts:action.data}
        }
    if(action.type === "NEW_ADD_TO_CART"){
        return{...state,newCart:[...state.newCart,action.data]}
    }
    if (action.type === "NEW_SELECTED_ITEMS"){
        return{...state,newSelectedItems:action.data}
    }
    return state;
};