import './searchItem.css'
import img from '../../assets/hotel1.jpg'

const SearchItem = () => {
  return (
    <div className='searchItem'>
     <img src={img} alt='' className='siImg'/>

     <div className='siDesc'>
        <h1 className='siTitle'>New Home Hotel</h1>

        <span className='siDistance'>500m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span  className='siSubtitle'>
            Studio Apartment with air conditioning
        </span>
        <span  className='siFeatures'>
            Entire studio . 1 bathroom . 24inches wide full bed
        </span>
        <span  className='siCancelOp'>Free cancellation</span>
        <span  className='siCancelOpSubtitle'>
            You can cancel later, so lock in this great price today
        </span>
     </div>

     <div className='siDetails'>
        <div className='siRating'>
            <span>Excellent</span>
            <button>4.8</button>
        </div>

        <div className='siDetailText'>
            <span className='siPrice'>#12, 000</span>
            <span className='siDetailTips'>Includes dinner and bla bla blah</span>
            <button className='ischeckButton'>See availability</button>
        </div>

     </div>
    </div>
  )
}

export default SearchItem
