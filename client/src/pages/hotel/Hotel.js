import { LocationOnOutlined } from '@mui/icons-material'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import './hotel.css'

//App ui page that will display a single hotel page


const Hotel = () => {

  //Temporary images array just for visualization purpose
  const photos = [
    {
      src: require('../../assets/hotel1.jpg')
    },
    {
      src: require('../../assets/hotel1.jpg')
    },
    {
      src: require('../../assets/hotel1.jpg')
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

  return (
    <div>
     <Navbar/>
     <Header type='list'/>
     <div className='hotelContainer'>
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
          {photos.map(photo=>(
            <div className='hotelImageWrapper'>
              <img src={photo.src} alt='' className='hotelImg'/>
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
