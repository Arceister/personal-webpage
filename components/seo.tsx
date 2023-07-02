import Head from "next/head";

const Seo = () => {
  const meta = {
    title: 'Jagad\'s Personal Webpage',
    description: 'A webpage to publish writings or to express opinions about programming/tech stuffs',
    type: 'website',
    robots: 'follow, index'
  }

  return (
    <Head>
      <title>Jagad's Personal Webpage</title>
      <meta content={meta.description} name="description" />
      <meta name="robots" content={meta.robots} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
    </Head>
  )
}

export default Seo;