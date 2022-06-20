import './Pbody.css';
import City from './City';
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
           <img src={temp} id='pfp' alt='lmao'/>
           <h2> Cheems Gupta</h2>
           


           </center>
           <h1>Your Trip</h1>
           <div className='seelink'>      
                 <a href="#" target="blank">See all>></a>
</div>
           
     <div className='cities'>
     <City place="Venice, Italy" price="4,999" points="hehehe"/>
    <City place="Venice, Italy" price="4,999" points="hehehe"/>

    </div>
   
    <h1>Live Now</h1> 
    <div className='seelink'>      
                 <a href="#"  target="blank">See all>></a>
</div>     
     <div className='cities'>
     <City place="Venice, Italy" price="4,999" points="hehehe"/>
    <City place="Venice, Italy" price="4,999" points="hehehe"/>

    </div>
   
     <h1>WHAT'S NEW</h1> 
     <div className='seelink'>      
                 <a href="#" target="blank">See all>></a>
</div>     
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