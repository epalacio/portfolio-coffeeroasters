import Choices from "../components/Choices.component";
import CreatePlan from "../components/CreatePlan.component";
import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.component";
import Steps from "../components/Steps.component";

const Subscribe = () => {
    return ( 
        <div className='mx-6'>
            <Navbar />
            <CreatePlan />
            <Steps />
            <Choices />
            <Footer />
        </div>
     );
}
 
export default Subscribe;