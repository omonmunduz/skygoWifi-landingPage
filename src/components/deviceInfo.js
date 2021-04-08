import React from 'react';



const DeviceInfo = () => {
    
    return (
        <section className="w-screen flex flex-wrap bg-indigo-200 p-5">
      <div className="w-full md:w-9/12 md:m-auto flex justify-end lg:w-2/4 p-10 border-2 border-red">

      </div>
      <div className="w-full flex justify-center md:w-9/12 md:m-auto  lg:w-2/4 p-10 border-2 border-red">
        <div className="w-4/5 lg:w-3/4">
          <h1 className="text-4xl text-white md:text-5xl lg:text-6xl">SKYGO Portable WiFi</h1>
          <p className="text-base text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus sit amet 
          massa nec posuere. Duis viverra consectetur ante</p>
          <p className="text-base text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus sit amet 
          massa nec posuere. Duis viverra consectetur ante</p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Get Started
</button>
        </div>
      </div>
        </section>
    )

};
export default DeviceInfo;