
import './Navv.css'
import logo from '../images/logo.png'

function Navbarr(){
  return (
    <>
      <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      <img src={logo} className='navlogo'/>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="//github.io/jo_geek" target="_blank">HOME</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">PACKAGES</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">WHAT DO WE OFFER?</a>
    <a href="https://codepen.io/jo_Geek/" target="_blank">ABOUT US</a>
  </div>
</div>
    </>
  )
}

export default Navbarr