import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
      <Link className='footer-content' to='/'>Gold Rates</Link>
      <Link className='footer-content' to='/bank-details'>Bank Details</Link>
      <Link className='footer-content' to='/booking-desk'>Booking Desk</Link>
    </div>
  )
}

export default Footer
