import Frontinfo from "../components/Frontinfo";
import Navbarr from "../components/Navv";
import '../components/Live.css'
import Guide from "../components/Guide";
import Souvenirs from "../components/Souvenirs";
import Tourvideos from "../components/Tourvideos";


function Live(){
return (
    <>
    <Navbarr/>
    <div className="liveparent">
<Frontinfo/>
<Guide/>
<br></br><br></br>
<Souvenirs/>
<br></br><br></br>
<Tourvideos/>
<br /><br /><br /><br />


    </div>
    </>
)
}

export default Live;