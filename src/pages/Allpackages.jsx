import Navbarr from "../components/Navv";
import '../components/Allpackages.css'
import Filter from "../components/Filter";
import Allpackagetiles from "../components/Allpackagetiles";
import Searchbar from "../components/Searchbar";
import Search from "../components/Search";

function Allpackages(){
    return (
        <>
        <Navbarr/>
        
        <div className="allpackagepage">
            <br />
       <div className="pkgsearch">
       <h1>PACKAGES</h1>
       <input id='input' className="searchpkg" placeholder='🔍︎ | SEARCH FOR YOUR PLACE..' />
       </div>
     
       
<div className="packagewrapper">
    <Filter/>
    <Allpackagetiles/>
</div>
        </div>
        </>
    )
}

export default Allpackages;