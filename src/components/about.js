import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <>
    <section className="w-screen text-center p-5  -mb-9">
    <StaticImage
        src="../images/stableConnectionAndGlobalCoverage.jpg"
        width={1000}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Global Connection"
        style={{ marginBottom: `1.45rem` }}
    />
    <StaticImage
        src="../images/payAsYouGo.jpg"
        width={1000}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Global Connection"
        style={{ marginBottom: `1.45rem` }}
    />
    
    </section>
    </>
  )
}
export default About
