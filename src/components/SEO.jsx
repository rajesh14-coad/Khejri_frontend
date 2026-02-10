import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords = [],
    image,
    url,
    noindex = false,
    type = 'website',
    author = 'Khejri Guardian Team'
}) => {
    const siteTitle = "Khejri Guardian";

    // Compelling default description optimized for SEO
    const defaultDescription = "Official portal for Khejri Bachao. Learn about the 363 martyrs of Khejarli, the 29 rules of Bishnoi Panth, and the complete 120 Sabad Vani of Guru Jambheshwar.";

    // High-ranking keywords for search engines
    const defaultKeywords = [
        'Bishnoi',
        'Khejri',
        'Jambheshwar',
        '29 Rules',
        '120 Sabad',
        'Khejarli Martyrdom',
        'Environmental Movement',
        'Bishnoi Panth',
        'Khejri Bachao',
        'Guru Jambheshwar',
        'Amrita Devi',
        '363 Martyrs',
        'Bishnoi Community',
        'Environmental Protection',
        'Rajasthan Heritage'
    ];

    const defaultImage = "/images/hero_desert.jpg";
    const siteUrl = import.meta.env.VITE_SITE_URL || "https://khejriguardian.com"; // Use env variable

    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image || `${siteUrl}${defaultImage}`;
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;
    const metaKeywords = keywords.length > 0 ? keywords : defaultKeywords;

    // JSON-LD Structured Data for Organization
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Khejri Guardian",
        "alternateName": "Khejri Bachao Andolan",
        "url": siteUrl,
        "logo": `${siteUrl}/images/logo.png`,
        "description": defaultDescription,
        "foundingDate": "1485",
        "founder": {
            "@type": "Person",
            "name": "Guru Jambheshwar"
        },
        "sameAs": [
            "https://en.wikipedia.org/wiki/Bishnoi",
            "https://en.wikipedia.org/wiki/Khejarli_massacre"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "General Inquiry",
            "email": "contact@khejriguardian.com"
        }
    };

    // JSON-LD Structured Data for Educational Content (Course/Book)
    const educationalSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "29 Rules of Bishnoi Panth",
        "description": "Learn the 29 sacred rules established by Guru Jambheshwar in 1485 for environmental protection and spiritual living.",
        "provider": {
            "@type": "Organization",
            "name": "Khejri Guardian",
            "url": siteUrl
        },
        "educationalLevel": "All Levels",
        "inLanguage": ["en", "hi"],
        "about": [
            {
                "@type": "Thing",
                "name": "Environmental Conservation"
            },
            {
                "@type": "Thing",
                "name": "Bishnoi Philosophy"
            },
            {
                "@type": "Thing",
                "name": "Spiritual Ecology"
            }
        ]
    };

    // JSON-LD for Book (120 Sabad Vani)
    const bookSchema = {
        "@context": "https://schema.org",
        "@type": "Book",
        "name": "120 Sabad Vani",
        "author": {
            "@type": "Person",
            "name": "Guru Jambheshwar"
        },
        "description": "The complete collection of 120 sacred verses (Sabad) by Guru Jambheshwar, founder of the Bishnoi Panth.",
        "inLanguage": ["hi", "en"],
        "datePublished": "1485",
        "publisher": {
            "@type": "Organization",
            "name": "Khejri Guardian"
        },
        "genre": "Religious Text"
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <html lang="en" />
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords.join(', ')} />
            <meta name="author" content={author} />
            <link rel="canonical" href={metaUrl} />

            {/* Language and Locale */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="hi_IN" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
            <meta name="twitter:creator" content="@KhejriGuardian" />

            {/* Additional SEO Tags */}
            <meta name="theme-color" content="#4cd57a" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Robots */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}

            {/* JSON-LD Structured Data - Organization */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>

            {/* JSON-LD Structured Data - Educational Course */}
            <script type="application/ld+json">
                {JSON.stringify(educationalSchema)}
            </script>

            {/* JSON-LD Structured Data - Book (120 Sabad) */}
            <script type="application/ld+json">
                {JSON.stringify(bookSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
