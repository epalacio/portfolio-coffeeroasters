import { useState } from 'react';

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Choices = () => {



    return ( 
        <div className="w-full px-4 pt-16">
                <div className="w-full p-2 mx-auto">
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex mt-12 justify-between w-full px-4 py-2 text-collectionTitle font-bold text-left text-gray flex justify-between items-center">
                            <span>How do you drink your coffee?</span>
                            <ChevronDownIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-darkCyan`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col md:flex-row">
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Capsule</h3>
                                <p>Compatible with Nespresso systems and similar brewers</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Filter</h3>
                                <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Espresso</h3>
                                <p>Dense and finely ground beans for an intense, flavorful experience</p>
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex mt-12 justify-between w-full px-4 py-2 text-collectionTitle font-bold text-left text-gray flex justify-between items-center">
                            <span>What type coffee?</span>
                            <ChevronDownIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-darkCyan`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col md:flex-row">
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Single Origin</h3>
                                <p>Distinct, high quality coffee from a specific family-owned farm</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Decaf</h3>
                                <p>Just like regular coffee, except the caffeine has been removed</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Blended</h3>
                                <p>Combination of two or three dark roasted beans of organic coffees</p>
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex mt-12 justify-between w-full px-4 py-2 text-collectionTitle font-bold text-left text-gray flex justify-between items-center">
                            <span>How much would you like?</span>
                            <ChevronDownIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-darkCyan`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col md:flex-row">
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>250g</h3>
                                <p>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>500g</h3>
                                <p>Perfect option for a couple. Yields about 40 delectable cups.</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>1000g</h3>
                                <p>Perfect for offices and events. Yields about 90 delightful cups.</p>
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex mt-12 justify-between w-full px-4 py-2 text-collectionTitle font-bold text-left text-gray flex justify-between items-center">
                            <span>Want us to grind them?</span>
                            <ChevronDownIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-darkCyan`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col md:flex-row">
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Wholebean</h3>
                                <p>Best choice if you cherish the full sensory experience</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Filter</h3>
                                <p>For drip or pour-over coffee methods such as V60 or Aeropress</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Cafetiére</h3>
                                <p>Course ground beans specially suited for french press coffee</p>
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex mt-12 justify-between w-full px-4 py-2 text-collectionTitle font-bold text-left text-gray flex justify-between items-center">
                            <span>How often should we deliver?</span>
                            <ChevronDownIcon
                            className={`${
                                open ? 'transform rotate-180' : ''
                            } w-5 h-5 text-darkCyan`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 flex flex-col md:flex-row">
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Every week</h3>
                                <p>$7.20 per shipment. Includes free first-class shipping.</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Every 2 weeks</h3>
                                <p>$9.60 per shipment. Includes free priority shipping.</p>
                            </div>
                            <div className='rounded-md bg-isabelline hover:bg-paleOrange cursor-pointer px-12 pb-8 pt-8 md:pb-28 m-2'>
                                <h3 className='text-darkGrayBlue text-collectionTitle mb-6'>Every month</h3>
                                <p>$12.00 per shipment. Includes free priority shipping.</p>
                            </div>
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                </div>
                <div className='rounded-md bg-darkGrayBlue p-8 my-8'>
                    <p className='text-gray text-collectionDescription mb-6'>ORDER SUMMARY</p>
                    <h3 className='text-white text-collectionTitle'>“I drink my coffee as <span>Filter</span>, with a <span className='text-darkCyan'>Decaf</span> type of bean. <span className='text-darkCyan'>250g</span> ground ala <span className='text-darkCyan'>Cafetiére</span>, sent to me <span className='text-darkCyan'>Every Week</span>."</h3>
                </div>
                <a  className='block mx-auto mb-6 py-4 px-6 text-white bg-darkCyan hover:bg-viking max-w-max rounded-md font-fraunces font-bold' href="/">Create your plan</a>
            </div>
     );
}
 
export default Choices;