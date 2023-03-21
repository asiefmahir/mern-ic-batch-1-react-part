import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Boards from '../pages/Boards';
import BoardDetails from '../pages/BoardDetails';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Boards />}/>
                <Route path='/boards/:boardId' element = {<BoardDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router