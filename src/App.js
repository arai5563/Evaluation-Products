
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Products } from './components/ProductsDashboard';
import { SingleProductList } from './components/SingleProduct';

function App() {
  return (
    <div className="App">
         <Router>
        <div>
         <Routes>
            
           <Route path='/' element={<Home/>} />

           <Route path='/about' element={<About/>} />

          <Route path='/Product' element={<Products/>} />
             
          </Routes>
        </div>

        <div>
        <Products/>
        </div>
      </Router>
    </div>
  );
}

export default App;
