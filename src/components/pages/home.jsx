
import { NavBar } from '../navBar/navBar'
import ItemListContainer from '../itemListContainer/itemListContainer'
import Routes from '../../Routes'

function Home() {
  return (
      <div className="App">
      <header className="App-header">
          <p className='appName'>Hora Azul <br/> DoP Store</p>
        <NavBar />
        {/* <Routes/> */}
      </header>
      <ItemListContainer greeting='bienvenidxs a la tienda virtual de lxs directores de fotografía'/>
    </div> 
  );
}

export default Home;
