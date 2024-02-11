import React from 'react'
import Logo from '../../assets/image/svg/logo.svg'

const Navbar = ()=> {
  return (
    <div className='bg-white'>
        <header className='flex items-center justify-between bg-indigo-950 p-4'>
          <a href='/' className="h-8 w-auto">
            <img src= {Logo} alt='Logo'/>
          </a>
          <nav className='flex space-x-4'>
            <a href='/' className='active'>About</a>
            <a href='/'>Our Solutions</a>
            <div className='relative group'>
              <a href='/' className='flex items-center'>
              Sectors
              </a>

            </div>
            
            <a href='/'>Knowledge</a>
            <a href='/'>Company</a>
            <a
                href="#"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
          </nav>

        </header>
    </div>
  )
}

export default Navbar;
