import React, { useEffect } from 'react'
import Create from './Create'
import { useState } from 'react'
import {BsCircleFill,BsFillTrashFill,BsFillCheckCircleFill} from 'react-icons/bs';
import axios from 'axios';
export default function Home() {
    const [todos,setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos (result.data))
        .catch( err => console.log(err))
    },[])

const handleEdit = (id) =>{
    axios.put('http://localhost:3001/line/'+id)
        .then(result => {
           window.location.reload()
        } )
        .catch( err => console.log(err))
}

const handleDelete = (id) =>{
    axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
            window.location.reload()
        } )
        .catch( err => console.log(err))
}

const handleUpdate =(id)=>{
    const task2 =prompt("Enter New Task")

    axios.put('http://localhost:3001/update/'+id,{task2:task2})
        .then(result =>
          {
             window.location.reload()
          })
        .catch(err => console.log(err))
    
}
    return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create/>
        {
            todos.length === 0 
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo => (
                <div className='task'>
                    <div className="checkbox" onClick={ () => handleEdit(todo._id)}>
                        {todo.done ? <BsFillCheckCircleFill className ="icon"/> 
                       : <BsCircleFill className ="icon"/>
                       }
                        
                   <p className={todo.done ? "line_through" :" " }> {todo.task} </p>
                </div>
                <div>
                   <span><button className='icon' onClick={() => handleUpdate(todo._id)}>Update</button></span>
                <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)} /></span>
                </div>
                </div>
            ) )
        }
    </div>
  )
}
