
import React from 'react';
import { usePageTracking } from '@/utils/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  // This hook will track page views when the route changes
  usePageTracking();
  
  return <>{children}</>;
};

export default AnalyticsProvider;
