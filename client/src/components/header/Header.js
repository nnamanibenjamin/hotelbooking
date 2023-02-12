import { AirportShuttle, 
  AttractionsSharp, 
  BedOutlined, 
  CalendarMonthOutlined, 
  CarRentalOutlined, 
  FlightOutlined, 
  Person2Outlined 
} from '@mui/icons-material'
import './header.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {useState} from 'react'
import {format} from 'date-fns'

//This will be our header component, that should be displaying in all pages
const Header = () => {

  const [openDate, setOpenDate] = useState(false)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false)

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })
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
      <h1 className='headerTitle'>An amazing discount? Its a Genius!</h1>

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
          <span 
          className='headerSearchText'
          onClick={()=>setOpenDate(!openDate)}
          >
            {`${format(date[0].startDate, 'MM/dd/yyyy')} to 
            ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </span>
            {
              openDate &&  <DateRange
              editableDataInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date '
            />
            }

          </div>

          <div className='headerSearchItem'>
          <Person2Outlined className='headerIcon'/>
          <span className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
          <div className='options'>
              <div className='optionItem'>
                <span className='optionText'>Adult</span>
                <button className='optionCountBtn'>+</button>
                <span className='optionCountNum'>1</span>
                <button className='optionCountBtn'>-</button>
              </div>

              <div className='optionItem'>
                <span className='optionText'>Children</span>
                <button className='optionCountBtn'>+</button>
                <span className='optionCountNum'>0</span>
                <button className='optionCountBtn'>-</button>
              </div>

              <div className='optionItem'>
                <span className='optionText'>Room</span>
                <button className='optionCountBtn'>+</button>
                <span className='optionCountNum'>1</span>
                <button className='optionCountBtn'>-</button>
              </div>
          </div>
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
