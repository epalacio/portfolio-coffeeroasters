import logo from '../img/logo.svg'
import facebook from '../img/icon-facebook.svg'
import twitter from '../img/icon-twitter.svg'
import instagram from '../img/icon-instagram.svg'

const Footer = () => {
    return ( 
        <div className='bg-darkGrayBlue flex flex-col lg:flex-row items-center p-20 lg:py-0 lg:justify-between mt-16'>
            <img src={logo} alt="coffeeroasters' logo" />
            <div className='py-16 lg:py-8 flex items-center flex-col md:flex-row'>
                <a href="/" className='text-gray hover:text-white m-4'>HOME</a>
                <a href="/" className='text-gray hover:text-white m-4'>ABOUT US</a>
                <a href="/" className='text-gray hover:text-white m-4'>CREATE YOUR PLAN</a>
            </div>
            <div className='flex text-lightCream items-center'>
                <a href="/"><img src={facebook} alt="facebook logo" /></a>
                <a href="/"><img src={twitter} alt="twitter logo" className='mx-8'/></a>
                <a href="/"><img src={instagram} alt="instagram logo" /></a>
            </div>
        </div>
     );
}
 
export default Footer;