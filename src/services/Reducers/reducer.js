import { ADD_TO_CARD,REMOVE_TO_CARD } from "../Constant"
const initialstate ={
    cardData:[]
}
export default function cardItem(state=[],action)
{
 switch(action.type){
     case ADD_TO_CARD:
         return [
            ...state,
            {cardData:action.data}
            ]
    case REMOVE_TO_CARD:
                state.pop()
                return [
                    ...state,
               ]
                 
        default:
            return state
    }
}