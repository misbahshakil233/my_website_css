
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Destination from './Component/Destinations'
import Featured from './Component/Featured'
import Tips from './Component/Tips'
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Travel from './Component/Travel'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <About />
      <Featured />
   
      <Tips />
       <Contact />
       <Footer />
    </div>
     );
}
