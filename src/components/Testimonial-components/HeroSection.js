import React from "react"
import styled from "styled-components"
import { DownloadButton } from "../Buttons/CtaButton"
import {  H1, P } from "../styles/TextStyles"
import ScheduleModal from "./modal"


function HeroSection() {
    return(
        <Wrapper>
             <Content>
            <Title>
                What Our Customers Have To Say  
     </Title>
            <Description>
                    Learn how our customers  monitor in real-time their field sales and conduct retail audit 
                    using our FieldPro  web and mobile app. Explore how they use our platform for sales force automation,
                    to map  outlets, and to digitise their road to market processes.
            </Description>
                <CallToAction>
             
                <ScheduleModal>
                  Schedule a Demo
                </ScheduleModal>
            
            <a href="https://play.google.com/store/apps/details?id=com.optimetriks.smala" target="_blank" rel="noopener noreferrer">
                <DownloadButton>
                  Download Free Trial
                </DownloadButton>
            </a>
                
                </CallToAction>
    
            </Content>
    </Wrapper>
    )
}
export default HeroSection

const Wrapper = styled.div`
background-color:#fefefe;

`
const Content = styled.div`
	max-width: 1234px;
	padding: 300px 40px 200px;
	margin: 0 auto;
@media (max-width: 450px) {
   padding: 200px 40px 80px;
  
  

}
`
const Title = styled(H1)`
color:#2c2c2c;
padding-bottom: 20px;

`
const Description = styled(P)`
max-width: 880px;
`
const CallToAction = styled.div`
display:grid;
grid-template-columns:350px 300px;
grid-gap:0px;
@media (max-width: 450px) {
    grid-template-columns: repeat(1, auto);
    
  }

`

