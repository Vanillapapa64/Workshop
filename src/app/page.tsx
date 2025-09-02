import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Zap, BookOpen } from "lucide-react"

export default function JavaScriptWorkshopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 flex items-center pointer-events-none justify-center opacity-30">
        <div className="text-[40rem] font-bold select-none pointer-events-none" style={{ color: "#F7DF1E" }}>
          JS
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Title with JS Yellow */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white">
              <span style={{ color: "#F7DF1E" }}>JavaScript</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-200">Workshop</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Get an insightful strategy and roadmap for mastering JavaScript and Backend through this session.
            </p>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h3 className="text-3xl font-bold text-center text-white mb-12">What You will Learn</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Code className="w-8 h-8" style={{ color: "#F7DF1E" }} />
                <CardTitle className="text-white">Fundamentals</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Variables, functions, objects, arrays, and control structures. Build a solid foundation in JavaScript
                syntax and concepts.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8" style={{ color: "#F7DF1E" }} />
                <CardTitle className="text-white">Modern ES6+</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Arrow functions, destructuring, modules, promises, async/await, and other modern JavaScript features.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8" style={{ color: "#F7DF1E" }} />
                <CardTitle className="text-white">Real Projects</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Build interactive web applications, work with APIs, and create dynamic user interfaces with hands-on
                projects.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
