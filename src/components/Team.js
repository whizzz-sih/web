import './Team.css'
import gmail from '../images/gmail.png'
import temp from '../images/temp.png'




function Team(username, pfp, email){
    return (
        <>
        <div className='contactcard'>
<div className='photo'>
<img src={temp} id='pfp' alt='lmao'/>
</div>
<div className='bottomdisp'>
<p className='username'>{username.name}</p>
<img src={gmail} className="gmail" onClick={() => window.location = 'mailto:'+{email}}/>
</div>
        </div>
        </>
    )
}

export default Team;