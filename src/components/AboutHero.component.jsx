const AboutHero = () => {
    return ( 
        <div className='text-center md:text-left mx-auto rounded-md px-2 md:px-20 py-12 flex items-center bg-cover bg-aboutHeroMobileImg md:bg-aboutHeroTabletImg lg:bg-aboutHeroDesktopImg'>
            <div className='w-11/12 md:w-1/2 mx-auto md:mx-0'>
                <h1 className='text-heroTitleMobile sm:text-heroTitleTablet md:text-heroTitleDesktop text-white leading-none'>About Us</h1>
                <p  className='text-lightCream my-12 pr-0 md:pr-32 leading-relaxed'>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
            </div>
        </div>
     );
}
 
export default AboutHero;