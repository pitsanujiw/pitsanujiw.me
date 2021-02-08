import React from 'react';

import { Config } from '@/utils';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import Head from 'next/head';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1"
        key="viewport"
      />
      <link
        rel="apple-touch-icon"
        href={`${process.env.baseUrl}/apple-touch-icon.png`}
        key="apple"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.baseUrl}/favicon-32x32.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.baseUrl}/favicon-16x16.png`}
        key="icon16"
      />
      <link
        rel="icon"
        href={`${process.env.baseUrl}/favicon.ico`}
        key="favicon"
      />
    </Head>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: Config.locale,
        site_name: Config.site_name,
      }}
    />
    <SocialProfileJsonLd
      type="Person"
      name="Pitsanu `Jiw`"
      url="https://jiwpitsanu.netlify.app/"
      sameAs={[
        'http://www.facebook.com/pitsanujiww',
        'http://instagram.com/pitsanujiw',
        'http://www.linkedin.com/in/pitsanujiw',
      ]}
    />
  </>
);

export { Meta };
