import React from 'react'
import './placeOrder.css'

const PlaceOrder = () => {
  return (
   <form className='place-order'>
    <div className="place-order-left">
    <p className="title">Delivery information</p>
    <div className="multi-fields">
      <input type="text"  placeholder='First name'/>
      <input type="text"  placeholder='Last name' />
    </div>
    <input type="email" placeholder='Email address' />
    <input type="text"  placeholder='Street'/>
    <div className="multi-fields">
    <input type="email" placeholder='city' />
    <input type="text"  placeholder='State'/>
    </div>
    <input type="email" placeholder='zip-code' />
    <input type="text"  placeholder='Country'/>
    </div>
    <input type="text"  placeholder='Phone'/>
    <div className="place-order-right">

    </div>
   </form>
  )
}

export default PlaceOrder