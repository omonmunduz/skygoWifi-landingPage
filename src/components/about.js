import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className="w-screen text-center p-2 bg-indigo-300 -mb-9">
      <h3 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl">
        Maecenas sem libero
      </h3>
      <p className="text-base text-gray-600">
        Aliquam lobortis, dui ut fermentum congue, ex felis eleifend odio
      </p>
      <div className="w-screen flex flex-wrap justify-evenly mt-6 p-5">
        <div className="w-9/12 md:w-6/12 lg:w-3/12 p-1 mb-3 bg-white border-2 border-gray-300 rounded shadow-md">
          <StaticImage
            src="../images/noSIM.png"
            width={200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="No physical SIM"
            style={{ marginBottom: `2rem` }}
          />
          <p className="text-base text-gray-600 break-words">
            In hac habitasse platea dictumst. Etiam purus elit, laoreet id
            consectetur vitae, molestie vitae ante. Ut faucibus nisi vitae nisi
            consequat, luctus ullamcorper nulla accumsan. 
          </p>
        </div>
        <div className="w-9/12 md:6/12 lg:w-3/12 max-w-sm p-1 mb-3 bg-white border-2 border-gray-300 rounded shadow-md">
          <StaticImage
            src="../images/wireless.png"
            width={200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Wireless technology"
            style={{ marginBottom: `2rem` }}
          />
          <p className="text-base text-gray-600 break-words">
            In hac habitasse platea dictumst. Etiam purus elit, laoreet id
            consectetur vitae, molestie vitae ante. Ut faucibus nisi vitae nisi
            consequat, luctus ullamcorper nulla accumsan. 
          </p>
        </div>
        <div className="w-9/12 md:w-6/12 lg:w-3/12 p-1 mb-3 bg-white border-2 border-gray-300 rounded shadow-md">
          <StaticImage
            src="../images/portable.png"
            width={200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Portable device"
            style={{ marginBottom: `2rem` }}
          />
          <p className="text-base text-gray-600 break-words">
            In hac habitasse platea dictumst. Etiam purus elit, laoreet id
            consectetur vitae, molestie vitae ante. Ut faucibus nisi vitae nisi
            consequat, luctus ullamcorper nulla accumsan. 
          </p>
        </div>
      </div>
    </section>
  )
}
export default About
