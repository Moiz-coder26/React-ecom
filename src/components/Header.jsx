import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Header() {
  const { totalItems } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900">AuraBuy</Link>

        <nav className="hidden md:flex items-center  gap-6">
          <NavLink to="/" end className={({isActive}) => isActive ? 'text-black-900 text-lg font-bold' : 'hover:text-black text-gray-600'}>Home</NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? 'text-black-900 text-lg font-bold' : 'hover:text-black text-gray-600'}>Products</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-black-900 text-lg font-bold' : 'hover:text-black text-gray-600'}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-black-900 text-lg font-bold' : 'hover:text-black text-gray-600'}>Contact</NavLink>
          <NavLink to="/categories" className={({isActive}) => isActive ? 'text-black-900 text-lg font-bold' : 'hover:text-black text-gray-600'}>Categories</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/Signin" className="hidden sm:inline-flex items-center font-medium px-3 py-1 border border-gray-200 rounded hover:bg-blue-900 hover:text-white text-gray-900">Sign In</Link>

          <Link to="/cart" className="text-gray-900">🛒 <span className="ml-1 text-sm text-gray-600">{totalItems}</span></Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md border border-gray-200 ml-2"
            aria-label="Toggle navigation"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`${open ? 'block' : 'hidden'} md:hidden px-4 pb-4`}>
        <nav className="flex flex-col gap-2">
          <NavLink to="/" end className={({isActive}) => (isActive ? 'text-gray-900 font-medium' : 'text-gray-700') + ' block py-2'} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={({isActive}) => (isActive ? 'text-gray-900 font-medium' : 'text-gray-700') + ' block py-2'} onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink to="/about" className={({isActive}) => (isActive ? 'text-gray-900 font-medium' : 'text-gray-700') + ' block py-2'} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => (isActive ? 'text-gray-900 font-medium' : 'text-gray-700') + ' block py-2'} onClick={() => setOpen(false)}>Contact</NavLink>
          <NavLink to="/categories" className={({isActive}) => (isActive ? 'text-gray-900 font-medium' : 'text-gray-700') + ' block py-2'} onClick={() => setOpen(false)}>Categories</NavLink>
          <Link to="/signin" className="block mt-2 px-3 py-2 border rounded text-gray-900" onClick={() => setOpen(false)}>Sign In</Link>
        </nav>
      </div>
    </header>
  )
}
