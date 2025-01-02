// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({LogoName}) => {
  return (
    <div className="d-flex justify-center items-center bg-slate-400 py-4">
        <ul className="flex items-center justify-between text-white text-2xl">
            <div className="ms-4">
                <li>{LogoName}</li>
            </div>
            <div className="flex justify-between flex-1 mx-96">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            </div>
        </ul>
    </div>
  )
}

export default Navbar