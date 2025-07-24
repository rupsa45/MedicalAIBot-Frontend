import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Heart, MessageCircle, Shield, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
const LandingPage = () => {
  const [showChat, setShowChat] = useState(false);
  if (!showChat) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-black">
        {/* Header */}
        <header className="bg-gray-900/90 backdrop-blur-sm shadow-lg border-b border-red-800/30">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-2 rounded-lg shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">MedAssist AI</h1>
                <p className="text-sm text-red-200">Your AI Health Companion</p>
              </div>
            </div>
          </div>
        </header>

        {/* Landing Page Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full mb-6 shadow-2xl">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">
                Welcome to <span className="text-red-400">MedAssist AI</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get instant, reliable health information and guidance from our
                advanced AI assistant. Available 24/7 to help answer your
                medical questions and provide general health insights.
              </p>
            </div>
            <Link to={"/chat"}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-red-500/25 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Your Health Consultation
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900/80 backdrop-blur-sm border-red-800/30 hover:border-red-600/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-red-950/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Instant Responses
                </h3>
                <p className="text-gray-400">
                  Get immediate answers to your health questions with our
                  AI-powered system
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 backdrop-blur-sm border-red-800/30 hover:border-red-600/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-red-950/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  24/7 Available
                </h3>
                <p className="text-gray-400">
                  Access health information anytime, anywhere, without waiting
                  for appointments
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 backdrop-blur-sm border-red-800/30 hover:border-red-600/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-red-950/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Safe & Private
                </h3>
                <p className="text-gray-400">
                  Your conversations are secure and confidential with our
                  privacy-first approach
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What You Can Ask Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              What You Can Ask
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-red-950/30 border border-red-800/20 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-red-300 mb-3">Symptoms</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Headache causes</li>
                  <li>• Fever symptoms</li>
                  <li>• Pain assessment</li>
                  <li>• Common conditions</li>
                </ul>
              </div>
              <div className="bg-red-950/30 border border-red-800/20 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-red-300 mb-3">Prevention</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Healthy habits</li>
                  <li>• Disease prevention</li>
                  <li>• Nutrition advice</li>
                  <li>• Exercise guidance</li>
                </ul>
              </div>
              <div className="bg-red-950/30 border border-red-800/20 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-red-300 mb-3">
                  General Health
                </h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Medical conditions</li>
                  <li>• Treatment options</li>
                  <li>• Health screening</li>
                  <li>• Wellness tips</li>
                </ul>
              </div>
              <div className="bg-red-950/30 border border-red-800/20 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold text-red-300 mb-3">Lifestyle</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Sleep health</li>
                  <li>• Stress management</li>
                  <li>• Mental wellness</li>
                  <li>• Health monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <Alert className="mb-8 border-red-500/30 bg-red-950/50 backdrop-blur-sm">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-red-200">
              <strong>Important Medical Disclaimer:</strong> This AI assistant
              provides general health information only and is not a substitute
              for professional medical advice, diagnosis, or treatment. Always
              consult with qualified healthcare providers for medical concerns.
              In case of emergency, contact emergency services immediately.
            </AlertDescription>
          </Alert>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of users who trust MedAssist AI for their health
              information needs
            </p>
            <Link to={"/chat"}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-red-500/25 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Consultation Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default LandingPage;
