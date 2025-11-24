import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Open PDF in new tab
    window.open('/tos.pdf', '_blank');
    // Navigate back to home
    navigate('/');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="text-text-secondary">Redirecting to Terms of Service...</p>
      </div>
    </div>
  );
};

export default TermsOfService;
