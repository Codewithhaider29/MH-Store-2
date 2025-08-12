"use client"
import { createContext, useContext, useState, useEffect } from "react"
import type React from "react"

export type Currency = "USD" | "PKR" | "CAD" | "GBP"

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  convertPrice: (price: number) => number
  formatPrice: (price: number) => string
  getCurrencySymbol: () => string
}

const exchangeRates: Record<Currency, number> = {
  USD: 1, // Base currency
  PKR: 280, // 1 USD = 280 PKR
  CAD: 1.35, // 1 USD = 1.35 CAD
  GBP: 0.79, // 1 USD = 0.79 GBP
}

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  PKR: "₨",
  CAD: "C$",
  GBP: "£",
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD")

  // Load currency from localStorage on mount
  useEffect(() => {
    const savedCurrency = localStorage.getItem("mh-store-currency") as Currency
    if (savedCurrency && exchangeRates[savedCurrency]) {
      setCurrency(savedCurrency)
    }
  }, [])

  // Save currency to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("mh-store-currency", currency)
  }, [currency])

  const convertPrice = (price: number): number => {
    return price * exchangeRates[currency]
  }

  const formatPrice = (price: number): string => {
    const convertedPrice = convertPrice(price)
    const symbol = getCurrencySymbol()

    if (currency === "PKR") {
      return `${symbol}${Math.round(convertedPrice).toLocaleString()}`
    }
    return `${symbol}${convertedPrice.toFixed(2)}`
  }

  const getCurrencySymbol = (): string => {
    return currencySymbols[currency]
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        formatPrice,
        getCurrencySymbol,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
