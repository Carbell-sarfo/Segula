import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LetTalk from '../components/LetTalk'
import WhoWeAre from '../components/WhoWeAre'
import TeamIndex from '../components/OurTeam/TeamIndex'

const AboutPg = () => {
  return (
    <div>
        <Navbar />
        <h1>This is the About Page</h1>
        <WhoWeAre />
        <TeamIndex />
        <LetTalk />
        <Footer />
    </div>
  )
}

export default AboutPg