
import './App.css'
import Body from './components/body'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "../src/components/Cart"


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  )
}



export default App
