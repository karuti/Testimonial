import React from "react"
import styled from "styled-components"
import { DownloadButton } from "../Buttons/CtaButton"
import { H2 } from "../styles/TextStyles"
import ScheduleModal from "../Testimonial-components/modal"
function BottomCta(props) {
  const { tagline } = props
  return (
    <>
      <CallToAction>
        <CtaBackground>
          <img src="/images/illustration.png" alt="Illustration" />
        </CtaBackground>
        <CtaContent>
          <CtaText>
            <Tagline style={{ color: "#fefefe" }}>
              {tagline || "Become a part of our esteemed customers "}
            </Tagline>
            <CtaGroup>
              <ScheduleModal>Schedule a Demo</ScheduleModal>

              <a
                href="https://play.google.com/store/apps/details?id=com.optimetriks.smala"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadButton>Download Free Trial</DownloadButton>
              </a>
            </CtaGroup>
          </CtaText>
        </CtaContent>
      </CallToAction>
    </>
  )
}
export default BottomCta
const CallToAction = styled.div`
  position: relative;
  display: grid;
  max-width: 1234px;
  margin: 200px 0px 0px 400px;
  padding: 0;
  @media (max-width: 768px) {
    width: 600px;
  }
  @media (max-width: 450px) {
    max-width: 360px;
    margin: 100px 0px;
  }
`
const CtaBackground = styled.div`
  position: absolute;
  align-self: center;
  z-index: 1;
`
const CtaContent = styled.div`
  position: relative;
  display: grid;
  max-width: 1234px;
  background: #124e5d;
  box-shadow: 0 0.5em 2em #00000018;
  border-radius: 0.5em;
  margin: 0 0 4em 0;
  padding: 4em 8em 6em 8em;
  @media (max-width: 32em) {
    width: 24em;
    margin: 0 0 4em 0;
    padding: 1em 2em 3em 2em;
  }
  @media (max-width: 450px) {
    max-width: 360px;
  }
`
const Tagline = styled(H2)``
const CtaText = styled.div`
  position: relative;
  align-self: center;
  top: -2em;
  color: #2a2a2a;
  max-width: 56em;
  padding: 0;
  z-index: 2;
  h2 {
    font-size: 3.25em;
  }
  @media (max-width: 32em) {
    width: 24em;
    margin: 0;
    padding: 0;
    h2 {
      font-size: 2.5em;
      margin: 1.2em 1.2em 1em 0;
    }
  }
  @media (max-width: 450px) {
    max-width: 360px;
    margin: 0;
    padding: 0;
  }
`

const CtaGroup = styled.div`
  display: grid;
  grid-template-columns: 350px 300px;
  grid-gap: 0px;
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, auto);
  }
`
