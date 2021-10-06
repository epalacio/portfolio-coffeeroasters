import { useLayoutEffect } from "react";

import AboutHero from '../components/AboutHero.component'
import Commitment from '../components/Commitment.component'
import Quality from '../components/Quality.component'
import Headquarters from '../components/Headquarters.component'

const AboutUs = () => {
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <div className='mx-6'>
            <AboutHero />
            <Commitment />
            <Quality />
            <Headquarters />
        </div>
    );
}
 
export default AboutUs;