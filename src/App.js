import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Orders from './pages/Orders';
import Cont from './pages/Cont';
import Products from './pages/Products';
import Submitted from './pages/Submitted';
import image1 from '../src/img/IMG_4296.jpg';



function App() {
  return (
    <div className="App">
      <Router>
      <nav className="navbar">
      <img className="img" src={image1} alt="Bakery Image 1" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/items">Items</Link></li>
          <li><Link to="/order">Order now!</Link></li>
          <li><Link to="/contact">Contact us!</Link></li>
          
        </ul>
      </nav>
        <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/order" exact element={<Orders/>}/>
        <Route path="/contact" exact element={<Cont />}/>
        <Route path="/items" exact element={<Products />}/>  
        <Route path="/submitted" element={<Submitted />} />
        </Routes>
      </Router>
      <p></p>
      <p></p>
      <footer className="foot">
      <h1>For direct order: karissasanghvi@icloud.com</h1>
      <h1>9930299410</h1>
      <h1> brûlant joie!</h1>
      </footer>
    </div>
  );
}

export default App;
