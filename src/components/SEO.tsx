import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  socialTitle?: string;
  socialDescription?: string;
  description: string;
  canonical: string;
  schema?: object;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  published?: string;
  modified?: string;
}

export default function SEO({ title, description, canonical, schema, type = "website", image = "https://orvalia.com.br/social/orvalia-preview-v1.jpg", imageAlt = "Orvalia Studio. Seu negócio vale mais do que parece. Estratégia de marca, identidade visual e sites.", published, modified, socialTitle, socialDescription }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:title" content={socialTitle || title} />
      <meta property="og:description" content={socialDescription || description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Orvalia Studio" />
      
      <meta property="og:locale" content="pt_BR" />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:secure_url" content={image} />}
      {image && <meta property="og:image:type" content={image.split("?")[0].endsWith(".png") ? "image/png" : "image/jpeg"} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      {published && <meta property="article:published_time" content={`${published}T12:00:00-03:00`} />}
      {modified && <meta property="article:modified_time" content={`${modified}T12:00:00-03:00`} />}
      {type === "article" && <meta name="author" content="Orvalia Studio" />}
      {image && <meta name="twitter:image" content={image} />}
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle || title} />
      <meta name="twitter:description" content={socialDescription || description} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema).replace(/</g, "\\u003c")}
        </script>
      )}
    </Helmet>
  );
}
