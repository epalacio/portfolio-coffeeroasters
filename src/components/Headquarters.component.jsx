import australia from '../img/illustration-australia.svg'
import canada from '../img/illustration-canada.svg'
import uk from '../img/illustration-uk.svg'

const Headquarters = () => {
    const locations = [
        {
            'image': uk,
            'title': 'United Kingdom',
            'address': [
                '68  Asfordby Rd',
                'Alcaston',
                'SY6 1YA',
                '+44 1241 918425'
            ]
        },
        {
            'image': canada,
            'title': 'Canada',
            'address': [
                '1528  Eglinton Avenue',
                'Toronto',
                'Ontario M4P 1A6',
                '+1 416 485 2997'
            ]
        },
        {
            'image': australia,
            'title': 'Australia',
            'address': [
                '36 Swanston Street',
                'Kewell',
                'Victoria',
                '+61 4 9928 3629'
            ]
        },
    ]

    return ( 
        <div className='mt-36'>
            <h2 className='text-center lg:text-left text-gray text-featuresTitleMobile md:text-featuresTitleTablet lg:text-featuresTitleDesktop'>Our headquarters</h2>
            <div>
            </div>
            <div className='flex flex-col md:flex-row mx-auto justify-between'>
                {locations.map(location => (
                    <div className='text-center md:text-left my-16'>
                        <img className='mx-auto md:ml-0' src={location.image} alt={`Silhouette of ${location.title}`} />
                        <h3 className='text-darkGrayBlue text-featuresTitleMobile md:text-featuresTitleTablet my-6'>{location.title}</h3>
                        {location.address.map((addy) => (
                            <p className='text-darkGrayBlue pr-2 md:pr-16'>{addy}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Headquarters;