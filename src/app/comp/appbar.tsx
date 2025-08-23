'use client'
import { useState } from "react"
import {  ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
export default function Appbar(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const router=useRouter()
    return (
        <div className="bg-gray-900 h-32">
        <header className="bg-gray-800 border-b flex items-center justify-between border-gray-700 px-4 py-3 h-full ">
            <div className="w-full mx-auto flex items-center justify-between">
            <h1 className="text-white pl-6 font-bold text-4xl text-yellow-300">Backend(JavaScript)</h1>

            {/* Dropdown Menu */}
            <div className="relative pr-10">
                <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-lg font-semibold text-white rounded-lg transition-colors"
                >
                Pages
                <ChevronDown className={`w-12 h-8  transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-10">
                    <div className="py-1">
                    <button onClick={()=>{
                        router.push('/1')
                    }} className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 transition-colors">
                        Page 1/5 Overview
                    </button>
                    <button onClick={()=>{
                        router.push('/2')
                    }} className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 transition-colors">
                        Page 2/5 Backend
                    </button>
                    <button onClick={()=>{
                        router.push('/3')
                    }} className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 transition-colors">
                        Page 3/5 JS in backend
                    </button>
                    <button onClick={()=>{
                        router.push('/4')
                    }} className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 transition-colors">
                        Page 4/5 Journey
                    </button>
                    <button onClick={()=>{
                        router.push('/5')
                    }} className="w-full text-left px-4 py-2 text-white hover:bg-gray-600 transition-colors">
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