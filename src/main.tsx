import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Handle redirect from 404.html for client-side routing
const redirect = sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  sessionStorage.removeItem('redirect');
  history.replaceState(null, '', redirect.split(location.origin)[1]);
}

createRoot(document.getElementById("root")!).render(<App />);
