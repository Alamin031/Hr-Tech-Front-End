import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Products from './Component/product'
import TNavbar from './Layout/TNavbar'
const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false
})
const Title = dynamic(() => import('./Layout/title'), {
  ssr: false
})
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>

    <Title page="Home"></Title>
     <Layout>
      <TNavbar />
      {/* <Header page="Home"></Header> */}
      <br></br>
      {/* <FeaturedCategory /> */}
      <Products />
      {/* <Link href="/about">About</Link>
      <Link href="/Component/SignUp">SignUp</Link> */}
      &emsp;
      </Layout>

    </>
  )
}


