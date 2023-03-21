import './propertyList.css'
import useFetch from '../../hooks/useFetch';
import { images } from '../../data';

const PropertyList = () => {

   const url = 'http://localhost:4001/api/hotels/countbytype';

  const { data, loading } = useFetch(url)


  return (
    <div className='pList'>
       { loading ? 'Please wait...':
                <>
               <div className='plistItem'>
                <img 
                 src={images[0]}
                 alt='Hotels' 
                 className='plistImg'
                 /> 
         
               <div className='plistTitles'>
                    <h1>{data[0]?.type}s</h1>
                    <h2>{data[0]?.count} {data[0]?.type}s</h2>
                  </div>
                </div>

                <div className='plistItem'>
                <img 
                 src={images[1]}
                 alt='Hotels' 
                 className='plistImg'
                 /> 
         
               <div className='plistTitles'>
                    <h1>{data[1]?.type}s</h1>
                    <h2>{data[1]?.count} {data[1]?.type}s</h2>
                  </div>
                </div>

                <div className='plistItem'>
                <img 
                 src={images[3]}
                 alt='Hotels' 
                 className='plistImg'
                 /> 
         
               <div className='plistTitles'>
                    <h1> {data[2]?.type}s</h1>
                    <h2>{data[2]?.count} {data[2]?.type}s</h2>
                  </div>
                </div>

                <div className='plistItem'>
                <img 
                 src={images[2]}
                 alt='Hotels' 
                 className='plistImg'
                 /> 
         
               <div className='plistTitles'>
                    <h1> {data[3]?.type}s</h1>
                    <h2>{data[3]?.count}  {data[3]?.type}s</h2>
                  </div>
                </div>

                <div className='plistItem'>
                <img 
                 src={images[4]}
                 alt='Hotels' 
                 className='plistImg'
                 /> 
         
               <div className='plistTitles'>
                    <h1>{data[4]?.type}s</h1>
                    <h2>{data[4]?.count} {data[4]?.type}s</h2>
                  </div>
                </div>
                </>
        }
  
    </div>
  )
}

export default PropertyList
