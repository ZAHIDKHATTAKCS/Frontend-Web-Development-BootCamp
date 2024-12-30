// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-slate-400 text-yellow-700 text-2xl text-center flex justify-between items-center px-7' id='parent-div'>
            <div className='left-side'>
                <a href="https://react.com">
                    <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" alt="react logo" className='w-[100px] object-cover' />
                </a>
            </div>
            <div className="right-side mx-5">
                <ul className='flex justify-between items-center gap-5'>
                    <li><a href="#">Home</a></li>
                    <li><a href="https://zahidkhattak.vercel.app" target='_blank'>My Portfolio</a></li>
                    <li><a href="#">list</a></li>
                    <li><a href="#">Hobies</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar