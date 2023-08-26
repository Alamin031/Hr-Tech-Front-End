import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import ProductForm from './Component/ProductList'
// import Products from './Component/product'
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

      {/* <Header page="Home"></Header> */}
      <br></br>
      
      <ProductForm/>
      {/* <FeaturedCategory /> */}
      {/* <Products /> */}
      &emsp;
      </Layout>

    </>
  )
}


