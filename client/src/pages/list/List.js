
import './list.css'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns/esm';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';



 //The page will show the List of all available hotels probably in our database
const List = () => {

  const location = useLocation();

  const [date, setDate] = useState(location.state.date)
  const [destination, setDestination] = useState(location.state.destination)
  
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false)
  console.log(location)
  return (
    <div> 
     <Navbar/>
     <Header type='list'/> 
     <div className='listContainer'>
      <div className='listWrapper'>
        <div className='listSearch'>
          <h1 className='lsTitle'>Search</h1>
          <div className='lsItem'>
            <label>Destination</label>
            <input placeholder={destination} type='text'/>
          </div>

          <div className='lsItem'>
            <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}> {`${format(date[0].startDate, 'MM/dd/yyyy')} to 
                  ${format(date[0].endDate, 'MM/dd/yyyy')}`}
         </span>
           {openDate && 
              (<DateRange 
              onChange={item=>setDate([item.selection])} 
              minDate={new Date()} 
              ranges={date}
              />) }
          </div>

          <div className='lsItem'>
            <label>Options</label>

            <div className='lsOptions'>
                <div className='lsOptionItem'>
                  <span  className='lsOptionText'>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' className='lsOptionInput'/>
                </div>

                <div className='lsOptionItem'>
                  <span  className='lsOptionText'>
                    Max price 
                  </span>
                  <input type='number' className='lsOptionInput'/>
                </div>

                <div className='lsOptionItem'>
                  <span  className='lsOptionText'>
                    Adult <small>per night</small>
                  </span>
                  <input type='number' min={1} className='lsOptionInput' placeholder={options.adult}/>
                </div>

                <div className='lsOptionItem'>
                  <span  className='lsOptionText'>
                  Children
                  </span>
                  <input type='number' min={0} className='lsOptionInput' placeholder={options.children}/>
                </div>

                <div className='lsOptionItem'>
                  <span  className='lsOptionText'>
                  Room
                  </span>
                  <input type='number' min={1} className='lsOptionInput' placeholder={options.room}/>
                </div>
            </div>

          </div>
          <button>Search</button>       
        </div>
        <div className='listResult'>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </div>
      </div>
      <MailList/>
     <Footer/>
     </div>

    </div>
    
  )
}

export default List
