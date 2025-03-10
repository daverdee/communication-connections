
// Google Analytics configuration
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Initialize Google Analytics
export const initGA = () => {
  // Check if it's already initialized
  if (!(window as any).ga) {
    // Add Google Analytics script to the document
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize the dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);
  }
};

// Google Analytics tracking ID
// Replace this with your actual tracking ID when you create your Google Analytics property
export const GA_TRACKING_ID = 'G-XXXXXXXXXX';

// Hook to track page views
export const usePageTracking = () => {
  const location = useLocation();
  
  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);
};

// Track custom events
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if ((window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
