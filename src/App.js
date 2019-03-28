import React, { Component } from 'react';
import './App.css';
import './ex'
import { connect } from 'react-redux'


const AddtoDo =({text , onChangeToDo=()=>{} , onClickAdd=()=>{} })=>{

return <div>
    <input type='text' value={text} 
       onChange={event=>onChangeToDo(event.target.value)}>
    </input>
    <button  onClick={()=>onClickAdd(text)}>ADD</button>

  </div>
}

const ListtoDo =({list})=>{

 return  <ul>
      {
        list.map(e=>(<li>{e}</li>))
      }
  </ul>
}

//mapStateToProps function te5ou state eadihelha redux //

const mapStateToProps = (state)=>{

  return {
    list : state.list,

    text : state.toDo
    //text ==props 
  }
}


const mapStateToProps2 =(state)=>{

  return {
    
        list : state.list,
     

  }
}

//<AddtoDo text='hhhh'/>
 
const mapDispatchToprops =(dispatch)=>{

  return {
      onChangeToDo:(newvalue)=>{
      dispatch({type:'Change_New_To_Do' , newText:newvalue}
     
      )
    

    },
    onClickAdd : newlist=>{
      dispatch({type:'add_list',liste:newlist})
    }

  }
}



const ConnectedAddtoDo =connect(
  mapStateToProps,
  mapDispatchToprops 
  )(AddtoDo)

const ConnectedListtoDo =connect(
  mapStateToProps2)(ListtoDo)

//connect connexion state 

class App extends Component {
  render() {
    return (
      <div className="App">
       <ConnectedAddtoDo/>
       <ConnectedListtoDo/>
      </div>
    );
  }
}

export default App;
