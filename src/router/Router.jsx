import { BrowserRouter, Routes, Route } from "react-router-dom"
import ComponentOne from "../pages/ComponentOne"
import ComponentTwo from "../pages/ComponentTwo"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ComponentOne />} />
            <Route path='/compo2' element={<ComponentTwo />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router