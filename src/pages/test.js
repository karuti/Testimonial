import React from "react"
import ContentCard from "../components/IndustryPages/contentCard"
import Hero from "../components/IndustryPages/hero"
function Test() {
  return (
    <>
      <Hero />
      <ContentCard
        title="Understand your trade presence"
        content="Identify a retailer on all key information: Contact, GPS, picture, equipment presence, etc"
        contentTwo="Create distribution zones. Assign retailers to them or to sales rep and measure coverage."
        contentThree="Create optimal routes and journey plans to visit them regularly and guide field work."
        textcta={
          <a style={{ color: "#febd55" }} href="https://fieldproapp.com/app/">
            Learn more about the FieldPro app
          </a>
        }
        productpicture={<img src="/images/trade.png" alt="Zagol Milk" />}
      />
    </>
  )
}
export default Test
