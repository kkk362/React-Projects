import React, { useState } from 'react'
import './General.css';

function Input(props) {
    const {AddItem}=props
    const[list,setList]=useState ();
    const HandleChange=(e)=>{
        setList(e.target.value)
    }
    const HandleEnterPress=(e)=>{
        if(e.keyCode==13)
        {
            AddItem(list); 
            setList('')
        }
    }
  return (
   <div width='100px'>
    <h1> TODO List </h1>
    <input type='text'  className='input-box' 
    onChange={HandleChange} 
    value={list} 
    placeholder='Enter Your Task Items'
    onKeyDown={HandleEnterPress}/>
    <button className='circular-button' onClick={()=>{AddItem(list); setList('')}}>+</button>
    <hr width='360px'/>
   </div>
  )
}

export default Input

