import { Link } from 'react-router-dom';

export default function Navbar () {

    return (

<nav>
    <div className='nav-container'>
    <Link to="/">home</Link>
    &nbsp; | &nbsp;
    <Link to="/availabilities">vacancies</Link>
    &nbsp; | &nbsp;
    <Link to="/dashboard">dashboard</Link>
    &nbsp; | &nbsp;
    <Link to="/cart">🛒</Link>
    </div>

</nav>   
 )
}