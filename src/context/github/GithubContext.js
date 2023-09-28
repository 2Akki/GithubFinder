import { createContext, useReducer } from "react";
import githubReducer from '../github/GithubReducer.js'

const GithubContext = createContext()



export const GithubProvider=({children})=>{

    const initialState = {
        users:[],
        user:{},
        loading: false,
        repos:[],

    }


    const [state,dispatch] =useReducer(githubReducer,initialState)
    //clear User From State 
  
      // Set Loading
  
//Get initial Users /testing pupposses
    //  const fetchUsers = async ()=>{
    //      setLoading()
    //      const response = await fetch(`${GITHUB_URL}/users`,{headers: {Authorization:`token ${GITHUB_TOKEN}`}}) 

    //      const data = await response.json()

    //      dispatch({
    //          type:"GET_USERS",
    //          payload:data,
    //      })
    //  }
   

 
  
    return <GithubContext.Provider value ={{...state,dispatch}} >
        {children}
    </GithubContext.Provider>
}
export default GithubContext