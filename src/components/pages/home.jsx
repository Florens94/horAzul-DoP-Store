
import { NavBar } from '../navbar/navBar'
import ItemListContainer from '../itemListContainer/itemListContainer'


function Home() {
  return (
      <div className="App">
      <header className="App-header">
          <p className='appName'>Hora Azul <br/> DoP Store</p>
        <NavBar />
      </header>
     <ItemListContainer/>
    </div> 
  );
}

export default Home;
