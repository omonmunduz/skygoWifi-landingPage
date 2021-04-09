import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Compare = () => {
  return (
    <section className="relative z-10 w-screen text-center p-5 bg-yellow-200">
      <div>
        <h1 className="text-indigo-800 text-4xl md:text-5xl lg:text-6xl">
          STAY CONNECTED AT HOME <br /> AND ON THE GO
        </h1>
      </div>
      <div className="w-screen max-w-screen-md m-auto">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>How SkyGo is different ?</th>
              <th>
                <StaticImage
                  src="../images/hotspot.png"
                  alt="A hotspot device"
                  width={100}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </th>
              <th className="text-left p-3">
                <StaticImage
                  src="../images/SkyLogo.png"
                  alt=" A check icon"
                  width={80}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LOCAL &amp; GLOBAL COVERAGE</td>
              <td>
                <StaticImage
                  src="../images/close.png"
                  alt="A close icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
              <td>
                <StaticImage
                  src="../images/check.png"
                  alt=" A check icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
            </tr>
            <tr>
              <td>NO ROAMING CHARGES</td>
              <td>
                <StaticImage
                  src="../images/close.png"
                  alt="A close icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
              <td>
                <StaticImage
                  src="../images/check.png"
                  alt=" A check icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
            </tr>
            <tr>
              <td>NO SIM CARD NEEDED</td>
              <td>
                <StaticImage
                  src="../images/close.png"
                  alt="A close icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
              <td>
                <StaticImage
                  src="../images/check.png"
                  alt=" A check icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
            </tr>
            <tr>
              <td>CONNECT UP TO 10 DEVICES</td>
              <td>
                <StaticImage
                  src="../images/close.png"
                  alt="A close icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
              <td>
                <StaticImage
                  src="../images/check.png"
                  alt=" A check icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
            </tr>
            <tr>
              <td>SAFE &amp; SECURE</td>
              <td>
                <StaticImage
                  src="../images/close.png"
                  alt="A close icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
              <td>
                <StaticImage
                  src="../images/check.png"
                  alt=" A check icon"
                  width={50}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default Compare
