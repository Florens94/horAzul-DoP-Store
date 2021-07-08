import React, {useState, useEffect } from 'react';
import './itemCount.css'

function ItemCount() {

    const [count, setCount] = useState(1);

useEffect(() => { 
  if(count<1) {
    setCount(1)
  } else {
    if(count>10)
    {setCount(10)
    }
}
}, [count]);

  return (
    <div>
        <button className='count' onClick={()=> setCount(count - 1)}> - </button>
      <p className='cuantity'>Añadir {count} de este producto</p>
      <button className='count' onClick={() => setCount(count + 1)}> + </button>
      
  

    </div>
  );
}

export default ItemCount;
