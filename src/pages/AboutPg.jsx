import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LetTalk from '../components/LetTalk'
import WhoWeAre from '../components/WhoWeAre'
import TeamIndex from '../components/OurTeam/TeamIndex'

const AboutPg = () => {
  return (
    <div>
        <Navbar />
        <section className="hero">
          <h1>Who We are</h1>
        </section>
        <WhoWeAre />
        <TeamIndex />
        <LetTalk />
        <Footer />
    </div>
  )
}

export default AboutPg