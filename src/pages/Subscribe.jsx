import { useLayoutEffect } from "react";

import Choices from "../components/Choices.component";
import CreatePlan from "../components/CreatePlan.component";
import Steps from "../components/Steps.component";

const Subscribe = () => {
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return ( 
        <div className='mx-6'>
            <CreatePlan />
            <Steps />
            <Choices />
        </div>
     );
}
 
export default Subscribe;