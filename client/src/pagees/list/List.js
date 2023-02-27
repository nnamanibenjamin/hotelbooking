
import './list.css'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';



 //The page will show the List of all available hotels probably in our database
const List = () => {

  const location = useLocation();

  // const [date, setDate] = useState(location.state.date)
  // const [destination, setDestination] = useState(location.state.destination)
  
  // const [options, setOptions] = useState(location.state.options)

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
            <input type='text'/>
          </div>

          <div className='lsItem'>
            <label>Check-in Date</label>
              <span>{``}</span>
          </div>
        </div>
        <div className='listResult'></div>
      </div>

     </div>
     <Footer/>
    </div>
  )
}

export default List
