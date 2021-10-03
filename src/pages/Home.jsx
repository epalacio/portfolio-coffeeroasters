import Nav from '../components/Navbar.component'
import Hero from '../components/Hero.component'
import Collection from '../components/Collection.component'
import Features from '../components/Features.component'
import Works from '../components/Works.component'
import Footer from '../components/Footer.component'

const Home = () => {
    return ( 
        <div>
            <Nav />
            <Hero />
            <Collection />
            <Features />
            <Works />
            <Footer />
        </div>
     );
}
 
export default Home;