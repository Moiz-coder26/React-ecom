import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function useCart() {
  return useContext(CartContext)
}

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    try { localStorage.setItem('cart', JSON.stringify(cart)) } catch (e) {}
  }, [cart])

  function addItem(item) {
    setCart(prev => {
      const found = prev.find(p => p.id === item.id)
      if (found) return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p)
      return [...prev, { ...item, qty: 1 }]
    })
  }

  function removeItem(id) {
    setCart(prev => prev.filter(p => p.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  const totalItems = useMemo(() => cart.reduce((s, it) => s + (it.qty || 0), 0), [cart])

  const value = { cart, addItem, removeItem, clearCart, totalItems }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
