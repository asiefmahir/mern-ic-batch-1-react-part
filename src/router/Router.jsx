import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Todos from "../pages/Todos";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Home />}/>
                <Route path ='/cart' element={<Cart />}/>
                <Route path='/todos' element={<Todos />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router