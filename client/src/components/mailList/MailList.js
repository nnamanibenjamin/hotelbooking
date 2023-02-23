import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save Time, save money,send us a mail!</h1>
      <span className='mailDesc'>Sign up and we will send you the best deals for you</span>

      <div className='mailInputContainer'>
        <input type='text' placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
