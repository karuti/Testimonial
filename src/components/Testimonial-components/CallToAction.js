
import React from "react"
import styled from "styled-components"
import { DownloadButton } from "../Buttons/CtaButton"
import {  H2 } from "../styles/TextStyles"
import ScheduleModal from "./modal"

function CallToAction() {
    return(
   <CTAContainer>
            <CTABg>
                <img src="/images/illustration.png" alt="Illustration"/>
            </CTABg>
            <CTAGroup>
              <CTAText>
                <H2>Become a part of our esteemed customers</H2>
                <CTAForm>
              
              <a href="https://fieldproapp.com/get-trial/" >
                <ScheduleModal id="scheduleButton" >
                  Schedule a Demo
                </ScheduleModal>
              </a>
                
              
              
              <a href="https://play.google.com/store/apps/details?id=com.optimetriks.smala" target="_blank" rel="noopener noreferrer">
                <DownloadButton>
                  Download Free Trial
                </DownloadButton>
                </a>
    
       
              </CTAForm>
              </CTAText>
            </CTAGroup>
          </CTAContainer>
    )
}
export default CallToAction
const CTAContainer = styled.div`
  position: relative;
  display: grid;
  max-width:1234px;
  margin: 200px 0px 0px 400px;
  padding: 0;
    @media (max-width: 768px) {
  width:600px;

}
@media (max-width: 450px) {
 max-width:360px;
 margin: 100px 0px;
}

`
const CTABg = styled.div`
  position: absolute;
  align-self: center;
  z-index: 1;
  
 
`
const CTAGroup = styled.div`
  position: relative;
  display: grid;
  max-width:1234px;
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
  max-width:360px;
 
  }
 
`
const CTAText = styled.div`
  position: relative;
  align-self: center;
  top: -2em;
  color:#fefefe;
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
  max-width:360px;
  margin: 0;
    padding: 0;
  }
 
`
const CTAForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: flex-start;
  margin: -1em 0 1em 0;
  @media (max-width: 32em) {
    grid-template-columns: repeat(1, auto);
    
  }
`

