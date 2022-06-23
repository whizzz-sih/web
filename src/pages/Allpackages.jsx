import Navbarr from "../components/Navv";
import '../components/Allpackages.css'
import Filter from "../components/Filter";
import Allpackagetiles from "../components/Allpackagetiles";

function Allpackages(){
    return (
        <>
        <Navbarr/>
        <div className="allpackagepage">
<div className="packagewrapper">
    <Filter/>
    <Allpackagetiles/>
</div>
        </div>
        </>
    )
}

export default Allpackages;