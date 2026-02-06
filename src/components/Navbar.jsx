import { useState } from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav className='fixed-top bg-white shadow-2xl'>

                {/* menu for small screens */}
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/#about">Über mich</NavLink></li>
                        <li><NavLink to="/#projekte">Projekte</NavLink></li>
                        <li><NavLink to="/#kontakt">Kontakt</NavLink></li>
                    </ul>
                </div>

                {/* menu for bigger screens */}
                <div className='hidden md:flex justify-between'>
                     <div className='p-4'>
                    <NavLink to="/">Barbara Goldbeck</NavLink>
                </div>

                <div className='p-4 flex gap-4'>
                    <NavLink to="/about">Über mich</NavLink>
                    <NavLink to="/projekte">Projekte</NavLink>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                </div>
                </div>
               

            </nav>
        </div>
    )
}

export default Navbar