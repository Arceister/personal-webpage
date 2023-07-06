import Head from "next/head";
import { FC } from "react";

const Seo: FC = () => {
  const meta = {
    title: 'Jagad Personal Webpage',
    description: 'Jagad Nabil Tuah Imanda personal webpage.',
    type: 'website',
    robots: 'follow, index',
    siteName: 'imandajagad.dev',
    url: 'https://imandajagad.dev'
  }

  return (
    <Head>
      <title>Jagad Personal Webpage</title>
      <meta content={meta.description} name="description" />
      <meta name="robots" content={meta.robots} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content={meta.siteName} />
      
    </Head>
  )
}

export default Seo;