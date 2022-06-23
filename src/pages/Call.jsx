import '../components/Call.css'
import Navbarr from '../components/Navv'
import end from '../images/call/end.png'
import mic from '../images/call/mic.png'
import fullsc from '../images/call/Vector.png'
import vidon from '../images/call/video.png'

function Call (){
    return (
        
        <>
        
        <div className="callpage">
            <Navbarr/>
            <div className='videotabs'>
<div className='options'>
    <div className='optionsbox'>
        <img src={fullsc} alt="" />
    </div>
    <div className='optionsbox'>
        <img src={vidon} alt="" />
    </div>
    <div className='optionsbox'>
        <img src={mic} alt="" />
    </div>
    <div className='optionsbox'>
        <img src={end} alt="" />
    </div>

</div>
<div className='video'>

</div>
            </div>

        </div>
        </>
    )
}

export default Call