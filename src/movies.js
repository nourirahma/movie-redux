
//store==objet 
//reducer == function



const defaultList =[
    {id:'0' , title:'Saw'},
    {id:'1', title:'Shruk'}
]

const movies=(state,action)=>{

    if(action.type==="ADD"){

       return  state.concat(action.movie)
    }

    if(action.type==="DEL"){
       
        return state.filter(film=>{
            if(film.id===action.id){
                return false
            }
            return state
        })
    }

    if(action.type==="EDIT"){

        return state.map(film=>{
            if(film.id === action.id){
                return action.movie
            }
            return film
        })
    }

       return state=defaultList;
}

export default movies