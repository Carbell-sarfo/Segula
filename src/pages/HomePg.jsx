import ClientSuccess from '../components/ClientSuccess'
import ElevateYourP from '../components/ElevateYourP'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import LetTalk from '../components/LetTalk'
import Navbar from '../components/Navbar'
import OurPackages from '../components/OurPackages'
import OurServices from '../components/OurServices'
import SliderSlick from '../components/SliderSlick'
import WhatWeDo from '../components/WhatWeDo'
import WhoWeAre from '../components/WhoWeAre'

const HomePg = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <WhoWeAre />
        <OurServices />
        <ElevateYourP />
        <WhatWeDo />
        <ClientSuccess />
        <OurPackages />
        <LetTalk />
        <Footer />
    </div>
  )
}

export default HomePg