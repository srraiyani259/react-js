
import { INCREMENT,DECREMENT } from "./action";

const intialState={
    count:0
}

const counterReducer = (state=intialState,action) =>{
    
    switch(action.type)
    {
        case INCREMENT : return {
 
            ...state,
            count : state.count + 1

        }

        case DECREMENT : return {
            ...state,
            count:state.count.lenght > 0 ? state.count - 1 : state.count
        }

        default : return state
    }


}

export default counterReducer
