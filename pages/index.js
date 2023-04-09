import { Inter } from 'next/font/google'
import Head from 'next/head'
import AllCards from './components/AllCards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
  <Head>
    
    <title>Code Lancashire</title>
  </Head>
     <div className=' flex items-center h-screen '>
        <AllCards />
     </div>
      </>

  )
}
