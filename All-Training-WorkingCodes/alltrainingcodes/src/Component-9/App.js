import "./App.css";
import Profile from "./Component-9/Profile";
import React, { useState } from "react";
import NameList from "./Component-9/NameList";
import Form from "./Component-9/Form";
import UncontrolledForm from "./Component-9/UncontrolledForm";

function App() {
  const [count, setCount] = useState(100);
  const myLists = ["Raj", "Abhay", "Kumar", "Subham"];
  const Empid = [101, 102];
  const data = [
    { id: 101, name: "raj", salary: 100000 },
    { id: 102, name: "rajee", salary: 1000050 },
    { id: 103, name: "raj kumar", salary: 1040000 },
    { id: 104, name: "abhay", salary: 1030000 },
  ];

  return (
    <>
      <div className="App">
        <h1>Hooks is use if fun component {count}</h1>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Increment{" "}
        </button>
        <Profile />
      </div>
      <div>
        {" "}
        <NameList Name={myLists} EmpId={Empid} Employee={data}></NameList>{" "}
      </div>
      <Form />
      <UncontrolledForm />
    </>
  );
}

export default App;
