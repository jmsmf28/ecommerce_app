import type { NextPage } from 'next'
import Head from 'next/head'
import { client } from '../lib/client'
import { FooterBanner, HeroBanner, Product } from '../components'


interface IndexPageProps {
  products: Product[],
  bannerData: string
}

const Home: NextPage = ({ products, bannerData }) => {
  return (
    <>
      <div>
        <Head>
          <title>BPreços</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className='products-heading'>
        <HeroBanner />
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>
      <div className='products-container'>
        {['Product 1', 'Product 2', 'Product 3'].map((product) => (
          product
        ))}
      </div>
      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData
    }
  }
}

export default Home
