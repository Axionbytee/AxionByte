'use client';

import { useEffect } from 'react';

interface TawkToWidgetProps {
  propertyId: string;
  widgetId: string;
}

export default function TawkToWidget({ propertyId, widgetId }: TawkToWidgetProps) {
  useEffect(() => {
    // Check if Tawk_API already exists to avoid duplicate loading
    if (typeof window !== 'undefined' && !(window as any).Tawk_API) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode?.insertBefore(script, firstScript);

      // Initialize Tawk_API
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();
    }
  }, [propertyId, widgetId]);

  return null;
}