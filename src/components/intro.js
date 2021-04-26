import React from 'react';

const Intro = () => {

    return (
        <>
        
        <div className ="w-11/12 flex justify-center flex-col mt-16 ">
            <div className="w-full">
                <h2 className="text-4xl text-center text-indigo-600 md:text-5xl lg: text-6xl">Hello Smart Hotspot</h2>
                <p className="text-center text-base text-gray-500">Easy to use device, works without a SIM card.</p>
            </div>

            <div className="bg-gray-50 w-full">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
                    <span className="block"><span className="text-yellow-500 ">1) </span>Order/Rent a Skygo WiFi from our website or from our dealers at the location of your choice</span>
                    <span className="block text-gray-700 text-base mt-3">Create an account on www.skygowifi.com</span>
                    <span className="block text-gray-700 text-base mt-3">Pickup your device from one of our dealers</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="ml-3 inline-flex rounded-md shadow animate-bounce">
                        <a href="http://orders.skygowifi.com/ordersbeta/Index.aspx" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                        Learn more
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-50 w-full">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
                    <span className="block"><span className="text-yellow-500 ">1) </span>Select a desired region & package</span>
                    <span className="block text-gray-700 text-base mt-3">Select a country or a region </span>
                    <span className="block text-gray-700 text-base mt-3">Select a package that best suits your needs</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="ml-3 inline-flex rounded-md shadow animate-bounce">
                        <a href="http://orders.skygowifi.com/ordersbeta/Index.aspx" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                        Learn more
                        </a>
                    </div>
                    </div>
                </div>
            </div>

        </div>
       
        </>
    )
};
export default Intro;