
export const Item = (lenses) => (
  
    <div>
        <h3>{lenses.id}</h3>
        <h2>{lenses.name}</h2>
        <p>{lenses.detail}</p>
        <h3>{lenses.price}</h3>
        <img src={lenses.img} alt={lenses.name}/>
    </div> 
   
   )