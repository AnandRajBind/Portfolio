import { init } from '@emailjs/browser';

let isInitialized = false;

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  if (isInitialized) return;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
  if (!publicKey) {
    console.error('EmailJS public key is missing! Please check your environment variables.');
    return;
  }
  init(publicKey);
  isInitialized = true;
  console.log('EmailJS initialized with public key');
};

// Configuration with the correct service ID
export const emailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};
