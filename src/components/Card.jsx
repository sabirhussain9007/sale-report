import React from "react"

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
