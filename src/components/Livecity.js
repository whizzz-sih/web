import './Livecity.css'


function Livecity(place,price,points) {
  return (
    <>
    <div className='packagepar'>
        <h1 className='citytitle'>Las Vegas</h1>
        <div className='citycard'>
            <div className='cardimg'>

            </div>

            <div className='cardcontent'>
<div className='cost'>
<p className='cityprice'>INR 4,999</p><p className='perhead'>per head</p>
</div>
<p className='features'>
    <h6>LIVE NOW!!!</h6>
• Time buffer 1 week<br/>• Personal guide<br/>• 360 degree virtual visit<br/>• 2 souvenir delivered to home
</p>
<div className='sizedbox'></div>
<button className='bookbtn'>book now</button>
            </div>
        </div>
    </div>
    </>

    
  )
}

export default Livecity