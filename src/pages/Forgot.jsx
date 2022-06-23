import '../components/Forgot.css'

function Forgot(){
    return (
        <>
        <div className="pwdpage">
            
        <p className='pwdt'>FORGOT PASSWORD</p>

        <div className='pwdparent'>
        <div className='pwddetails'>
         
         <div className='one' id='one'>
         <input type="text" placeholder='Email Address'/>
         <br /><br />
         <button className='pwdbtn' onClick={()=>toTwo()}>submit</button>
         </div>
         <div className='two' id='two'>
         <input type="text" placeholder='Enter OTP'/>
         <br /><br />
         <button className='pwdbtn' onClick={()=>toThree()}>submit</button>
         </div>
         <div className='three' id='three'>
         <input type="text" placeholder='Create new password'/>
         <br /><br />
         <button className='pwdbtn'>submit</button>
         </div>
        </div>
        </div>
        </div>
        </>
    )

    function toTwo(){
    document.getElementById('one').style.display='none';
    document.getElementById('two').style.display='block';
    }

    function toThree(){
        document.getElementById('two').style.display='none';
        document.getElementById('three').style.display='block';
        }
}



export default Forgot;