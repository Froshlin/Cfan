/* eslint-disable no-unused-vars */
import Navbar from "../../components/Navbar"
import Content from "./components/Content"
import Founder from "./components/Founder"
import Hero from "./components/Hero"
import Staff from "./components/Staff"

function About() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Founder />
      <Content />
      {/* <Staff /> */}
    </div>
  )
}

export default About