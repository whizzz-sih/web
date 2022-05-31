import './City.css'


function City(place, price, points){
return (
    <>
    <div className='packagepar'>
        <h1 className='citytitle'>VENICE</h1>
        <div className='citycard'>
            <div className='cardimg'>

            </div>

            <div className='cardcontent'>
<div className='cost'>
<p className='price'>INR 4,999</p><p className='perhead'>per head</p>
</div>
<p className='features'>
• Time buffer 1 week<br/>• Personal guide<br/>• 360 degree virtual visit<br/>• 2 souvenir delivered to home
</p>
<div className='sizedbox'></div>
<button className='bookbtn'>book</button>
            </div>
        </div>
    </div>
    </>
)
}

export default City;