import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProducts } from './Data'
import { useCart } from '../context/CartContext.jsx'


const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    async function fetchProduct() {
      setLoading(true)
      setError(null)
      try {
        const data = await getProducts(id)
        if (!mounted) return
        setProduct(data)
      } catch (err) {
        console.error('Error fetching product:', err)
        if (mounted) setError(err)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    fetchProduct()
    return () => { mounted = false }
  }, [id])

  if (loading) return <div className="p-8">Loading...</div>
  if (error) return <div className="p-8 text-red-600">Failed to load product.</div>
  if (!product) return (
    <div className="p-8">
      <Link to="/products" className="text-dark-600 hover:underline">← Back</Link>
      <p className="mt-4 text-gray-700">Product not found.</p>
    </div>
  )

  const imageSrc = product.imageSrc || product.image
  const imageAlt = product.imageAlt || product.title || product.description || 'Product image'
  const name = product.name || product.title
  const price = product.price

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to="/products" className="text-dark-600 hover:underline mb-4 inline-block">← Back</Link>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <img src={imageSrc} alt={imageAlt} className="w-full rounded-lg object-cover" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <p className="text-xl text-gray-900 mb-4">{price}</p>
          <p className="text-gray-700">{imageAlt}</p>
          <div style={{marginTop:16}}>
            <AddToCartButton product={{ id: product.id, name, price, imageSrc }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

function AddToCartButton({ product }){
  const { addItem } = useCart()
  return (
    <button onClick={() => addItem({ id: product.id, name: product.name || product.title, price: product.price, imageSrc: product.imageSrc || product.image })}
      style={{padding:'10px 14px',background:'#111',color:'#fff',border:'none',borderRadius:6,cursor:'pointer'}}>
      Add to cart
    </button>
  )
}
