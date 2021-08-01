import React from 'react';
import './itemCount.css'

const ItemCount = ({initial, stock, count, setCount}) => {

  const add = () => {
    count < stock && setCount(count + 1)
  }

  const remove = () => {
    count > initial && setCount(count - 1)
  }


return (

  <div>
      <button className='count' onClick={remove} disabled={count === initial}> - </button>
    <p className='cuantity'>Añadir {count} de este producto</p>
    <button className='count' onClick={add} disabled={count === stock}> + </button>
  </div>
);


// function ItemCount ({stock, initial}) {

//     const [count, setCount] = useState(initial);

//   const add = () => {
//     count < stock && setCount(count + 1);
//   };
//   const remove = () => {
//     count > initial && setCount(count-1);
//   };




// useEffect(() => { 
//   if(count<1) {
//     setCount(1)
//   } else {
//     if(count>10)
//     {setCount(10)
//     }
// }
// }, [count]);

  // return (
  //   <div>
  //       <button className='count' onClick={()=> setCount(count - 1)}> - </button>
  //     <p className='cuantity'>Añadir {count} de este producto</p>
  //     <button className='count' onClick={() => setCount(count + 1)}> + </button>
      
  

  //   </div>
  // );
}

export default ItemCount;
