export const PHONE = {
  display: '+254 701 557 978',
  e164: '+254701557978',
  raw: '254701557978',
  hyphenated: '+254-701-557-978',
} as const;

export const EMAIL = 'info@naniya.co.ke';

export const WHATSAPP_URL = `https://wa.me/${PHONE.raw}`;
export const TEL_URL = `tel:${PHONE.e164}`;
export const MAILTO_URL = `mailto:${EMAIL}`;

export const SITE_URL = 'https://naniya.co.ke';
export const SITE_DOMAIN = 'naniya.co.ke';

export const PRODUCT_URLS = {
  chama: 'https://chama.naniya.co.ke',
  lipaclear: 'https://lipaclear.naniya.co.ke',
} as const;

export const PRODUCT_DOMAINS = {
  chama: 'chama.naniya.co.ke',
  lipaclear: 'lipaclear.naniya.co.ke',
} as const;

export const ADDRESS = {
  building: 'Neptune Residency',
  street: 'Mararo Road',
  neighborhood: 'Lavington',
  city: 'Nairobi',
  region: 'Nairobi County',
  country: 'Kenya',
  countryCode: 'KE',
} as const;

export const GOOGLE_MAPS_URL =
  'https://maps.google.com/?q=Neptune+Residency+Mararo+Road+Lavington+Nairobi';

export function whatsAppUrlWithMessage(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
