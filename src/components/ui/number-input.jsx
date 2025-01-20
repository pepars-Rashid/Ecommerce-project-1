// components/NumberInput.js  
import { Minus, Plus } from 'lucide-react';  
import React from 'react';  

const NumberInput = ({ value, onChange }) => {  
  // Ensure value is a number or default to 1  
  const currentValue = value !== undefined ? value : 1;  

  const increment = () => {  
    onChange(currentValue + 1);  // Call onChange with the incremented value  
  };  

  const decrement = () => {  
    if (currentValue > 1) {  
      onChange(currentValue - 1);  // Call onChange with the decremented value  
    }  
  };  

  return (  
    <div className="w-fit flex items-center border border-[#F2F2F2] rounded-full p-1 bg-gray-100 overflow-hidden">  
      <button  
        type="button"  // Avoid form submission on button click  
        onClick={decrement}  
        className="rounded-full flex items-center justify-center text-gray-700 bg-white border-r focus:outline-none hover:bg-gray-200"  
      >  
        <Minus size={22}/>   
      </button>  
      <input  
        type="text"  // Change to number input for better data handling  
        value={currentValue}  
        onChange={(e) => onChange(Number(e.target.value) || 0)} // Update value on direct input 
        readOnly 
        className="w-9 text-center border-none outline-none bg-gray-100"  
      />  
      <button  
        type="button"  // Avoid form submission on button click  
        onClick={increment}  
        className="rounded-full flex items-center justify-center text-gray-700 bg-white border-l focus:outline-none hover:bg-gray-200"  
      >  
        <Plus size={22}/>   
      </button>  
    </div>  
  );  
};  

export default NumberInput;