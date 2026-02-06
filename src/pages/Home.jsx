import Hero from "../components/Hero.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import About from "../components/About.jsx"

function Home() {
  return (
    <div>
<Navbar></Navbar>
<Hero></Hero>
<About></About>
<Footer></Footer>
    </div>
  )
}

export default Home