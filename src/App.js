
import './App.css';
import { Products } from './components/ProductsDashboard';
import { SingleProductList } from './components/SingleProduct';

function App() {
  return (
    <div className="App">
         <Products/>

         <SingleProductList/>
    </div>
  );
}

export default App;
