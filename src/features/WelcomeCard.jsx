import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"



export default function WelcomeCard() {
  return (
    <Card className="mb-6 bg-gray-900/80 backdrop-blur-sm border-red-800/30">
      <CardHeader className="text-center">
        <CardTitle className="text-xl text-white">Welcome to MedAssist AI</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-gray-300">
          I'm here to help answer your health-related questions and provide general medical information.
        </p>
        
      </CardContent>
    </Card>
  )
}
