import { Heart,ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button"
export default function Header() {
  return (
    <header className=" sticky  bg-gray-900/90 backdrop-blur-sm shadow-lg border-b border-red-800/30">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-2 rounded-lg shadow-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">MedAssist AI</h1>
              <p className="text-sm text-red-200">Your AI Health Companion</p>
            </div>
          </div>
          <Link to={"/"}>
            <Button
              variant="outline"
              size="sm"
              className="border-red-800/30 text-red-300 hover:bg-red-950/50 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
