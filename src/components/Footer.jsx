import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-3">AuraBuy</h4>
            <p className="text-gray-400 text-sm">Quality products, great prices. Fast shipping and friendly support.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://web.facebook.com/moiz.nadeem.9674" aria-label="Facebook" className="p-2 bg-gray-800 rounded hover:bg-indigo-600 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.07v-2.9h2.37V9.41c0-2.34 1.41-3.63 3.56-3.63 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.73-1.53 1.48v1.78h2.6l-.42 2.9h-2.18V22C18.34 21.2 22 17.06 22 12.07z"/></svg>
              </a>
                <a href="https://www.linkedin.com/in/moiz-nadeem-ab7664319/" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded hover:bg-indigo-600 transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0V8zm7.5 0H12v2.2h.1c.4-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5.1V24H17v-7.3c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H7.5V8z"/>
                  </svg>
                </a>
              <a href="https://www.instagram.com/moiz_nadeem_2626/" aria-label="Instagram" className="p-2 bg-gray-800 rounded hover:bg-indigo-600 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A3.8 3.8 0 1015.8 12 3.8 3.8 0 0012 8.2zm6.5-2.7a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1zM12 15.5A3.5 3.5 0 1115.5 12 3.5 3.5 0 0112 15.5z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3">Shop</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">All Item</a></li>
              <li><a href="#" className="hover:text-white">Garments</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
              <li><a href="#" className="hover:text-white">Home Decor</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-3">Subscribe to our newsletter</h5>
            <p className="text-gray-400 text-sm">Get updates on new products and offers.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AuraBuy — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
