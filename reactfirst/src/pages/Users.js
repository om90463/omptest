
import React, { useState } from 'react';

function Car(props){
  return <h2>I am a { props.brand.name }</h2>
}

function User() {
    const [data, setData] = useState(null);

    let Carinfo = {name:"auoddy", module: "matarg"};
  
    function handleClick() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://127.0.0.1:8000/api/auth');
      xhr.onload = function() {
        if (xhr.status === 200) {
          setData(JSON.parse(xhr.responseText));
        }
      };
      xhr.send();
    }
  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
      <Car brand = {Carinfo}> </Car>
      {console.log(data)}
      {data.map(item => <li key={item.id}>{item.name}</li>)}
    <table>
      <thead>
        <tr>
          {data.map((column) => (
            <th key={column.key}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {data.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default User;
