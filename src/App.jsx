import { NavBar } from "./component/NavBar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import { Products } from "./Pages/Products"
import { Cart } from "./Pages/cart"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import Footer from "./component/Footer";
import { SingleProduct } from "./Pages/SingleProduct"
import { CategoryProduct } from "./Pages/CategoryProduct"
import { useCart } from './Context/cartContext'
import { useEffect } from "react"
import { ProtectedRoute } from "./component/ProtectedRoute"


function App() {
  const {cartitem,setCartItem}=useCart();
 
 useEffect(() => {
    const storedCart = localStorage.getItem('cartitem')
    if(storedCart){
      setCartItem(JSON.parse(storedCart))
    }
  }, []);

  //save cart to local storage whenever it changes
  useEffect(() => {
    if(cartitem?.length>0){
    localStorage.setItem('cartitem', JSON.stringify(cartitem))
    }
    if(cartitem.length==0){
      localStorage.clear();
    }
  }, [cartitem])
  return (
    <div >
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/Products" element={<Products/>}/>
      <Route path="/Products/:id" element={<SingleProduct/>}/>
      <Route path="/category/:category" element={<CategoryProduct/>}/>
      {/* <Route  path="/Cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/> */}
      <Route path='/cart' element={<ProtectedRoute>
          <Cart/>
        </ProtectedRoute>}/>
      <Route  path="/About" element={<About/>}/>
      <Route  path="/Contact" element={<Contact/>}/>
      
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
