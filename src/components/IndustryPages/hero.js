import React from "react"
import styled from "styled-components"
import { DownloadButton } from "../Buttons/CtaButton"
import { H1, P } from "../styles/TextStyles"
import ScheduleModal from "../Testimonial-components/modal.js"

function Hero() {
  return (
    <Wrapper>
      <Content>
        <Title>Field Force Automation for Consumer Goods Manufacturers</Title>
        <Description>
          We help brands better manage all their distribution and route to
          market process, and be in direct contact with their retailers.
        </Description>
        <CallToAction>
          <ScheduleModal>Schedule a Demo</ScheduleModal>

          <a
            href="https://play.google.com/store/apps/details?id=com.optimetriks.smala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadButton>Download Free Trial</DownloadButton>
          </a>
        </CallToAction>
      </Content>
      <HeroImage>
        <RectangleBackground></RectangleBackground>
        <ImageForeground></ImageForeground>
      </HeroImage>
    </Wrapper>
  )
}
export default Hero

const Wrapper = styled.div`
  background-color: #fefefe;
  display: grid;
  grid-template-columns: 1000px auto;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    margin: 0;
    padding: 0;
  }
`
const Content = styled.div`
  max-width: 1000px;
  padding: 300px 0px 200px 350px;
  margin: 0 auto;
  @media (max-width: 450px) {
    max-width: 400px;
    padding: 200px 40px 80px;
  }
`
const Title = styled(H1)`
  color: #2c2c2c;
  padding-bottom: 20px;
  @media (max-width: 450px) {
    font-size: 2em;
  }
`
const Description = styled(P)`
  max-width: 880px;
`
const CallToAction = styled.div`
  display: grid;
  grid-template-columns: 350px 300px;
  grid-gap: 0px;
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, auto);
  }
`
const HeroImage = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`
const RectangleBackground = styled.div`
  width: 864px;
  height: 648px;
  position: absolute;
  top: 200px;
  left: 1350px;
  padding: 0 0 0 65px;
  transform: rotate(-20deg);
  border-radius: 48px;
  -webkit-filter: blur(12px);
  filter: blur(12px);
  background-color: #febd55;
  @media (max-width: 450px) {
    display: none;
  }
`
const ImageForeground = styled.div`
  width: 864px;
  height: 648px;
  position: absolute;
  top: 200px;
  left: 1420px;
  padding: 0 0 0 65px;
  transform: rotate(-30deg);
  border-radius: 48px;
  background: url("/images/nan-picture.png");
  @media (max-width: 450px) {
    display: none;
  }
`
