"use client"
import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type React from "react"

interface CartItem {
  id: string
  name: string
  price: number
  originalPrice: number
  image: string
  category: string
  quantity: number
}

interface OrderItem extends CartItem {
  orderTimestamp: number
}

interface CartContextType {
  cartItems: CartItem[]
  currentOrderItems: OrderItem[]
  addToCart: (product: any) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  setCurrentOrder: (items: CartItem[]) => void
  clearCurrentOrder: () => void
  cartCount: number
  cartTotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [currentOrderItems, setCurrentOrderItems] = useState<OrderItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("mh-store-cart")
    const savedCurrentOrder = localStorage.getItem("mh-store-current-order")

    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    if (savedCurrentOrder) {
      setCurrentOrderItems(JSON.parse(savedCurrentOrder))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("mh-store-cart", JSON.stringify(cartItems))
  }, [cartItems])

  // Save current order to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("mh-store-current-order", JSON.stringify(currentOrderItems))
  }, [currentOrderItems])

  const addToCart = useCallback((product: any) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price * 0.85, // 15% discount applied
          originalPrice: product.price,
          image: product.image,
          category: product.category,
          quantity: 1,
        },
      ]
    })
  }, [])

  const removeFromCart = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity === 0) {
        removeFromCart(id)
        return
      }
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
    },
    [removeFromCart],
  )

  const clearCart = useCallback(() => {
    setCartItems([])
    localStorage.removeItem("mh-store-cart")
  }, [])

  const setCurrentOrder = useCallback((items: CartItem[]) => {
    const orderItems: OrderItem[] = items.map((item) => ({
      ...item,
      orderTimestamp: Date.now(),
    }))
    setCurrentOrderItems(orderItems)
  }, [])

  const clearCurrentOrder = useCallback(() => {
    setCurrentOrderItems([])
    localStorage.removeItem("mh-store-current-order")
  }, [])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        currentOrderItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setCurrentOrder,
        clearCurrentOrder,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
