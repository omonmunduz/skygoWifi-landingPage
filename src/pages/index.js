import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import About from '../components/about';
import SEO from "../components/seo"

/*
<StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
*/
const IndexPage = () => (
  <Layout>
    <SEO title="SkyGo Wifi" />
    <div className="w-screen flex flex-wrap bg-indigo-900 p-10 ">
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
      <div className="w-full md:w-9/12 md:m-auto flex justify-end lg:w-2/4 p-10 border-2 border-red">

      </div>
    </div>
    <div className="bg-indigo-300 ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#312e81" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,64C384,64,480,64,576,101.3C672,139,768,213,864,213.3C960,213,1056,139,1152,133.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    <About/>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a5b4fc" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,64C384,64,480,64,576,101.3C672,139,768,213,864,213.3C960,213,1056,139,1152,133.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  </Layout>
)

export default IndexPage
