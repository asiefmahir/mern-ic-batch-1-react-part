import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import PostDetails from '../pages/PostDetails';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/posts/:postId' element={<PostDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router