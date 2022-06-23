import './Filter.css'

function Filter(){
    return (
        <>
        <div className="filterbody">

            <div>
                <p>Filters</p>
                <p className='filterstuff'>Location</p>
                <input type="checkbox" id="location" name='location' ></input>
    <label for="location">India</label><br></br>
    <input type="checkbox" id="location" name='location' ></input>
    <label for="location">All over the world</label><br></br>
    <br></br><br></br>
                <p className='filterstuff'>Price</p>
                <input type="checkbox" id="location" name='location' ></input>
    <label for="location">less than 5000 INR</label><br></br>
    <input type="checkbox" id="location" name='location' ></input>
    <label for="location">5000-10000 INR</label><br></br>
    <input type="checkbox" id="location" name='location' ></input>
    <label for="location">more than 10000</label><br></br>
    <br></br><br></br>
                <p className='filterstuff'>360 Video</p>
                <input type="checkbox" id="location" name='location' ></input>
    <label for="location">available</label><br></br>
    <input type="checkbox" id="location" name='location' ></input>
    <label for="location">not available</label><br></br>
    <br></br><br></br>
                <center><button className='filterbtn'>apply filters</button></center>
            </div>
            <div></div>
        </div>
        </>
    )
}

export default Filter;