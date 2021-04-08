import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import About from '../components/about';
import DeviceInfo from '../components/deviceInfo';
import IceInfo from '../components/iceInfo';
import WifiWebsite from '../components/wifiWebsite';
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
      <div className="w-full flex md:justify-end md:w-9/12 md:m-auto  lg:w-2/4 p-10">
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
      <div className="w-full md:w-9/12 md:m-auto flex md:justify-start lg:w-2/4 p-5">
        <StaticImage
        src="../images/Email_PNG.png"
        width={500}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Emails"
        style={{ marginBottom: `1.45rem` }}
      />
      </div>
    </div>
    <div className="bg-indigo-300 ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#312e81" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,64C384,64,480,64,576,101.3C672,139,768,213,864,213.3C960,213,1056,139,1152,133.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    <About/>
    <div className="bg-indigo-200">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a5b4fc" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,64C384,64,480,64,576,101.3C672,139,768,213,864,213.3C960,213,1056,139,1152,133.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
    <DeviceInfo />
    <IceInfo />
    <div className="bg-yellow-200">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c7d2fe" fill-opacity="1" d="M0,288L26.7,282.7C53.3,277,107,267,160,218.7C213.3,171,267,85,320,74.7C373.3,64,427,128,480,165.3C533.3,203,587,213,640,229.3C693.3,245,747,267,800,272C853.3,277,907,267,960,229.3C1013.3,192,1067,128,1120,122.7C1173.3,117,1227,171,1280,208C1333.3,245,1387,267,1413,277.3L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
    </div>
    <WifiWebsite />
  </Layout>
)

export default IndexPage
