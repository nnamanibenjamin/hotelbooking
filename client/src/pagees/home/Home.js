import Featured from '../../components/featured/Featured'
import FeaturedProp from '../../components/featuredProp/FeaturedProp'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
        <Featured/>
        <h1 className='homeTitle'>Browse by type</h1>
        <PropertyList/>
        <h1 className='homeTitle'>Home guest love </h1>
        <FeaturedProp/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
