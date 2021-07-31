
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
     
    </div> 
  );
}

export default Home;
