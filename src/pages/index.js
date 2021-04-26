import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero';
import Intro from '../components/intro';
import Features from '../components/features';
import Compare from '../components/compare';
import DeviceInfo from '../components/deviceInfo';
import IceInfo from '../components/iceInfo';
import SignUp from '../components/SignUp';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Intro />
    <Features />
    <DeviceInfo />
    <IceInfo />
    <Compare />
    <SignUp />
  </Layout>
)

export default IndexPage
