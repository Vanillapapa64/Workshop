'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
export default function Home() {
  const router=useRouter()
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl relative flex items-center">
        {/* Backward Arrow */}
        <button
        onClick={()=>{
          router.push("/1")
        }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </button>

        {/* Text Container */}
        <div className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-6 flex flex-col items-start justify-center mx-12">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
            Backend Concept
          </h1>
          <ul className="text-sm md:text-base text-white leading-relaxed list-disc pl-4">
            <li>Heart and Soul of application</li>
            <li>Handles data storage, logic, and communication with what users see.</li>
            <li>buttons would not work, posts would not save, and and you would not be able to login.</li>
            <li>Lightweight and beginner-friendly.</li>
            <li>Designed to make web pages interactive in the browser.</li>
          </ul>
        <Image alt='frontend vs backend' className="flex self-center pt-4" src="/fevsbe.jpg" width={500} height={400} />
        <p className="text-white flex self-center">A very good depiction</p>
          <div className="mt-6">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
              Key Components of Backend
            </h1>
            <ul className="text-sm md:text-base text-white leading-relaxed list-disc pl-4">
              <li>
                Server - Receives requests and sends responses.
              </li>
              <li>
                Database - Stores all information safely (like users, posts, or orders).
              </li>
              <li>
                APIs - Rules that let frontend and backend talk to each other.
              </li>
              <li>
                Authentication & Security - Makes sure users are who they claim to be.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
                BackEnd Technologies
            </h1>
            <ul className="text-sm md:text-base text-white leading-relaxed list-disc pl-4">
              <li>NodeJS: Backend Framework. A more widely popular, Huge community support. Backed BY NPM.</li>
                <li>POSTGRES: Database Management</li>
                <li>React/ NEXTJS: Frontend Framework</li>
                <li>POSTMAN: For testing your backend</li>
            </ul>
          </div>
        </div>

        {/* Forward Arrow */}
        <button
        onClick={()=>{
          router.push("/3")
        }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </button>
      </div>
    </main>
  )
}
