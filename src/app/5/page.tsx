'use client'
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function Home() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    if (!question.trim()) return

    setLoading(true)
    setAnswer("")
    setError("")

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      })

      if (!response.ok) throw new Error("Failed to get a response from the server.")

      const data = await response.json()
      setAnswer(data.answer || "")
      setQuestion("")
    } catch (err) {
      setError("An unexpected error occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Ask your doubts from AI personalised for this workshop
          </h1>
        </div>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="text-lg p-4 h-14 bg-gray-800 text-white border border-gray-700 disabled:opacity-50"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            disabled={loading}
          />

          <div className="text-center">
            <Button
              onClick={handleSubmit}
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Thinking..." : "Ask AI"}
            </Button>
          </div>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-6 min-h-[100px]">
          {loading && <p>Loading, please wait...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {answer && (
            <div className="prose prose-invert text-white">
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                  li: ({ node, ...props }) => <li className="ml-6 mb-1" {...props} />,
                  strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                  em: ({ node, ...props }) => <em className="italic" {...props} />,
                }}
              >
                {answer}
              </ReactMarkdown>
            </div>
          )}
          {!loading && !error && !answer && (
            <p className="text-gray-400">Your answer will appear here.</p>
          )}
        </div>
      </div>
    </main>
  )
}
