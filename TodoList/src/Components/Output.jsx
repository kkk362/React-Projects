import React from 'react'
import { MdDeleteForever } from "react-icons/md";

function Output(props) {
  return (
    <div class="container">
    <div key={props.i} class="text-box">
     {props.x}
     <MdDeleteForever onClick={()=>props.DeleteItem(props.i)}/>
    </div>
  </div>
  )
}

export default Output