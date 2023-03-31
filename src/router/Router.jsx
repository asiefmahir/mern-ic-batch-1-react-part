import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Posts from '../pages/Posts'
import PostDetails from '../pages/PostDetails'
import Todos from '../pages/Todos'
import Counter from '../pages/Counter'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Posts />}/>
                <Route path='/todos' element={<Todos />}/>
                <Route path='/counter' element ={<Counter />}/>
                <Route path='/posts/:postId' element ={<PostDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router