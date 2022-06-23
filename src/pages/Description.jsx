import Frontinfo from "../components/Frontinfo";
import Navbarr from "../components/Navv";
import '../components/Description.css'
import Whatyouget from "../components/Whatyouget";

function Description(){

    var citydesc = 'Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs.'
    return (
        <>
      <Navbarr/>
    <div className="liveparent">
<Frontinfo/>

<p style={{margin: '3rem'}}>{citydesc}</p>

<Whatyouget/>
<br></br>
<center>
<button className="proceedpayment">PROCEED TO PAYMENT</button></center>
    <br></br>
    </div>

        </>
    )
}

export default Description;