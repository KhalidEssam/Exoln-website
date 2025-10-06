import { Helmet } from "react-helmet-async";

export const SEO = ({ title, description, keywords  }: {
    title: string;
    description: string;
    keywords?: string;
}) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
);
