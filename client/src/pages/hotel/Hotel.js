import { ArrowLeftOutlined, ArrowRightOutlined, CancelOutlined, LocationOnOutlined, } from '@mui/icons-material'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
import './hotel.css'

//App ui page that will display a single hotel page


const Hotel = () => {

  //Temporary images array just for visualization purpose
  const photos = [
    {
      src: require('../../assets/hotel1.jpg')
    },
    {
      src: require('../../assets/hotel.jpg')
    },
    {
      src: require('../../assets/hotel2.jpg')
    },
    {
      src: require('../../assets/hotel1.jpg')
    },
    {
      src: require('../../assets/hotel1.jpg')
    },
    {
      src: require('../../assets/hotel1.jpg')
    }
  ]

  const [slideNumber, setSlideNumber] = useState(0)

  const [open, setOpen] = useState(false)

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === 'l'){
      newSlideNumber = slideNumber === 0 ? 5: slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0: slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
     <Navbar/>
     <Header type='list'/>
     <div className='hotelContainer'>

      {open && <div className='slider'>
          <CancelOutlined className='close' onClick={()=>setOpen(false)}/>
          <ArrowLeftOutlined className='arrow' onClick={()=>handleMove('l')}/>

          <div className='sliderWrapper'>
            <img src={photos[slideNumber].src} alt='' className='sliderImg' />
          </div>
          <ArrowRightOutlined className='arrow'  onClick={()=>handleMove('r')}/>
      </div>}

       <div className='hotelWrapper'>
        <button className='bookNow'>Book Now!</button>
        <h1 className='hotelTitle'>New Home Hotel</h1>

        <div className='hotelAddress'>
          <LocationOnOutlined />
          <span>20 Paul's Street, Ajah</span>
        </div>
        <span className='hotelDistance'>
          Excellent location, 10mins drive from airport
        </span>
        <span className='hotelPriceHighlight'>
          Book a stay over for 3days and get 10% discount
        </span>

        <div className='hotelImages'>
          {photos.map((photo, i)=>(
            <div className='hotelImageWrapper'>
              <img src={photo.src} onClick={()=>handleOpen(i)} alt='' className='hotelImg'/>
            </div>
          ))}
        </div>

            <div className='hotelDetails'>
              <div className='hotelDetailsText'>
                <h1 className='hotelTitle'>Comfort and relaxation</h1>
                <p className='hotelDesc'>
                Excellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportvvExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airportExcellent location, 10mins drive from airport 
                </p>
              </div>

              <div className='hotelDetailsPrice'>
                <h1>Perfect for a night stay</h1>
                <span>
                  Our clients are happy, award of any bla bla blah 
                </span>
                <h2>
                  <span><b>#12, 000 </b><small>per night</small></span>
                </h2>

                <button>Book Now!</button>
              </div>
            </div>
       </div>
       <MailList/>
     <Footer/>
     </div>
  
    </div>
  )
}

export default Hotel
