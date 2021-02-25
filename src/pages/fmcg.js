import React from "react"
import Header from "../components/sections/Header.js"
import Footer from "../components/sections/Footer.js"
import Hero from "../components/IndustryPages/hero.js"
import styled from "styled-components"
import { H2 } from "../components/styles/TextStyles.js"
import Benefits from "../components/IndustryPages/benefits.js"
import CompanyLogo from "../components/IndustryPages/companyLogos.js"
import LinkCard from "../components/IndustryPages/LinkCard.js"
import ContentCard from "../components/IndustryPages/contentCard.js"
import ContentCardReverse from "../components/IndustryPages/contentCardReverse.js"
import ScheduleModal from "../components/Testimonial-components/modal.js"
import BottomCta from "../components/sections/bottomCta.js"

function Industry() {
  return (
    <>
      <Header />
      <Hero />
      <Title>Key benefits of field force automation</Title>
      <SectionCards>
        <Benefits
          icon={<img src="/images/Map.png" alt="Map Icon" />}
          title="Outlet mapping"
          description="Identify and geo map all your retailers. Segment them. Create routes and assign them to territories"
        />
        <Benefits
          icon={<img src="/images/Map.png" alt="Map Icon" />}
          title="Field Monitoring"
          description="Monitor the performance KPIs of your field force in real time: calls, strike rate, sales, etc."
        />
        <Benefits
          icon={<img src="/images/Map.png" alt="Map Icon" />}
          title="Sales Automation "
          description="Digitise the various sales processes, van sales, orders and deliveries, indirect, etc at each level of your distribution structure."
        />
      </SectionCards>

      <Title>Major FMCG brands trust us</Title>
      <CtaButton>
        <ScheduleModal />
      </CtaButton>
      <CompanyLogo />
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
        productpicture={<img src="/images/trade.png" alt="Traditional Trade" />}
      />
      <ContentCardReverse
        title="Monitor all your Sales Force performance"
        content="Measure the productivity of your sales force in terms of basic KPIs: time worked, calls, strike rate, sales, etc"
        contentTwo="Define and measure automatically performance incentives for your sales force to reduce turnover"
        contentThree="Display transparently the data in the mobile app and on web dashboards"
        textcta={
          <a
            style={{ color: "#febd55" }}
            href="https://fieldproapp.com/analytics/"
          >
            Learn about our Dashboards and Analytics
          </a>
        }
        productpicture={
          <img
            src="/images/Field Sales Dashboards.png"
            alt="Traditional Trade"
          />
        }
      />
      <ContentCard
        title="Capture all your sales digitally"
        content="Record each sales done to the distributors, wholesalers, retailers, street vendors, etc"
        contentTwo="Share and print receipt to retailers. Track the payment flows and credit limit."
        contentThree="Replicate all your sales processes: orders and deliveries, direct, indirect, etc"
        textcta={
          <a style={{ color: "#febd55" }} href="https://fieldproapp.com/sales/">
            Learn more about Sales features
          </a>
        }
        productpicture={
          <img src="/images/Field SalesPhone.png" alt="Traditional Trade" />
        }
      />
      <SectionCards>
        <LinkCard
          icon={
            <img
              src="/images/account_balance_wallet-24px.png"
              alt="Financial Services"
            />
          }
          title="Financial Services"
          description="We help Mobile Operators and Financial Service providers efficiently manage their agent network."
        />
        <LinkCard
          icon={
            <img src="/images/bike.png" alt="Last Mile Distribution Icon" />
          }
          title="Last Mile Distributors"
          description="Monitor all the interactions of your field sales agents and technicians with your customers."
        />
      </SectionCards>
      <BottomCta />
      <Footer />
    </>
  )
}
export default Industry

const Title = styled(H2)`
  padding: 100px 0px 0px 350px;
  @media (max-width: 450px) {
    max-width: 350px;
    padding: 40px 16px;
  }
`
const SectionCards = styled.div`
  display: grid;
  grid-template-columns: 450px 450px 450px;
  grid-gap: 12px;
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, auto);
    padding: 40px 0px;
  }
`
const CtaButton = styled.div`
  padding: 0px 0px 0px 350px;
  @media (max-width: 450px) {
    max-width: 350px;
    padding: 0px 16px;
  }
`
