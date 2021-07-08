
import './App.css';
import {NavBar} from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p className='appName'>Hora Azul <br/> DoP Store</p>
        <NavBar />
      </header>
      <ItemListContainer greeting='bienvenidxs a la tienda virtual de lxs Directors of Photography'/>
    </div>
  );
}

export default App;
