import { useState } from "react"


import WelcomeCard from './WelcomeCard'
import Header from "./Header"
import ChatInterface from "./ChatInterface"
import DisclaimerAlert from "./DisclaimerAlert"

export default function MediBot() {
  // const [hasStarted, setHasStarted] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-black">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* <DisclaimerAlert /> */}
        {/* {!hasStarted && <WelcomeCard />} */}
        <ChatInterface />
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>
            Remember: This AI provides general information only. For medical emergencies, call emergency services.
            Always consult healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </div>
  )
}
