import Head from 'next/head'
import AllCards from './components/AllCards'
import { cars } from '@/data/cars'

export async function getStaticProps(context) {
  
  return {
    props: {
      car:cars,
    }, // will be passed to the page component as props
  }
}

export default function Home({car}) {
  return (
  <>
  <Head>
    
    <title>Code Lancashire</title>
  </Head>
     <div className=' flex items-center h-screen '>
        <AllCards data={car} />
     </div>
      </>

  )
}
