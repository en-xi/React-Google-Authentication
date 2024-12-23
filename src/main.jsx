
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from "@react-oauth/google"

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='635530734911-ut6oruokvvlfvmp64j1fh1u8743rr0g6.apps.googleusercontent.com'>
      <App />
  </GoogleOAuthProvider>
)
