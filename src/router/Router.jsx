import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Todos from "../pages/Todos";
import Posts from "../pages/Posts";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Home />}/>
                <Route path ='/cart' element={<Cart />}/>
                <Route path='/todos' element={<Todos />}/>
                <Route path='/posts' element={<Posts />}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router