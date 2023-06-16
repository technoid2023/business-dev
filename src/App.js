// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Home from './component/Home';
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';
import Product from './component/Product';
import Contactus from './component/Contactus';
import Client from './component/Client';
import Quote from './component/Quote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='contact' element={<Contactus/>}/>
        <Route path='client' element={<Client/>}/>
        <Route path='quote' element={<Quote/>}/>
      </Routes>
    </Router>
  );
}

export default App;
