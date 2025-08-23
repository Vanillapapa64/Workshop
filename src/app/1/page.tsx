'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router=useRouter()
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl relative flex items-center">

        {/* Text Container */}
        <div className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-6 flex flex-col items-start justify-center mx-12">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
            Javascript Overview
          </h1>
          <ul className="text-sm md:text-base text-white leading-relaxed list-disc pl-4">
            <li>A programming language used to make websites interactive and dynamic.</li>
            <li>Runs in your browser (frontend) and with Node.js can also run on servers (backend).</li>
            <li>Lightweight and beginner-friendly.</li>
            <li>Designed to make web pages interactive in the browser.</li>
          </ul>

          <div className="mt-6">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
              IS JAVA AND JAVASCRIPT SAME?
            </h1>
            <p className="text-sm md:text-base text-white leading-relaxed">
              Despite the similar name, JavaScript and Java are completely different languages.
              Java is a full programming language used for applications and Android apps,
              while JavaScript is mostly used for web development.
            </p>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">
                Conclusion
            </h1>
            <ul className="text-sm md:text-base text-white leading-relaxed list-disc pl-4">
              <li>JavaScript is like the electricity in your house : it powers interactive things on websites.</li>
                <li>Java is like building a full house from scratch : more structured and heavier.</li>
            </ul>
          </div>
        </div>

        {/* Forward Arrow */}
        <button
        onClick={()=>{
          router.push("/2")
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
