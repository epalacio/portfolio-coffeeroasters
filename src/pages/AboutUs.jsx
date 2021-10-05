import Navbar from '../components/Navbar.component'
import AboutHero from '../components/AboutHero.component'
import Commitment from '../components/Commitment.component'
import Quality from '../components/Quality.component'
import Headquarters from '../components/Headquarters.component'
import Footer from '../components/Footer.component'

const AboutUs = () => {
    return (
        <div className='mx-6'>
            <Navbar />
            <AboutHero />
            <Commitment />
            <Quality />
            <Headquarters />
            <Footer />
        </div>
    );
}
 
export default AboutUs;