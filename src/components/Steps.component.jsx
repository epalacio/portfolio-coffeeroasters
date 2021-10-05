const Steps = () => {
    const steps = [
        {
            'step': '01',
            'title': 'Pick your coffee',
            'description': 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
        },
        {
            'step': '02',
            'title': 'Choose the frequency',
            'description': 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
        },
        {
            'step': '03',
            'title': 'Receive and enjoy!',
            'description': 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
        }
    ]

    return (
        <div className='mt-52 mx-auto bg-stepsMobileImg md:bg-stepsTabletImg lg:bg-stepsDesktopImg bg-cover rounded-md -mx-6'>
            <div>
            </div>
            <div className='flex flex-col md:flex-row mx-auto px-16'>
                {steps.map(step => (
                    <div className='text-center md:text-left my-16 px-8'>
                        <p className='text-heroTitleDesktop text-paleOrange font-fraunces'>{step.step}</p>
                        <h3 className='text-lightCream text-featuresTitleMobile md:text-featuresTitleTablet my-6'>{step.title}</h3>
                        <p className='text-lightCream pr-2 md:pr-16'>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Steps;