import aboutQualityMobile from '../img/aboutQualityMobile.jpg'
import aboutQualityTablet from '../img/aboutQualityTablet.jpg'
import aboutQualityDesktop from '../img/aboutQualityDesktop.jpg'

const Quality = () => {
    return ( 
        <div className='flex flex-col-reverse lg:flex-row bg-darkGrayBlue rounded-md mt-20 md:mt-28 p-10'>
            <div className='px-6'>
                <h2 className='text-center lg:text-left text-white text-featuresTitleMobile md:text-featuresTitleTablet lg:text-featuresTitleDesktop mt-10'>Uncompromissing quality</h2>
                <p className='text-lightCream text-center lg:text-left py-6 px-2'>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>
            <div className='w-11/12 mx-auto'>
                <img className='mx-auto rounded-md block md:hidden -mt-24' src={aboutQualityMobile} alt="Poured coffee with flower pattern on top" />
                <img className='mx-auto rounded-md hidden md:block lg:hidden -mt-36' src={aboutQualityTablet} alt="Poured coffee with flower pattern on top" />
                <img className='rounded-md hidden md:hidden lg:block -mt-28' src={aboutQualityDesktop} alt="Poured coffee with flower pattern on top" />
            </div>
        </div>
     );
}
 
export default Quality;