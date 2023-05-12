import {Link} from 'react-router-dom';


const Nav = () => {
  return (
    <ul>
        <li>
            <Link to="/">ComponentOne</Link>
            <Link to='/compo2'>ComponentTwo</Link>
        </li>
    </ul>
  )
}

export default Nav