import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        
       <div className='nav-container'>
        <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
        <span className='logo'> Hotels Nigeria</span>
        </Link>
        <div className='nav-items'>
            <button className='nav-button'>Register</button>
            <button className='nav-button'>Login</button>
        </div>
       </div>
       
    </div>
  )
}

export default Navbar
