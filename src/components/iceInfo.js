import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IceInfo = () => {
  return (
    <section className="w-screen flex flex-wrap bg-indigo-200 p-5 -mb-16">
      <div className="w-full flex justify-end md:w-9/12 md:m-auto  lg:w-2/4 p-10 ">
        <div className="w-4/5 lg:w-3/4">
          <h1 className="text-4xl text-indigo-800 md:text-5xl lg:text-6xl font-extrabold">
            ICE Locations
          </h1>
          <p className="text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus sit amet massa nec posuere. Duis viverra consectetur ante
          </p>
          <p className="text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus sit amet massa nec posuere. Duis viverra consectetur ante
          </p>
        </div>
      </div>
      <div className="w-full md:w-9/12 md:m-auto flex justify-start lg:w-2/4 p-10 ">
        <StaticImage
          src="../images/ice.jpg"
          alt="ICE Currency exchange"
          width={550}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
        />
      </div>
    </section>
  )
}
export default IceInfo
