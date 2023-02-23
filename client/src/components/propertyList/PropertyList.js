import './propertyList.css'
import img from '../../assets/hotel2.jpg'

const PropertyList = () => {
  return (
    <div className='pList'>
       <div className='plistItem'>
          <img 
          src={img} 
          alt='Hotels' 
          className='plistImg'
          /> 

      <div className='plistTitles'>
           <h1>Hotels</h1>
           <h2>710 hotels</h2>
         </div>
       </div> 
    

       <div className='plistItem'>
          <img 
          src={img} 
          alt='Apartments' 
          className='plistImg'
          /> 

          <div className='plistTitles'>
            <h1>Apartments</h1>
            <h2>2330 apartments</h2>
           </div>
       </div>


       <div className='plistItem'>
          <img 
          src={img} 
          alt='Resorts' 
          className='plistImg'
          /> 

          <div className='plistTitles'>
            <h1>Resorts</h1>
            <h2>1050 resorts</h2>
           </div>
       </div>


       <div className='plistItem'>
          <img 
          src={img} 
          alt='Cabins' 
          className='plistImg'
          /> 

          <div className='plistTitles'>
            <h1>Cabins</h1>
            <h2>910 cabins</h2>
           </div>
       </div>
   

       <div className='plistItem'>
          <img 
          src={img} 
          alt='Villa' 
          className='plistImg'
          /> 

         <div className='plistTitles'>
            <h1>Villa</h1>
            <h2>130 villa</h2>
          </div>
       </div>
  
    </div>
  )
}

export default PropertyList
