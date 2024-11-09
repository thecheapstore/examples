export default function head({ title, metaDescription, url, openGraphImageName }) {
  return `
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Meta -->
    <title>${title} | Edge Functions on Netlify</title>
    <meta name="description" content="${metaDescription}" />

    <!-- Fonts -->
    <link rel="preload" href="https://example-styles.netlify.app/fonts/PacaembuVar-latin.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="https://example-styles.netlify.app/fonts/MulishVar-latin.woff2" as="font" type="font/woff2" crossorigin/>

    <!-- Netlify demo styles -->
    <link rel="stylesheet" href="https://example-styles.netlify.app/styles.css">


    <!-- Favicons -->
    <meta name="theme-color" content="#ffffff" />
    <link rel="icon" href="/favicon.svg" />
    <link rel="mask-icon" href="/mask-icon.svg" color="#000000" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
  

    <!-- Open Graph -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@netlify" />
    <meta name="twitter:creator" content="@netlify" />

    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${metaDescription}" />
    <meta property="og:locale" content="en_US" />

    <meta property="og:image" content="https://res.cloudinary.com/netlify/image/upload/c_fit,g_west,h_400,co_rgb:FFFFFFFF,l_text:netlify.com:Pacaembu-Bold.ttf_57:Netlify%20Edge%20Functions:%0A${encodeURI(
      title,
    )},w_1053,x_46/v1619123320/netlify.com/default-og-background-learn-more.png" />
    <meta property="og:image:alt" content="A Netlify branded open graph image representing ${title}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Edge Functions on Netlify" />

    <script src="/lib/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-X2FMMZSSS9"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-X2FMMZSSS9');
    </script>
  </head>
  `;
}
