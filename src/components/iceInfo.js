import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IceInfo = () => {
  return (
    <>
    <section className="w-full flex flex-wrap pt-2 pb-16 ">
      <div className="w-full md:w-9/12 md:m-auto flex justify-end lg:w-2/4 p-13 ">
        <StaticImage
          src="../images/ice.jpg"
          alt="ICE Currency exchange"
          width={550}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
        />
      </div>
      <div className="w-full flex justify-start md:w-9/12 md:m-auto  lg:w-2/4 p-10 ">
        <div className="w-4/5 lg:w-3/4">
          <h1 className="text-4xl text-indigo-800 md:text-5xl lg:text-6xl font-extrabold">
            ICE Locations
          </h1>
          <p className="text-base text-gray-400">
            Our partners ICE have terminals at all<br/> major airports around the world
          </p>
          <p className="text-base text-gray-400">
            You can choose from which aiport you wantbt <br/> to pick up your device from our website
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
export default IceInfo
