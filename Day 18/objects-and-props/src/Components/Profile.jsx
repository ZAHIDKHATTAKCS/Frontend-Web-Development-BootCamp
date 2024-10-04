// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Profile({ props , source }) {
    return (
        <div>
            <ul className='text-3xl m-6'>
                <li>Id : {props.id}</li>
                <li>Name : {props.name}</li>
                <li>Country : {props.country}</li>
                <li>Hobby : {props.hobby}</li>
            </ul>

            <img src={source} alt="Afridi" />
        </div>
    )
}

export default Profile