'use client';

import { useState, useEffect } from 'react';

export function PrivacyPolicyToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenNotice = localStorage?.getItem('privacy-policy-notice-seen');
    if (!hasSeenNotice) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage?.setItem('privacy-policy-notice-seen', 'true');
  };

  return (
    <div className={`privacy-toast ${isVisible ? 'visible' : ''}`}>
      <div className="privacy-toast-content">
        <p className="privacy-toast-text">
          This website collects analytics data via{' '}
          <strong>Vercel Analytics</strong>.{' '}
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="privacy-toast-link"
          >
            View Privacy Policy
          </a>
        </p>
      </div>
      <button
        onClick={handleDismiss}
        className="privacy-toast-close"
        aria-label="Dismiss privacy notice"
      >
        ✕
      </button>
    </div>
  );
}
