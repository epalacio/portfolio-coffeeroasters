import coffeeBean from '../img/icon-coffee-bean.svg'
import gift from '../img/icon-gift.svg'
import truck from '../img/icon-truck.svg'

const Features = () => {
    const features = [
        {
            'imgUrl': coffeeBean,
            'title': 'Best quality',
            'description': 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
        },
        {
            'imgUrl': gift,
            'title': 'Exclusive benefits',
            'description': 'Special offers and swag when you subscribe, including 30% off your first shipment.'
        },
        {
            'imgUrl': truck,
            'title': 'Free shipping',
            'description': 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
        },
    ]

    return ( 
        <div className='mx-auto mt-16 mb-collectionCardMarginBottomMobile md:mb-96 lg:mb-32 bg-darkGrayBlue rounded-md pt-16 h-collectionContainerMobile md:h-collectionContainer'>
            <h2 className='text-center text-white text-featuresTitleMobile md:text-featuresTitleTablet lg:text-featuresTitleDesktop'>Why choose us?</h2>
            <p className='text-lightCream pt-6 pb-12 px-16 text-center max-w-screen-sm mx-auto'>A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give  you a more impactful experience on every level.</p>
            <div className='mx-auto flex flex-col lg:flex-row -mb-72'>
                {features.map(feature => (
                    <div className='bg-darkCyan rounded-md max-w-collectionCard md:max-w-collectionCardTablet lg:max-w-collectionCardDesktop h-collectionCard md:h-collectionCardTablet lg:h-collectionCard flex flex-col items-center text-center md:text-left lg:text-center my-6 justify-around p-6 mx-auto flex flex-col md:flex-row lg:flex-col'>
                        <img className='max-w-collectionCardIcon' src={feature.imgUrl} alt={feature.title} />
                        <div className='md:ml-8 lg:ml-0'>
                            <h3 className='text-white text-collectionTitle mb-12 md:mb-2 lg:mb-12'>{feature.title}</h3>
                            <p className='text-lightCream'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Features;