// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div id='parent' className='bg-slate-500 flex justify-between px-16 text-2xl p-4 text-white'>
                <div id='left'>
                    <h1 className='hover:cursor-pointer'>Logo</h1>
                </div>

                <div id="right">
                    <ul className='flex gap-16'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar