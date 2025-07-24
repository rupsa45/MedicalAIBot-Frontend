import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Define and export the function properly
const fetchMedicalAnswer= async (question) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/ask`, { question })
    return res.data.answer
  } catch (error) {
    console.error("❌ Server error:", error)
    throw error
  }
}
export  default fetchMedicalAnswer