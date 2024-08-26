import React from "react";

export default function NameList(props) {
  const myLists = props.Name;
  const listItem = myLists.map((a) => <li>{a}</li>);

  const idlist = props.EmpId;
  const datalist = idlist.map((a1) => <h1>{a1}</h1>);

  const emplist = props.Employee;
  const showlist = emplist.map((item) => (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.salary}</td>
    </tr>
  ));
  return (
    <div>
      NameList
      <ul>{listItem}</ul>
      <div>{datalist}</div>
      <div>
        <table border="1" cellPadding="0" cellSpacing="0">
          <tr>
            <th>EmpId</th>
            <th>EmpName</th>
            <th>EmpSalary</th>
          </tr>
          {showlist}
        </table>
      </div>
    </div>
  );
}
