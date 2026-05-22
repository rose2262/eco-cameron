/**
 * WhatsApp Integration Utilities for Eco Cameron Tours
 * Phone: +60125837277
 */

const WHATSAPP_NUMBER = '60125837277';
const BASE_URL = 'https://wa.me/';

/**
 * Generate WhatsApp link with pre-filled message
 */
export function generateWhatsAppLink(tourName?: string, context?: string): string {
  let message: string;

  if (tourName && context) {
    // Advanced version with tour name and context
    message = `Hello, I visited your Eco Cameron website and clicked the booking button for the ${tourName}. I would like more details.`;
  } else if (tourName) {
    // Dynamic message with tour name
    message = `Hello, I'm interested in the ${tourName} from the Eco Cameron website.`;
  } else if (context) {
    // Generic message with context
    message = `Hello, I visited your Eco Cameron website. ${context}`;
  } else {
    // Default message
    message = "Hello, I'm interested in booking a tour from the Eco Cameron website.";
  }

  const encodedMessage = encodeURIComponent(message);
  return `${BASE_URL}${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Open WhatsApp link in new tab/app
 */
export function openWhatsApp(tourName?: string, context?: string): void {
  const link = generateWhatsAppLink(tourName, context);
  window.open(link, '_blank', 'noopener,noreferrer');
}

/**
 * Get WhatsApp phone number
 */
export function getWhatsAppNumber(): string {
  return WHATSAPP_NUMBER;
}

/**
 * Format WhatsApp number for display
 */
export function getDisplayNumber(): string {
  return '+6012 583 7277';
}
