import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Create() {
    const [task,setTask]=useState()
    function handleAdd() {
      if(task.length===0){
        alert("task should not be empty")
      }
      else{
        axios.post('http://localhost:3001/add',{task:task})
        .then(result =>
          {
             window.location.reload()  
          })
        .catch(err => console.log(err))
    
        }
      }
  return (
    <div className='create_form'>
        <input type="text" onChange={(e) => setTask(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
