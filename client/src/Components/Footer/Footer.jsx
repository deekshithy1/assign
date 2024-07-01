import React from 'react'
import arrow from '../../Assets/Vector.png'
import '../Footer/Footer.css'
const Footer = () => {
  return (
<footer>
    <div className='footer1'>
  <form action="/askquestion" className='form1'>
        <input type="text"   className='inputf' placeholder='send a message'/>
       <button type='submit'><img src={arrow} alt="" /></button>
       </form>
       
    </div>
</footer>
  )
}

export default Footer