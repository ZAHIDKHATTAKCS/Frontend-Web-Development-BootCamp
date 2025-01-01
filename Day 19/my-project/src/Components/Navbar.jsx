// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-gray-400 text-2xl text-white p-4'>
            <ul className='flex justify-around'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar