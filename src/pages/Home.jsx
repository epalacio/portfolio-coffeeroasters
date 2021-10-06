import { useLayoutEffect } from "react";

import Hero from '../components/Hero.component'
import Collection from '../components/Collection.component'
import Features from '../components/Features.component'
import Works from '../components/Works.component'

const Home = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return ( 
        <div className='mx-6'>
            <Hero />
            <Collection />
            <Features />
            <Works />
        </div>
     );
}
 
export default Home;