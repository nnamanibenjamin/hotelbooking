import './featuredProp.css'
import img from '../../assets/hotel1.jpg'
import useFetch from '../../hooks/useFetch';


const FeaturedProp = () => {

  const url = 'http://localhost:4001/api/hotels?featured=true';

  const { data, loading } = useFetch(url)

  return (
    <div className='fp'>

    { loading ? 'Please wait...' : (
      <>
    
              <div className='fpItem'>
                 <img 
                   src={img}
                   alt='Featured Hotel' 
                   className='fpImage'
                  />
        
                  <span className='fpName'>{data[0]?.name}</span>
                  <span className='fpCity'>{data[0]?.city}</span>
                  <span className='fpPrice'>Amazing rooms for ${data[0]?.cheapestPrice} per night</span>
        
             {data?.rating && <div className='fpRating'>
                <button>4.8</button>
                <span >Excellent</span>
              </div>}
            </div>

            <div className='fpItem'>
                 <img 
                   src={img}
                   alt='Featured Hotel' 
                   className='fpImage'
                  />
        
                  <span className='fpName'>{data[1]?.name}</span>
                  <span className='fpCity'>{data[1]?.city}</span>
                  <span className='fpPrice'>Amazing rooms for ${data[1]?.cheapestPrice} per night</span>
        
             {data?.rating &&  <div className='fpRating'>
                <button>4.8</button>
                <span >Excellent</span>
              </div>}
            </div>

            <div className='fpItem'>
                 <img 
                   src={img}
                   alt='Featured Hotel' 
                   className='fpImage'
                  />
        
                  <span className='fpName'>{data[2]?.name}</span>
                  <span className='fpCity'>{data[2]?.city}</span>
                  <span className='fpPrice'>Amazing rooms for #10k per night</span>
        
             {data?.rating &&  <div className='fpRating'>
                <button>4.8</button>
                <span >Excellent</span>
              </div>}
            </div>

            <div className='fpItem'>
                 <img 
                   src={img}
                   alt='Featured Hotel' 
                   className='fpImage'
                  />
        
                  <span className='fpName'>{data[3]?.name}</span>
                  <span className='fpCity'>{data[3]?.city}</span>
                  <span className='fpPrice'>Amazing rooms for #10k per night</span>
        
              {data?.rating &&  <div className='fpRating'>
                <button>4.8</button>
                <span >Excellent</span>
              </div>}
            </div>
     
      </>
    )}
    </div>
  )
}

export default FeaturedProp
