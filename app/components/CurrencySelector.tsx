"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useCurrency, type Currency } from "@/context/CurrencyContext"

const currencies: { code: Currency; name: string; symbol: string }[] = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "PKR", name: "Pakistani Rupee", symbol: "₨" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  { code: "GBP", name: "British Pound", symbol: "£" },
]

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)

  const currentCurrency = currencies.find((c) => c.code === currency)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-500 transition-colors"
      >
        <span>{currentCurrency?.symbol}</span>
        <span>{currentCurrency?.code}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {currencies.map((curr) => (
            <button
              key={curr.code}
              onClick={() => {
                setCurrency(curr.code)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-3 text-sm hover:bg-pink-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currency === curr.code ? "bg-pink-50 text-pink-600 font-medium" : "text-gray-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>
                  {curr.symbol} {curr.code}
                </span>
                <span className="text-xs text-gray-500">{curr.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
