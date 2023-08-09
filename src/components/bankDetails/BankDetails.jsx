import React from 'react'
import './BankDetails.css'

const BankDetails = () => {
  const data  = [
    {
      left: 'Name',
      right: 'Durga Jewellers'
    },
    {
      left: 'A/C No',
      right: '1234567890'
    },
    {
      left: 'IFSC Code',
      right: 'ABCD12345'
    },
    {
      left: 'Branch',
      right: 'HDFC BANK SIRSAGANJ'
    },
    {
      left: 'Bank',
      right: 'HDFC BANK LTD'
    }
  ];

  return (
    <>
      <div className='bank-main'>
        <h2> BANK DETAILS </h2>
        <div className='bank-details-image' >
        <img className='bank-details' src='./favicon.ico' alt='No Image'/></div>
        <table className='bank-details'>
      <tbody>
        {data.map((row)=>(
        <tr className='bank-details'>
          <td className='bank-details'>{row.left}</td>
          <td className='bank-details'>{row.right}</td>        
        </tr>
        ))}

      </tbody>
    </table>
      </div>
    </>
  )
}

export default BankDetails;