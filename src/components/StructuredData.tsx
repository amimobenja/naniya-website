import { ADDRESS, PHONE, PRODUCT_URLS, SITE_URL } from '@/lib/contact';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Naniya Technologies Limited',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      'Naniya Technologies builds Chama Platform — a WhatsApp-first savings group management tool for Kenya with M-PESA integration.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${ADDRESS.building}, ${ADDRESS.street}, ${ADDRESS.neighborhood}`,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.city,
      addressCountry: ADDRESS.countryCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE.hyphenated,
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Swahili'],
    },
    sameAs: [
      PRODUCT_URLS.chama,
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Naniya Technologies',
    url: SITE_URL,
    description:
      'Chama Platform and technology solutions for Kenya',
    publisher: {
      '@type': 'Organization',
      name: 'Naniya Technologies Limited',
    },
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Chama Platform',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'WhatsApp',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KES',
    },
    description:
      'WhatsApp-first savings group management for Kenya with M-PESA integration',
    url: PRODUCT_URLS.chama,
    author: {
      '@type': 'Organization',
      name: 'Naniya Technologies Limited',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareAppSchema),
        }}
      />
    </>
  );
}
