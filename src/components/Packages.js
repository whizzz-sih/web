import './Packages.css';

import City from './City';

function Packages(){
return(
    <>
    <div id='packages-parent'>
        <br></br>
    <h1>Packages</h1>
    <div className='cities'>
    <City place="Venice, Italy" price="4,999" points="hehehe"/>
    <City place="Venice, Italy" price="4,999" points="hehehe"/>

    <City place="Venice, Italy" price="4,999" points="hehehe"/>
    <City place="Venice, Italy" price="4,999" points="hehehe"/>
    </div>
    </div>
    </>
)
}

export default Packages;