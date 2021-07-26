
import './App.css';
import { NavBar } from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetail from './components/itemDetail/itemDetail'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/home'
import Buttons from './components/buttons'
import {Category} from './components/pages/category'



function App() {
  return (
    <BrowserRouter>
    <Switch>
    {/* <NavBar /> */}
    <Route exact path="/">
      <Home/>
    </Route>
    {/* <Route path='/category/:categoryName'>
          <Category/>
        </Route> */}

    <Route path="/category/:catId">
      <ItemDetail/>
     
    </Route>
    {/* <div className="App">
      <header className="App-header">
          <p className='appName'>Hora Azul <br/> DoP Store</p>

      </header>
      <ItemListContainer greeting='bienvenidxs a la tienda virtual de lxs Directors of Photography'/>
    </div>  */}
    </Switch>


    </BrowserRouter>
  );
}

export default App;
