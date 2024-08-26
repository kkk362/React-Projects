import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Output from './Components/Output';

function App() {
  const [items, setItems]=useState([]);
  const AddItem=(inputText)=>{
    if(inputText!=='')
   { setItems([...items,inputText])}
  }
  const DeleteItem=(key)=>{
   let newList =[...items];
   newList.splice(key,1)
   setItems([...newList]);
  }
  return (
    <div className="App">
      <Input AddItem={AddItem}/>
      <span>
      {
      items.map((x,i)=>(
             <Output DeleteItem={DeleteItem} x={x} i={i}/>
      ))}</span>
    </div>
  );
}

export default App;
