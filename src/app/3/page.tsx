'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
export default function Home() {
  const router=useRouter()
  useEffect(() => {
    // Call API route on every visit
    fetch("/api/log-visit", { method: "POST" })
  }, [])
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl relative flex items-center">
        {/* Backward Arrow */}
        <button
        onClick={()=>{
          router.push("/2")
        }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </button>

        {/* Text Container */}
        <div className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-6 flex flex-col items-start justify-center mx-12">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
            Which Language to choose??
          </h1>
          <h1 className="text-xl md:text-3xl font-semibold text-white mb-2">
            Javascript POV
          </h1>
          <ul className="text-sm md:text-base text-white leading-relaxed list-disc pl-4">
            <li>Only need to learn one language</li>
            <li>Frontend will be written in JAVASCRIPT.</li>
            <li>Easier to learn just learn language for both frontend and backend</li>
            <li>Huge packages availability Via NPM</li>
            <li>Integrated easily in frontend frameworks like NEXTJS</li>
          </ul>
          <a className="flex self-center pt-4" target='_blank' href="https://roadmap.sh/backend?fl=0"><Image alt="roadmap"  src="/ss.png" width={500} height={400} /></a>
        
        <p className="text-white flex self-center">Click on Image for full roadmap</p>
          <div className="mt-6">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
              What will you be doing while making backend server?
            </h1>
            <ul className="text-sm md:text-base text-white leading-relaxed list-disc pl-4">
              <li>
                Receive user input in correct format, and send the response back to frontend in expected format too.
              </li>
              <li>
                Correctly process the Inputs, Search databases, hitting other backends, handling the workflow of the data (how data flows through the code)
              </li>
              <li>
                Never letting the Backend Crash. Real Life Backend crash = Millions of dollars loss.
              </li>
              <li>
                Keeping servers secure, Ensure Password hashing, CORS security, Ensure the credentials are always encrypted.
              </li>
            </ul>
          </div>
          
        </div>

        {/* Forward Arrow */}
        <button
        onClick={()=>{
          router.push("/4")
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
