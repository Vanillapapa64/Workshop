'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
let userVisits=0;
export default function Home() {
  const router=useRouter()
  userVisits++;
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl relative flex ">
        {/* Backward Arrow */}
        <button
        onClick={()=>{
          router.push("/3")
        }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </button>

        {/* Text Container */}
        <div className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-6 flex flex-col items-start justify-center mx-12">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
            The Journey
          </h1>
          <ul className="text-sm md:text-base leading-relaxed pl-2 p-4 bg-gradient-to-b from-blue-400  to-green-500 bg-clip-text text-transparent">
            <li>1. Explore your tech stack. Whether python or JS</li>
            <li>2. Learn its basic concepts, Syntax nd shi.</li>
            <li>3. For python, Learn about DJango/ Flask. For JS, GO for NODEJS</li>
            <li>4. Spend some time. Put your head down and just do it</li>
            <li>5. Make some projects, Not necessarily extraordinary. Even Stuff like shopping website works.</li>
            <li>6. (If Frontend not learnt yet) {`>`} Learn it or collaborate</li>
            <li>7. Otherwise Make a full Stack Project</li>
            <li>8. Discover new tools (Like ORM, Monorepos). Learn to deploy (Vercel or AWS) and make your website publicly accessible</li>
            <li>9. Slowly shift to industry standards (Typescript, SEO optimization)</li>
            <li>10. Learn more advanced stuff (Like Docker, CI-CD pipelining, Redis, Pubsub)</li>
            <li>11. Learn some more advance DEV Ops techniques</li>
            </ul>

            <div className="flex flex-col sm:flex-row items-start self-center sm:items-center gap-4 sm:gap-6 bg-gray-900 p-4 rounded-xl w-fit">

        <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
            <span className="text-white text-sm">Top 90%</span>
        </div>


        <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
            <span className="text-white text-sm">Top 10%</span>
        </div>
        </div>
          
          
        </div>

        {/* Forward Arrow */}
        <button
        onClick={()=>{
          router.push("/5")
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
