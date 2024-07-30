import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './Orders.css'
export default function Orders() {
    const navigate = useNavigate(); //
    const form = useRef();
    const [orderDetails, setOrderDetails] = useState({
        phone: '',
        email: '',
        name: '',
        items: [
          { itemName: '', quantity: 1 },
        ],
      });
    
      const handleInputChange = (field, value) => {
        setOrderDetails({ ...orderDetails, [field]: value });
      };
    
      const handleItemChange = (index, field, value) => {
        const updatedItems = [...orderDetails.items];
        updatedItems[index][field] = value;
        setOrderDetails({ ...orderDetails, items: updatedItems });
      };
    
      const handleAddItem = () => {
        setOrderDetails({
          ...orderDetails,
          items: [...orderDetails.items, { itemName: '', quantity: 1 }],
        });
      };

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e7s0kps', 'dmkjuja', form.current, 'tOg_hsFHTlnrjg7Wr')
          .then((result) => {
              console.log(result.text);
              navigate('/submitted');
          }, (error) => {
              console.log(error.text);
          });
        }


  return (
    <div>
     <form onSubmit={sendEmail} ref={form}>
      <div className="order-page">
      <h1>Place Your Order</h1>
      <div className="order-form">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={orderDetails.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={orderDetails.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={orderDetails.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />

        <label htmlFor="item">Item:</label>
        {orderDetails.items.map((item, index) => (
          <div key={index} className="item-row" >
            <select
              type="text"
              placeholder="Item Name"
              value={item.itemName}
              name="order"
              onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
            >
                <option>Brownie</option>
                <option>Cookie</option>
                <option>Cake</option>
            </select>
            <select
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value, 10))}
            >
              {[1, 2, 3, 4, 5].map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>+ Add Item</button>
      </div>
      <p></p>
      <button className="button2" type="submit">Place order</button>
    </div>
    </form>
     
    </div>
  )
}
