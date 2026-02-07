import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from './Data'

export default function Categories() {
  const [categories, setCategories] = useState([])
  const [thumbs, setThumbs] = useState({})

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const products = await getProducts()
        if (!mounted) return
        const map = {}
        for (const p of products) {
          if (!map[p.category]) map[p.category] = p
        }
        setCategories(Object.keys(map))
        setThumbs(map)
      } catch (err) {
        console.error('Failed to load products for categories', err)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  
  return (
    <div>
      <section className="max-w-6xl mx-auto items-center mt-20 px-4 py-10">
        <h1 className="text-2xl font-bold text-center mb-10">Shop by Category</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {categories.map((cat) => (
            <div key={cat} className="bg-gray-50 rounded-lg">
              <Link to={`/categories/${encodeURIComponent(cat)}`} className="block text-center p-3">
                <img src={(thumbs[cat] && (thumbs[cat].image || thumbs[cat].imageSrc)) || ''} alt={cat} className="mx-auto h-38 w-47 rounded object-cover" />
                <div className="mt-3 font-semibold text-center text-gray-800">{cat}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
