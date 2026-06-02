// import { useState } from 'react'
// import Hero from '../components/Hero'
// import Productsheader from '../components/productsheader';
// import Services from '../components/Services';
// import Newsletter from '../components/NewsLetter';
// import Footer from '../components/Footer';
// import LatestProducts from '../components/latestProducts';
// import BestSellingProducts from '../components/bestSellingProducts';
// import Navbar from '../components/Navbar';


import { useState } from 'react'
import Hero from '@components/Hero'
import Productsheader from '@components/productsheader';
import Services from '@components/Services';
import Newsletter from '@components/NewsLetter';
import Footer from '@components/Footer';
import LatestProducts from '@components/latestProducts';
import BestSellingProducts from '@components/bestSellingProducts';
import Navbar from '@components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <LatestProducts/>
    <BestSellingProducts/>
      <Services/>
      <Newsletter/>
      <Footer/>
  
    </>
  )
}

export default App
