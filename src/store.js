import {createStore, combineReducers, applyMiddleware } from 'redux'
import moviesReducers from './movies'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';



const store =createStore(
    combineReducers({movies:moviesReducers}),
    composeWithDevTools(applyMiddleware(thunk))
)
//console.log(store.getState())

store.dispatch(
{
type:'ADD',
movie:{id:'2' ,title:'titanic'}
})

store.dispatch(
    {
    type:'ADD',
    movie:{id:'5' ,title:'titanic2'}
    })

store.dispatch(
{
type:'EDIT',
id:'1',
movie: {id:'3', title:'Shruk2'}
})

store.dispatch(
{
type:'DEL',
id:'0'
}
)

console.log(store.getState())
export default store;