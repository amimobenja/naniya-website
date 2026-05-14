import { ADDRESS, PHONE, PRODUCT_URLS, SITE_URL } from '@/lib/contact';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Naniya Technologies Limited',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      'Naniya Technologies builds Chama Platform and LipaClear — WhatsApp-first chama management and M-PESA reconciliation tools for Kenya.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${ADDRESS.building}, ${ADDRESS.street}, ${ADDRESS.neighborhood}`,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
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
      PRODUCT_URLS.lipaclear,
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Naniya Technologies',
    url: SITE_URL,
    description:
      'Chama Platform, LipaClear, and technology solutions for Kenya',
    publisher: {
      '@type': 'Organization',
      name: 'Naniya Technologies Limited',
    },
  };

  const chamaAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Chama Platform',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
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

  const lipaClearAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LipaClear',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    description:
      'Automated M-PESA reconciliation SaaS for Kenyan SMEs. Upload CSV statements, get instant variance analysis, PDF reports, and WhatsApp alerts.',
    url: PRODUCT_URLS.lipaclear,
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
          __html: JSON.stringify(chamaAppSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lipaClearAppSchema),
        }}
      />
    </>
  );
}
