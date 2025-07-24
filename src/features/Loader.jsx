import { Send, Bot, User, AlertTriangle, Heart } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
const Loader = () => {
  return (
    <div className="flex gap-3 justify-start">
      <Avatar className="h-8 w-8 bg-gradient-to-r from-red-600 to-red-700">
        <AvatarFallback>
          <Bot className="h-4 w-4 text-white" />
        </AvatarFallback>
      </Avatar>
      <div className="bg-gray-800/80 border border-red-800/20 rounded-lg px-4 py-2 backdrop-blur-sm">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
