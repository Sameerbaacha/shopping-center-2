import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Themecontext } from './context/Themecontext';


const Header = () => {

  const { theme, setTheme } = useContext(Themecontext);
  
  return (
    <div>
      <header className={`
        ${theme == 'light' ? "bg-white , text-gray-600" : "text-white bg-slate-800"}`}>
        <div
          className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
          bis_skin_checked={1}
        >
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className={`${theme == 'light' ? "text-gray-600" : "text-white"} ml-3 text-xl`}>Kohistan E-Commerce</span>
          </a>
          {/* hover:text-indigo-700 
 hover:text-indigo-700 
 hover:text-indigo-700  */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to='/' className={({ isActive }) => isActive ? "text-indigo-700 mr-5 underline underline-offset-8" : "mr-5"}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-indigo-700 mr-5 underline underline-offset-8" : "mr-5"}>About</NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-indigo-700 mr-5 underline underline-offset-8" : "mr-5"}>Contact</NavLink>
          </nav>

          <button onClick={() => {
            if (theme == 'light') {
              setTheme('dark')
            } else {
              setTheme('light')
            }
          }} className={`${theme == 'light' ? "bg-white" : "bg-slate-800"} inline-flex items-center 
          border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0`}>
            {`
            ${theme == 'light' ? '🌙' : '☀️'}
            `}
          </button>
        </div>
      </header>

    </div>
  )
}
export default Header