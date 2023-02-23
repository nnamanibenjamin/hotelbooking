import './featuredProp.css'
import img from '../../assets/hotel1.jpg'


const FeaturedProp = () => {
  return (
    <div className='fp'>
    <div className='fpItem'>
        <img 
      src={img}
      alt='Featured Hotel' 
      className='fpImage'
      />

        <span className='fpName'>Eko hotels & suits</span>
        <span className='fpCity'>Lagos</span>
        <span className='fpPrice'>Amazing room for #10k per night</span>

      <div className='fpRating'>
        <button>4.8</button>
        <span>Excellent</span>
       </div>
    </div>

    <div className='fpItem'>
        <img 
      src={img}
      alt='Featured Hotel' 
      className='fpImage'
      />

        <span className='fpName'>Eko hotels & suits</span>
        <span className='fpCity'>Lagos</span>
        <span className='fpPrice'>Amazing room at #10k per night</span>

      <div className='fpRating'>
        <button>4.8</button>
        <span>Excellent</span>
       </div>
    </div>

    <div className='fpItem'>
        <img 
      src={img}
      alt='Featured Hotel' 
      className='fpImage'
      />

        <span className='fpName'>Eko hotels & suits</span>
        <span className='fpCity'>Lagos</span>
        <span className='fpPrice'>Amazing room for #10k per night</span>

      <div className='fpRating'>
        <button>4.8</button>
        <span>Excellent</span>
       </div>
    </div>

    <div className='fpItem'>
        <img 
      src={img}
      alt='Featured Hotel' 
      className='fpImage'
      />

        <span className='fpName'>Eko hotels & suits</span>
        <span className='fpCity'>Lagos</span>
        <span className='fpPrice'>Amazing rooms for #10k per night</span>

      <div className='fpRating'>
        <button>4.8</button>
        <span >Excellent</span>
       </div>
    </div>
    </div>
  )
}

export default FeaturedProp
