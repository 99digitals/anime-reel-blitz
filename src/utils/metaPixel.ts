
// Meta Pixel tracking utility
declare global {
  interface Window {
    fbq: any;
  }
}

export const initializeMetaPixel = (pixelId: string) => {
  // Create fbq function if it doesn't exist
  if (!window.fbq) {
    window.fbq = function() {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
  }
  
  // Initialize pixel
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
};

export const trackViewContent = () => {
  if (window.fbq) {
    window.fbq('track', 'ViewContent');
  }
};

export const trackInitiateCheckout = () => {
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout');
  }
};

export const trackLead = () => {
  if (window.fbq) {
    window.fbq('track', 'Lead');
  }
};
