import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

const ChatInput = ({ onSend, isLoading }) => {
  const [input, setInput] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    onSend(input)
    setInput("")
  }

  return (
    <div className="border-t border-red-800/20 p-4">
      <form onSubmit={handleFormSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about your health concerns..."
          disabled={isLoading}
          className="flex-1 bg-gray-800/50 border-red-800/30 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500/20"
        />
        <Button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}

export default ChatInput
