import './Pbody.css';
import City from './City';
import Dedcity from './Dedcity';
import Livecity from './Livecity';
import Pbox from './Pbox';
import temp from '../images/temp.png'

function Pbody() {
  return (
    <>
    <div className='Pbody'>    
         <h1>PROFILE</h1>
     <div id="btn-profile"> <button type="button" class="btn btn-dark">edit profile</button>
       </div>
       <div className='Pdetails'>
           <center>
           <img  src={temp} id='pfp' alt='lmao'/>
           <h2 className='Pname'> Cheems Singla</h2>
           <div className="detailbox">
            <Pbox trip="3" spent="15k" saved="lol"/>
           </div>
           


           </center>
           <br/><br/>
           <h1>Your Trip</h1>
       
           
     <div className='cities'>
     <Dedcity place="Kasol,India" price="4,999" points="hehehe"/>
    <Dedcity place="Kasol, India" price="4,999" points="hehehe"/>

    </div>
   
    <h1>Live Now</h1> 
    
     <div className='cities'>
     <Livecity place="Las Vegas,Usa" price="9,999" points="hehehe"/>
    <Livecity place="Las Vegas,Usa" price="9,999" points="hehehe"/>

    </div>
   
     <h1>WHAT'S NEW</h1> 
        
     <div className='cities'>
     <City place="Venice, Italy" price="4,999" points="hehehe"/>
    <City place="Venice, Italy" price="4,999" points="hehehe"/>

    </div>
   
       </div>
    </div>

    </>
  )
}

export default Pbody;