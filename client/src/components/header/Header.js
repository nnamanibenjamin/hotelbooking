import { AirportShuttle, AttractionsSharp, BedOutlined, CalendarMonthOutlined, CarRentalOutlined, FlightOutlined, Person2Outlined } from '@mui/icons-material'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerContainer'>
      <div className='headerList'>
        <div className='headerListItem active'>
          <BedOutlined/>
          <span>Stays</span>
         </div>

         <div className='headerListItem'>
          <FlightOutlined/>
          <span>Flight</span>
         </div>

         <div className='headerListItem'>
          <CarRentalOutlined/>
          <span>Car rentals</span>
         </div>

         <div className='headerListItem'>
          <AttractionsSharp/>
          <span>Attractions</span>
         </div>

         <div className='headerListItem'>
          <AirportShuttle/>
          <span>Airport taxis</span>
         </div>
      </div>
      <h1 className='headerTitle'>A lifetime of discount? Its a Genius!</h1>

      <p className='headerDesc'>Get an amazing 20% discount for loungue above 3 days!!!</p>

      <button className='headerBtn'>Sign In / Register</button>

      <div className='headerSearch'>
          <div className='headerSearchItem'>
          <BedOutlined className='headerIcon'/>
          <input 
          type='text' 
          placeholder='Search Location...' 
          className='headerSearchInput' 
          />
          </div>

          <div className='headerSearchItem'>
          <CalendarMonthOutlined className='headerIcon'/>
          <spam className='headerSearchText'>Check in date</spam>
          </div>

          <div className='headerSearchItem'>
          <Person2Outlined className='headerIcon'/>
          <span className='headerSearchText'>VIP Rooms</span>
          </div>

          <div className='headerSearchItem'>
          <button className='headerBtn'>SEARCH</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Header
