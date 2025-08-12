"use client"
import { useEffect } from "react"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

export interface ToastProps {
  id: string
  type: "success" | "error" | "info" | "warning"
  title: string
  message?: string
  duration?: number
}

interface ToastComponentProps extends ToastProps {
  onRemove: (id: string) => void
}

export function Toast({ id, type, title, message, duration = 5000, onRemove }: ToastComponentProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onRemove])

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  }

  const bgColors = {
    success: "bg-green-50 border-green-200",
    error: "bg-red-50 border-red-200",
    info: "bg-blue-50 border-blue-200",
    warning: "bg-yellow-50 border-yellow-200",
  }

  return (
    <div className={`${bgColors[type]} border rounded-lg p-4 shadow-lg max-w-sm w-full animate-fade-in`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">{icons[type]}</div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-gray-800">{title}</h3>
          {message && <p className="text-sm text-gray-600 mt-1">{message}</p>}
        </div>
        <button
          onClick={() => onRemove(id)}
          className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export function ToastContainer({ toasts = [], onRemove }: { toasts?: ToastProps[]; onRemove: (id: string) => void }) {
  if (!toasts || toasts.length === 0) {
    return null
  }

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onRemove={onRemove} />
      ))}
    </div>
  )
}
