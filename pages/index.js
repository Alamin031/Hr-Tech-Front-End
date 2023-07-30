import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
// import FeaturedCategory from './Component/FeaturedCategory'
import Products from './Component/product'


const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false
})
const Title = dynamic(() => import('./Layout/title'), {
  ssr: false
})


const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <>
//     <main>
//     <Title page="Home"></Title>
//      <Layout>
//       {/* <Header page="Home"></Header> */}
//       Hello World
//       <br></br>
//       <Link href="/about">About</Link>
//       &emsp;
//       </Layout>

//       </main>
//     </>
//   )
// }

export default function Home() {
  return (
    <>
    <Title page="Home"></Title>
     <Layout>
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
