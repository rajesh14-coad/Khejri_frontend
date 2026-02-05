import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords = [], image, url, noindex = false }) => {
    const siteTitle = "Khejri Guardian";
    const defaultDescription = "Dedicated to the Khejri Bachao Andolan and the legacy of the Bishnoi community. Join us in protecting nature.";
    const defaultImage = "https://images.unsplash.com/photo-1548560781-a7a07d9d33db?q=80&w=1200"; // Use a specific default image
    const siteUrl = "http://localhost:5173"; // Should be env variable in prod

    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />

            {/* No Index for admin/private pages */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}
        </Helmet>
    );
};

export default SEO;
