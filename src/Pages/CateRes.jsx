import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProducts } from './Data';

export default function CategoriesResul() {
  const { category } = useParams()
  const decodedCategory = category ? decodeURIComponent(category) : null
  const [Prodata, setProdata] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    async function fetchData() {
      setLoading(true)
      setError(null)
      try {
        const data = await getProducts()
        if (!mounted) return
        const arr = Array.isArray(data) ? data : [data]
        const filtered = decodedCategory ? arr.filter(p => p.category === decodedCategory) : arr
        setProdata(filtered)
      } catch (err) {
        console.error('Products fetch error:', err)
        if (mounted) setError(err)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchData()
    return () => { mounted = false }
  }, [decodedCategory])

const LoadingSpinner = ({ 
  size = 24, 
  color = 'currentColor', 
  strokeWidth = 2,
  className = '' 
}) => {
  return (
    <svg
      className={`animate-spin ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        className="opacity-75"
        fill={color}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold mb-6">{decodedCategory ? `Category: ${decodedCategory}` : 'All Products'}</h2>

        {loading ? (
          <LoadingSpinner size={20} />
        ) : error ? (
          <p className="text-red-600">Failed to load products.</p>
        ) : Prodata.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {Prodata.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="group">
                <img
                  alt={product.imageAlt || product.title}
                  src={product.imageSrc || product.image}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name || product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )

}
