import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Login from './Login/Login';
import Product from './Product/Product';
import Purchase from './Purchase/Purchase';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Product" element={<Product/>}/>
      <Route path="/Purchase" element={<Purchase/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
