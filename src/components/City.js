import './City.css'


function City(place, price, points){
return (
    <>
    <div>
        <p>{place.toString().split(",")[0]}</p>
    </div>
    </>
)
}

export default City;