 
import  {createStore , combineReducers} from 'redux'

const initilState =['finish homework' , 'learn redux']

const listReducer=(state=initilState,action)=>
{
    if(action.type==='add_list'){

        return  state.concat(action.liste)
    }
    return state
}


const newlistTodo =(state='go to monoprix' , action )=>
{
    if(action.type==='Change_New_To_Do'){
        return action.newText
    }
    return state
}



const reducers =createStore(
    combineReducers({

    list:listReducer,
    toDo:newlistTodo
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

console.log(reducers.getState())
export default reducers;