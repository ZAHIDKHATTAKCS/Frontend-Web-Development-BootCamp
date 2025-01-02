/* eslint-disable react/prop-types */
function MyCar(props){
    return <>
    <h3 className="inline-flex ms-1"> The Brand is {props.brand} , </h3>
    <h3 className="inline-flex ms-1 items-center">Car color is <span className="text-white bg-black p-1 rounded-md ms-2"> {props.CarColor} </span> </h3>
    </>
}


const Car = () => {
    return (
        <div>
            <h1 className="inline-flex">I have a Car,</h1>
            <MyCar brand="Limosine" CarColor="Black" />
        </div>
    )
}
export default Car