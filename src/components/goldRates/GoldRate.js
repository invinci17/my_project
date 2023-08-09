import React from "react";
import './GoldRate.css'
import Banner from "../banner/Banner";

const GoldRate = () => {

  const data  = [
    {
      product: 'Gold 24CT 1 GM',
      buy: '-',
      sell: '6120',
    },
    {
      product: 'Gold 24CT 5 GM',
      buy: '-',
      sell: '30600',
    },
    {
      product: 'Gold 24CT 10 GM',
      buy: '-',
      sell: '61200',
    }
  ];


  return (
    <>
    <div className="banner"><Banner/></div>

    <div className="app">
    <table>
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>BUY</th>
          <th>SELL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.product}</td>
            <td>{row.buy}</td>
            <td>{row.sell}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
}

export default GoldRate