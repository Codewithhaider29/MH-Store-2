"use client"
import { ToastContainer } from "./Toast"
import type React from "react"

import { useToast } from "../hooks/useToast"
import { createContext, useContext } from "react"

const ToastContext = createContext<ReturnType<typeof useToast> | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const toast = useToast()

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToastContext must be used within a ToastProvider")
  }
  return context
}
