import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Todos from "../pages/Todos";
import Posts from "../pages/Posts";
import Notes from "../pages/Notes";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Home />}/>
                <Route path ='/cart' element={<Cart />}/>
                <Route path='/todos' element={<Todos />}/>
                <Route path='/posts' element={<Posts />}/>
                <Route path='/notes' element={<Notes />}/>


            </Routes>
        </BrowserRouter>
    )
}

export default Router