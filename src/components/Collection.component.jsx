import granEspresso from '../img/image-gran-espresso.png'
import planalto from '../img/image-planalto.png'
import piccollo from '../img/image-piccollo.png'
import danche from '../img/image-danche.png'

const Collection = () => {

    const collection = [
        {
            'id': '0',
            'imgUrl': granEspresso,
            'coffee': 'Gran Espresso',
            'description': 'Light and flavorful blend with cocoa and black pepper for an intense experience'
        },
        {
            'id': '1',
            'imgUrl': planalto,
            'coffee': 'Planalto',
            'description': 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
        },
        {
            'id': '2',
            'imgUrl': piccollo,
            'coffee': 'Piccollo',
            'description': 'Mild and smooth blend featuring notes of toasted almond and dried cherry'
        },
        {
            'id': '3',
            'imgUrl': danche,
            'coffee': 'Danche',
            'description': 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
        },
    ]
    return ( 
        <div className='mx-auto mt-16'>
            <h2 className='text-collectionMobile md:text-collectionTablet lg:text-collectionDesktop text-center bg-gradient-to-b from-gray to-white text-transparent bg-clip-text'>our collection</h2>
            <div className='flex flex-col lg:flex-row mt-5 md:-mt-28 lg:-mt-36 text-darkGrayBlue'>
                {collection.map(coffee => (
                    <div className='flex flex-col md:flex-row lg:flex-col md:justify-around items-center mx-auto' key={coffee.id}>
                        <img className='max-w-collectionCoffee mt-16' src={coffee.imgUrl} alt={coffee.coffee} /> 
                        <div className='text-collectionTitle my-5 text-center md:text-left lg:text-center md:max-w-collectionDescTablet'>
                            <h3 className='text-collectionTitle'>{coffee.coffee}</h3>
                            <p className='text-collectionDescription'>{coffee.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Collection;