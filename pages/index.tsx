import type { NextPage } from 'next'
import Head from 'next/head'
import { FooterBanner, HeroBanner, Product } from '../components'


const Home: NextPage = () => {
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
    </>
  )
}

export default Home
