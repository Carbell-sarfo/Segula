import Footer from '../components/Footer'
import LetTalk from '../components/LetTalk'
import Navbar from '../components/Navbar'
import ServiceIndex from '../components/OurService/ServiceIndex'

const ServicesPg = () => {
  return (
    <div>
        <Navbar />
        <h1>Our Service</h1>
        <ServiceIndex />
        <LetTalk />
        <Footer />
    </div>
  )
}

export default ServicesPg