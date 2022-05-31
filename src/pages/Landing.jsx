import About from '../components/About.js';
import  Carousel  from '../components/Carousel.js';
import Footer from '../components/Footer.js';
import Navbarr from '../components/Navv.js';
import Packages from '../components/Packages.js';
import Search from '../components/Search.js'


function Landing(){
    
    return (
        <>
         <Navbarr/>
        <Search/>
        <Packages/>
        <Carousel/>
        <About/>
        <Footer/>
        </>
    )
}

export default Landing;