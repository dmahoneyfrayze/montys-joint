import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Monty's Joint",
        "image": "https://montysjoint.com/assets/logo-main.png",
        "url": "https://montysjoint.com",
        "telephone": "+18073430001",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "513 Victoria Ave E",
            "addressLocality": "Thunder Bay",
            "addressRegion": "ON",
            "postalCode": "P7C 1A8",
            "addressCountry": "CA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.396,
            "longitude": -89.246
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Monday",
                "opens": "17:00",
                "closes": "22:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "11:30",
                "closes": "22:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "12:00",
                "closes": "22:00"
            }
        ],
        "servesCuisine": ["Gastropub", "Burgers", "American"],
        "priceRange": "$$"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
