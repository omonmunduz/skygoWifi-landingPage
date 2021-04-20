import * as React from "react"
import {Roll, Fade, Bounce} from 'react-reveal';
import { StaticImage } from "gatsby-plugin-image"
import './index.css'

import SEO from "../components/seo"
import Layout from "../components/layout"
import About from "../components/about"
import DeviceInfo from "../components/deviceInfo"
import IceInfo from "../components/iceInfo"
import Compare from "../components/compare"
import SignUp from "../components/SignUp";




const IndexPage = () => {

  return (
    <Layout>
      <SEO title="SkyGo Wifi" />
      <Roll left>
        <DeviceInfo />
      </Roll>
      <Fade right>
        <About />
      </Fade>
      <Fade left>
        <IceInfo />
      </Fade>
      <Bounce bottom>
        <Compare />
      </Bounce>
      <Bounce left>
       <SignUp />
      </Bounce>
    </Layout>
  )
}

export default IndexPage
