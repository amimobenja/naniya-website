export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Naniya Technologies Limited',
    url: 'https://naniya.co.ke',
    logo: 'https://naniya.co.ke/icon-512.png',
    description:
      'Naniya Technologies builds Chama Platform — a WhatsApp-first savings group management tool for Kenya with M-PESA integration.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Neptune Residency, Mararo Road',
      addressLocality: 'Lavington',
      addressRegion: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-701-557-978',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Swahili'],
    },
    sameAs: [
      'https://chama.naniya.co.ke',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Naniya Technologies',
    url: 'https://naniya.co.ke',
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
    url: 'https://chama.naniya.co.ke',
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
