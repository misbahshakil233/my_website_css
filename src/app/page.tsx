import Image from "next/image";
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Destination from './Component/Destinations'
import Featured from './Component/Featured'
import Tips from './Component/Tips'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Featured />
      <Tips />
       <Contact />
       <Footer />
    </div>
     );
}
