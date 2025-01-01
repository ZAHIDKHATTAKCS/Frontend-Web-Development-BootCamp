/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Mycar(props){
    // eslint-disable-next-line react/prop-types
    return <>
    <h2>I hav a {props.brand}!</h2><br />
    <h2>I hav a {props.color}</h2>
    </>
}

const Profile = () => {
    return (
        <div className='bg-blue-200 text-2xl text-center'>

            <Mycar brand = "BMW" color="Midnight Blue" />
        </div>
    )
}

export default Profile;