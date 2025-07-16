function cartReducer(state=[],action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state,action.payload]
        
        case "REMOVE_ITEM":
            return state.filter(item=>item.id !== action.payload.id)

        case "CLEAR_CART":
            return []
        default:
            return state
    }
}
let cartState=[]
function dispatch(action) {
    cartState=cartReducer(cartState,action)
    console.log(cartState)
}
const addItem=(item)=>({
    type:"ADD_ITEM",
    payload:item
})
const removeItem=(id)=>({
    type:"REMOVE_ITEM",
    payload:{
        id
    }
})
dispatch(addItem({id:1,name:"Dog toy",price:249}))
dispatch(addItem({id:2,name:"Cat ball",price:549}))
dispatch(addItem({id:3,name:"Food",price:849}))
dispatch(removeItem(2))
dispatch(addItem({id:2,name:"Cat ball",price:549}))
dispatch({type:"CLEAR_CART"})