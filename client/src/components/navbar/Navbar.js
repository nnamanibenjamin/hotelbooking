import './navbar.css'
import {HotelRounded} from '@mui/icons-material'


const Navbar = () => {
  return (
    <div className='navbar'>
        
       <div className='nav-container'>
        <span className='logo'> Hotels Nigeria</span>
        <div className='nav-items'>
            <button className='nav-button'>Register</button>
            <button className='nav-button'>Login</button>
        </div>
       </div>
       
    </div>
  )
}

export default Navbar
