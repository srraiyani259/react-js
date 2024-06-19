
import { INCREMENT,DECREMENT } from "./action";

const reducer = (state ,action) =>{
    switch(action.type){
        case INCREMENT : return{
            ...state,
            prices : state.prices.map(item=>
                item.id === action.payload
                ?{
                    ...item , value :item.value + item.price
                } : item

            )
        }

        case DECREMENT : return{
            ...state,
            prices : state.prices.map(item=>
                item.id === action.payload
                ?{
                    ...item , value :item.value - item.price
                } : item

            )
        }
    }
}
export default reducer
