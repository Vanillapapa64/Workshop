'use client'
import { useState,useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useRouter,usePathname } from "next/navigation"

export default function Appbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
  setIsDropdownOpen(false)
  }, [pathname])
  return (
    <div className="bg-gray-900">
      <header className="bg-gray-800 border-b z-50 border-gray-700 px-3 sm:px-4 py-3 flex items-center justify-between h-20 sm:h-28 md:h-32">
        <div className="w-full mx-auto flex items-center justify-between">
          {/* Title */}
          <h1 onClick={() => router.push("/")} className="text-white font-bold text-2xl sm:text-3xl md:text-4xl text-yellow-300 pl-2 sm:pl-6">
            Backend (JavaScript)
          </h1>

          {/* Dropdown Menu */}
          <div className="relative pr-2 sm:pr-6">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-700 hover:bg-gray-600 text-base sm:text-lg font-semibold text-white rounded-lg transition-colors"
            >
              Pages
              <ChevronDown
                className={`w-6 h-6 sm:w-8 sm:h-8 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 w-40 sm:w-48 bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  <button
                    onClick={() => router.push("/1")}
                    className="w-full text-left px-3 py-2 sm:px-4 text-white hover:bg-gray-600 transition-colors"
                  >
                    Page 1/5 Overview
                  </button>
                  <button
                    onClick={() => router.push("/2")}
                    className="w-full text-left px-3 py-2 sm:px-4 text-white hover:bg-gray-600 transition-colors"
                  >
                    Page 2/5 Backend
                  </button>
                  <button
                    onClick={() => router.push("/3")}
                    className="w-full text-left px-3 py-2 sm:px-4 text-white hover:bg-gray-600 transition-colors"
                  >
                    Page 3/5 JS in backend
                  </button>
                  <button
                    onClick={() => router.push("/4")}
                    className="w-full text-left px-3 py-2 sm:px-4 text-white hover:bg-gray-600 transition-colors"
                  >
                    Page 4/5 Journey
                  </button>
                  <button
                    onClick={() => router.push("/5")}
                    className="w-full text-left px-3 py-2 sm:px-4 text-white hover:bg-gray-600 transition-colors"
                  >
                    Page 5/5 Doubt Asking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  )
}
