'use client'
import React, { useState } from 'react';  
import { Star } from 'lucide-react';  

const Rating = ({ initialRating = 0 }) => {  
  const [rating, setRating] = useState(initialRating);  

  const handleMouseEnter = (index) => {  
    setRating(index);  
  };  

  const handleMouseLeave = () => {  
    setRating(initialRating);  
  };  

  const handleClick = (index) => {  
    setRating(index);  
    console.log('Index: ', index); // {the backend} Call the onRate function passed as a prop  
  };  

  return (
    <div className='flex gap-3 items-center py-2'>  
    <div className='flex gap-1 cursor-pointer'>  
      {[1, 2, 3, 4, 5].map((starValue) => ( 
        
        <div  
          key={starValue}  
          onMouseEnter={() => handleMouseEnter(starValue)}  
          onMouseLeave={handleMouseLeave}  
          onClick={() => handleClick(starValue)}  
        >  
          <Star  
            fill={starValue <= rating ? '#F8E329' : '#f5f7c8'}  
            stroke="black"  
            strokeWidth={0}  
            size={24} // Adjust the size as needed  
          />  
        </div>  
      ))}
    </div>  
      <h1 className='text-sm text-[#5C5C5C]'>(2000+ Reviews)</h1>
    </div>
  );  
};  

export default Rating;