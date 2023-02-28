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

import { useNavigate} from 'react-router-dom'

//This will be our header component, that should be displaying in all pages
const Header = ({type}) => {

  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState('')

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

  const handleOption = (name, operation) => {
    setOptions(prev=> { return {
      ...prev, 
      [name]: operation === 'd' ? options[name] -- : options[name] ++
  }})
  }

  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/hotels', {state: {destination, date, options}})
  }

  return (
    <div className='header'>
        <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
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
     
        {type !== 'list' &&
           <>
                  <h1 className='headerTitle'>An amazing discount? Its a Genius!</h1>

                  <p className='headerDesc'> Book a stay over for 3days and get 10% discount</p>

                  <button className='headerBtn'>Sign In / Register</button>

                  <div className='headerSearch'>
                     <div className='headerSearchItem'>
                      <BedOutlined className='headerIcon'/>
                     <input 
                        type='text' 
                        placeholder='Search Location...' 
                        className='headerSearchInput'
                        onChange={e=>setDestination(e.target.value)}
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
                    className='date'
                    minDate={new Date()}
                  />
                 }

          </div>

          <div className='headerSearchItem'>
          <Person2Outlined className='headerIcon'/>
          <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
          {openOptions && <div className='options'>
              <div className='optionItem'>
                <span className='optionText'>Adult</span>
                <div className='optionCounter'>
                  <button 
                  disabled={options.adult <=1}
                  className='optionCountBtn' 
                  onClick={()=>handleOption('adult', 'd')}
                  >
                    -
                  </button>
                  <span className='optionCountNum'>{options.adult}</span>
                  <button 
                  className='optionCountBtn' 
                  onClick={()=>handleOption('adult', 'i')}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className='optionItem'>
                <span className='optionText'>Children</span>
                <div className='optionCounter'>
                  <button disabled={options.children <=0} className='optionCountBtn' onClick={()=>handleOption('children', 'd')}>-</button>
                  <span className='optionCountNum'>{options.children}</span>
                  <button className='optionCountBtn' onClick={()=>handleOption('children', 'i')}>+</button>
                </div>
              </div>

              <div className='optionItem'>
                <span className='optionText'>Room</span>
                <div className='optionCounter'>
                    <button disabled={options.room <=1} className='optionCountBtn' onClick={()=>handleOption('room', 'd')}>-</button>
                    <span className='optionCountNum'>{options.room}</span>
                    <button className='optionCountBtn' onClick={()=>handleOption('room', 'i')}>+</button>
                </div>    
          
              </div>
          </div>}
          </div>
          

          <div className='headerSearchItem'>
          <button className='headerBtn' onClick={handleSearch}>SEARCH</button>
          </div>
      </div>
           </>
        }
        
      </div>
    </div>
  )
}

export default Header
