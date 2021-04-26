import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const DeviceInfo = () => {
  return (
    <>
    <section className="w-full flex flex-wrap pt-2 pb-16 ">
      <div className="w-full md:w-9/12 md:m-auto flex justify-end lg:w-2/4 p-13 ">
        <StaticImage
          src="../images/skygo-hotspot.jpg"
          alt="Skygo Wifi device"
          width={550}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
        />
      </div>
      <div className="w-full flex justify-start md:w-9/12 md:m-auto  lg:w-2/4 p-10 ">
        <div className="w-4/5 lg:w-3/4">
          <h1 className="text-4xl text-indigo-800 md:text-5xl lg:text-6xl font-extrabold">
            Skygo WiFi 
          </h1>
          <p className="text-base text-gray-400">
          1) Power On.<br/>
          Make sure the device is fully charged. Turn it on.
          </p>
          <p className="text-base text-gray-400">
          2) Identify WiFi hotspot.<br/>
          Select the wifi hotspot name form your networks the password to connect Successfully.
          </p>
          <p className="text-base text-gray-400">
          2) Enjoy Unlimited  WiFi.<br/>
          Now you're free to enjoy Wifi wherever you go.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
export default DeviceInfo
