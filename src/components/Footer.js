import './Footer.css'
import yt from '../images/social/youtube.svg'
import fb from '../images/social/facebook.svg'
import gm from '../images/social/gmail.svg'
import ig from '../images/social/instagram.svg'
function Footer(){
    return (
        <>
        <div className='footer'>
            <p>WHIZZZ</p>
            <p className='desc'>
            A project for Smart India Hackathon 2022, under the college University<br/>School of Information, Communication and Technology, New Delhi
            </p>
            <p className='copyright'>
            © copyright 2022
            </p>
            <div className='socialicons'>
<img src={yt}/>
<img src={gm}/>
<img src={ig}/>
<img src={fb}/>
            </div>
        </div>
        </>
    )
}

export default Footer;