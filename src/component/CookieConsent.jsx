import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="bg-primary border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            We use cookies to improve your experience.{' '}
            <Link to="/privacy" className="text-accent-light underline hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-5 py-2 text-sm border border-white/10 text-gray-300 rounded-lg hover:bg-white/5 transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent-dark transition-all font-medium"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
