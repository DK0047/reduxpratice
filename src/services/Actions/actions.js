import {ADD_TO_CARD,REMOVE_TO_CARD} from '../Constant'
export const addtocard = (data) =>{
    return{
        type:'ADD_TO_CARD',
          data:data
    }
}

export const removetocard = () =>{
    console.warn('action')
    return{
        type:'REMOVE_TO_CARD',
         
    }
}