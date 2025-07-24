import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function DisclaimerAlert() {
  return (
    <Alert className="mb-6 border-red-500/30 bg-red-950/50 backdrop-blur-sm">
      <AlertTriangle className="h-4 w-4 text-red-400" />
      <AlertDescription className="text-red-200">
        <strong>Important Medical Disclaimer:</strong> This AI assistant provides general health information only
        and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with
        qualified healthcare providers for medical concerns. In case of emergency, contact emergency services
        immediately.
      </AlertDescription>
    </Alert>
  )
}
