import React from "react";
import './GoldRate.css'
import Banner from "../banner/Banner";

const GoldRate = () => {

  const data  = [
    {
      name: 'John Doe',
      age: 30,
      city: 'New York',
    },
    {
      name: 'Jane Doe',
      age: 25,
      city: 'Los Angeles',
    },
  ];


  return (
    <>
    <div className="banner"><Banner/></div>

    <div className="app">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>{row.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
}

export default GoldRate