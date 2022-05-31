import './About.css'
import Team from './Team';
import temp from '../images/temp.png'


var abouttext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus mi nec magna scelerisque, in varius velit sagittis. Aliquam eros ante, vehicula non tempus ac, ornare quis ex. Donec ullamcorper quam a tincidunt posuere. Donec quam risus, fringilla quis elit nec, dapibus gravida neque. Aliquam vestibulum euismod ipsum vel hendrerit. In sollicitudin sollicitudin interdum. Aliquam dictum lectus sed luctus suscipit. Suspendisse commodo convallis nulla sit amet tempus. Ut est libero, eleifend quis lacus eget, tincidunt pellentesque eros. Morbi a est ut erat venenatis lacinia. Nunc sed dictum felis. Fusce sit amet posuere ex, aliquet pharetra felis. Fusce sem felis, euismod ac convallis id, laoreet a erat. Donec vel efficitur mi, eget ultricies felis. Quisque in lectus in tortor semper bibendum. Etiam eleifend tristique odio, vitae porta elit placerat non."

function About(){
    return (
        <>
        <div className='about'>
<br/>
<h1>
    ABOUT US
</h1>

<p className='oho'>{abouttext}</p>

<br></br>
<h2>
    TEAM
</h2>
<div className='cardcont'>
    <Team pfp={temp} name="aakash"  email="aakzshh@gmail.com" />
    <Team pfp={temp} name="jatin"  email="jatin2002singh@gmail.com" />
    <Team pfp={temp} name="bhavesh"  email="bhaveshgupta01@gmail.com" />
    <Team pfp={temp} name="aadya"  email="aadyabubber199@gmail.com" />
    <Team pfp={temp} name="sonu"  email="singlasonu.net@gmail.com" />
    <Team pfp={temp} name="gaganish"  email="gaganeesh@gmail.com" />
   
</div>
        </div>
        </>
    )
}

export default About;