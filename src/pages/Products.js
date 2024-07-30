import React, { useEffect, useState } from 'react';
import { items } from '../firebase/config';
import './Products.css'
import ViewDetailsModal from './ViewDetailsModal';
import './ViewDetailsModal.css';
import image1 from '../img/IMG_4299.jpg';
import image2 from '../img/IMG_4297.jpg'


const foodItems = [
    {
      id: 1,
      name: 'Delicious Cupcake',
      image:image1,
      description: 'A sweet treat perfect for any occasion.',
      details:'info'
    },
    {
      id: 2,
      name: 'Tasty Cake',
      image: image2,
      description: 'Lotus Cake',
      details:'info'
    },
    // Add more food items as needed
  ];

export default function Products() {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleViewDetails = (item) => {
      setSelectedItem(item);
    };
  
    const handleCloseModal = () => {
      setSelectedItem(null);
    };      
  return (
    <div>
      
    <div className="items-page">
    <h1>Our Delicious Items</h1>
      <div className="item-list">
        {foodItems.map(item => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button onClick={()=>handleViewDetails(item)} >View Details</button>
          </div>
        
        ))}
      </div>
    </div>
    {selectedItem && (
        <ViewDetailsModal item={selectedItem} onClose={handleCloseModal} />)}
    
    <a href="/order" className="button">Order now!</a>
        
    </div>
    
  )
}
