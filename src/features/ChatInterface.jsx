import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

import fetchMedicalAnswer from '../api/medicalBotAPI'
import ChatInput from "./ChatInput";
import Loader from "./Loader";

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleSend = async (userMessage) => {
    if (!userMessage.trim()) return;

    setHasStarted(true);
    const newMessages = [
      ...messages,
      { id: Date.now(), role: "user", content: userMessage },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const answer = await fetchMedicalAnswer(userMessage);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "assistant", content: answer },
      ]);
    } catch (error) {
    console.error("API error:", error);

    let errorMessage = "⚠️ An unexpected error occurred. Please try again.";

    if (error.response) {
      const status = error.response.status;
      if (status === 403) {
        errorMessage =
          "Only medical-related questions are allowed.";
      } else if (status >= 500) {
        errorMessage = "🚨 Server error. Please try again later.";
      }
    } else if (error.request) {
      errorMessage =
        "📡 No response from server. Please check your internet connection.";
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        role: "assistant",
        content: errorMessage,
      },
    ]);
  } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className=" flex flex-col bg-gray-900/80 backdrop-blur-sm border-red-800/30">
      <CardHeader className="pb-3 border-b border-red-800/20">
        <CardTitle className="text-lg flex items-center gap-2 text-white">
          <Bot className="h-5 w-5 text-red-400" />
          Chat with MedAssist AI
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 pb-4">
            {messages.length === 0 && hasStarted && (
              <div className="text-center text-gray-400 py-8">
                <Bot className="h-12 w-12 mx-auto mb-4 text-red-400/50" />
                <p>Start by asking me a health-related question!</p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <Avatar className="h-8 w-8 bg-gradient-to-r from-red-600 to-red-700">
                    <AvatarFallback>
                      <Bot className="h-4 w-4 text-white" />
                    </AvatarFallback>
                  </Avatar>
                )}

                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                      : "bg-gray-800/80 text-gray-100 border border-red-800/20 backdrop-blur-sm"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>

                {message.role === "user" && (
                  <Avatar className="h-8 w-8 bg-gray-700">
                    <AvatarFallback>
                      <User className="h-4 w-4 text-white" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isLoading && <Loader />}
          </div>
        </ScrollArea>

        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </CardContent>
    </Card>
  );
};

export default ChatInterface;
