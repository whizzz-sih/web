
import './Navv.css'
import logo from '../images/logo.png'
import { scroller } from "react-scroll";




function Navbarr(){
 function scrollToHome () {
   document.getElementById('home').style.fontWeight = 700;
   document.getElementById('packages').style.fontWeight = 400;
   document.getElementById('offer').style.fontWeight = 400;
   document.getElementById('about').style.fontWeight = 400;
    scroller.scrollTo('search-parent', {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  function scrollToOffer () {
    document.getElementById('home').style.fontWeight = 400;
    document.getElementById('packages').style.fontWeight = 400;
    document.getElementById('offer').style.fontWeight = 700;
    document.getElementById('about').style.fontWeight = 400;
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  function scrollToPackages () {
    document.getElementById('home').style.fontWeight = 400;
    document.getElementById('packages').style.fontWeight = 700;
    document.getElementById('offer').style.fontWeight = 400;
    document.getElementById('about').style.fontWeight = 400;
    scroller.scrollTo('packages-parent', {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",

    });
  };
  function scrollToAbout () {
    document.getElementById('home').style.fontWeight = 400;
    document.getElementById('packages').style.fontWeight = 400;
    document.getElementById('offer').style.fontWeight = 400;
    document.getElementById('about').style.fontWeight = 700;
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",

    });
  };
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
    <a onClick={ scrollToHome} className='navtext' id='home'>HOME</a>
    <a onClick={ scrollToPackages} className='navtext' id='packages'>PACKAGES</a>
    <a onClick={scrollToOffer} className='navtext' id='offer'>WHAT DO WE OFFER?</a>
    <a onClick={scrollToAbout} className='navtext' id='about'>ABOUT US</a>
  </div>
</div>
    </>
  )
}

export default Navbarr