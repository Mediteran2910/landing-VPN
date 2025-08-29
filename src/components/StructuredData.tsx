import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://your-domain.com/#organization",
        "name": "VPN Router Solution",
        "url": "https://your-domain.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://your-domain.com/router.png",
          "width": 400,
          "height": 400
        },
        "description": "Revolutionary VPN router with plug & play setup, residential IP access, and lifetime protection. No monthly fees.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-XXX-XXX-XXXX",
          "contactType": "Customer Service"
        }
      },
      {
        "@type": "Product",
        "@id": "https://your-domain.com/#product",
        "name": "VPN Router Solution",
        "description": "Revolutionary VPN router with plug & play setup, residential IP access, and lifetime protection. No monthly fees - secure your entire network with our hardware solution.",
        "brand": {
          "@type": "Brand",
          "name": "VPN Router Solution"
        },
        "category": "Network Security Hardware",
        "image": [
          "https://your-domain.com/1-router.webp",
          "https://your-domain.com/2-router.webp",
          "https://your-domain.com/3-router.webp"
        ],
        "offers": [
          {
            "@type": "Offer",
            "name": "Single Router",
            "price": "85",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "seller": {
              "@id": "https://your-domain.com/#organization"
            }
          },
          {
            "@type": "Offer",
            "name": "Pair Routers",
            "price": "150",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2025-12-31",
            "seller": {
              "@id": "https://your-domain.com/#organization"
            }
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://your-domain.com/#website",
        "url": "https://your-domain.com",
        "name": "VPN Router Solution",
        "description": "Revolutionary VPN router with plug & play setup and lifetime protection",
        "publisher": {
          "@id": "https://your-domain.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://your-domain.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes this VPN router different?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our VPN router offers a one-time payment with no monthly fees, plug & play setup, and access to your residential IP from anywhere in the world."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a monthly subscription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, there are no monthly fees or subscriptions. It's a one-time payment for lifetime access."
            }
          },
          {
            "@type": "Question",
            "name": "How long does setup take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Setup takes approximately 5 minutes with our plug & play technology. No technical expertise required."
            }
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}