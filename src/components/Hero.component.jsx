const Hero = () => {
    return ( 
        <div className='text-center md:text-left mx-auto rounded-md px-2 md:px-20 py-12 flex items-center bg-cover bg-heroMobileImg md:bg-heroDesktopImg'>
            <div className='w-11/12 md:w-1/2 mx-auto md:mx-0'>
                <h1 className='text-heroTitleMobile sm:text-heroTitleTablet md:text-heroTitleDesktop text-white leading-none'>Great coffee made simple.</h1>
                <p  className='text-lightCream my-12 pr-0 md:pr-32 leading-relaxed'>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <a  className='block mx-auto md:mx-0 py-4 px-6 text-white bg-darkCyan hover:bg-viking max-w-max rounded-md font-fraunces font-bold' href="/">Create your plan</a>
            </div>
        </div>
     );
}
 
export default Hero;