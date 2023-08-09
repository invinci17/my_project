import React from 'react'
import './BookingDesk.css'

const BookingDesk = () => {
  return (
    <div className='booking-desk-main'>
      <h2>BOOKING DESK</h2>
      <div className='booking-container'>
        <div className='booking-details-row'>
          <img className='booking-image' src='./favicon.ico' alt='no image' />
          <span className='booking-details'>Main Road Sirsaganj</span>
        </div>
        <div className='booking-details-row'>
          <img className='booking-image' src='./favicon.ico' alt='no image'/>
          <span className='booking-details'>Main Road </span>
        </div>
        <div className='booking-details-row'>
          <img className='booking-image' src='./favicon.ico' alt='no image'/>
          <span className='booking-details'>Main </span>
        </div>
        <div className='booking-details-row'>
          <img className='booking-image' src='./favicon.ico' alt='no image'/>
          <span className='booking-details'>Main Road dsafdsfsdf</span>
        </div>

      </div>
    </div>
  )
}

export default BookingDesk