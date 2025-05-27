import { init } from '@emailjs/browser';

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
  
  if (!publicKey) {
    console.error('EmailJS public key is missing! Please check your environment variables.');
    return;
  }
  
  init(publicKey);
  console.log('EmailJS initialized with public key');
};

// Configuration with the correct service ID
export const emailJSConfig = {
  serviceId: 'service_rdzr5mg',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};
