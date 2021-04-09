import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const DeviceInfo = () => {
  return (
    <section className="w-screen flex flex-wrap bg-indigo-200 p-5">
      <div className="w-full md:w-9/12 md:m-auto flex justify-end lg:w-2/4 p-10 ">
        <StaticImage
          src="../images/skygoWifi.jpg"
          width={550}
          height={600}
          quality={95}
          alt="SkyGo Portable Wifi device"
          formats={["AUTO", "WEBP", "AVIF"]}
        />
      </div>
      <div className="w-full flex justify-start md:w-9/12 md:m-auto  lg:w-2/4 p-10 ">
        <div className="w-4/5 lg:w-3/4">
          <h1 className="text-4xl text-indigo-800 md:text-5xl lg:text-6xl font-extrabold">
            SKYGO Portable WiFi
          </h1>
          <p className="text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus sit amet massa nec posuere. Duis viverra consectetur ante
          </p>
          <p className="text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus sit amet massa nec posuere. Duis viverra consectetur ante
          </p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
export default DeviceInfo
