/* eslint-disable no-unused-vars */
import Hero from "./components/Hero"
import Good from "./components/Good"
import About from "./components/About"
import Business from "./components/Business"
import Nav from "../components/Nav"
import Count from "./components/Count"

function Home() {
  return (
    <div className="mx-auto bg-white">
      <Nav />
      <Hero />
      <Count />
      <Business />
      <Good />
      <About />
    </div>
  )
}

export default Home