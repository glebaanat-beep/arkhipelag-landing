import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the PDF file
    window.location.href = '/privacy-policy.pdf';
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="text-text-secondary">Redirecting to Privacy Policy...</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;