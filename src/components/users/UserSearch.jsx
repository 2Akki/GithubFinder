import {  useReducer, useState,useContext } from "react";
import githubReducer from '../../context/github/GithubReducer'
import GithubContext from '../../context/github/GithubContext'
import UserItem from "./UserItem";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";
const initialState = {
    users:[],
    loading: false,

}
export default function UserSearch() {
    const [text,setText] =useState("")


    const {dispatch,users} = useContext(GithubContext)
    useContext(AlertContext)
    const {setAlert} =useContext(AlertContext)
    // const [state] =useReducer(githubReducer,initialState)
    const HandleSubmit = async(e)=>{
        e.preventDefault()
        if(text===""){
            setAlert("Please enter Some thing","error")
        }else{
            // searc for the user
            dispatch({type:"SET_LOADING"})
            const users = await searchUsers(text)
            dispatch({type:"GET_USERS",payload:users})
            setText("")
        }
    }
    const HandleChange = (e)=>{
        setText(e.target.value)
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
    <div>
      <form onSubmit={HandleSubmit}>
        <div className='form-control'>
          
          <div className='relative'>
            <input
              type='text' className='w-full pr-40 bg-gray-200 input input-lg text-black' placeholder='Search' value={text} onChange={HandleChange}/>
            <button type='submit'className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'> Search</button>
          </div>
        </div>
      </form>
    </div>
    {users.length > 0 && (
      <div>
        <button onClick={() => dispatch({type:"CLEAR_USERS"})} className='btn btn-ghost btn-lg'
        >
          Clear
        </button>
      </div>
    )}
                
  </div>
  )
}
