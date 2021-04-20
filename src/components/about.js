import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <>
    <section className="w-screen text-center p-5  -mb-9">
      <Fade right>
        <StaticImage
          src="../images/stableConnectionAndGlobalCoverage.jpg"
          width={1000}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Global Connection"
          style={{ marginBottom: `1.45rem` }}
        />
      </Fade>
      <Fade left>
        <StaticImage
          src="../images/highSpeedData.jpg"
          width={1000}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="High Speed data"
          style={{ marginBottom: `1.45rem` }}
      />
      </Fade>
      <Fade right>
        <StaticImage
          src="../images/payAsYouGo.jpg"
          width={1000}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Pay as you go"
          style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
          src="../images/skygo-hotspot.jpg"
          width={1000}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Pay as you go"
          style={{ marginBottom: `1.45rem` }}
      />
      </Fade>
    </section>
    </>
  )
}
export default About
