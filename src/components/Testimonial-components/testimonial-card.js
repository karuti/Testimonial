import React from "react"
import styled from "styled-components"
import { H3, QuoteText } from "../styles/TextStyles"

function TestimonialCard(props) {
    const { companypicture, title, quote ,profile ,personname, position, companyname,textcta } = props
    return(
    <Wrapper>
        <CompanyPicture> {companypicture || "Company picture"} </CompanyPicture>
            <Description>
          <Title>{title || "Company Name "}</Title>
               <TextBlock> <Quotation>"</Quotation>
            <Quote>{quote || "Testimonial Quote"}</Quote>
            </TextBlock>
                <Citation>
                    <Profile>{profile || "Profile picture"} </Profile>
                    <Details>
                        <PersonName> {personname || "The persons name"}</PersonName>
              <Position > {position || "Their role"}</Position>
                        <CompanyName>{companyname || "company name"}</CompanyName>
                    </Details>
                </Citation>
                <TextCta>{textcta || "Cta text"}
                    <ArrowButton src="/images/Arrow.svg" alt=""></ArrowButton>
                    </TextCta>
            </Description>
        </Wrapper>
        
        
 
    )
}

export default TestimonialCard

const Wrapper = styled.div`
max-width: 1234px;
padding: 200px 30px 0px 50px;
margin: 0 auto;
display: grid;
grid-template-columns:562px 552px;
grid-gap: 120px;

@media (max-width: 450px) {
  grid-template-columns: auto;
  padding: 100px 40px;
  gap: 30px;
}
`
const CompanyPicture = styled.div`
padding-top: 30px;
`
const Description = styled.div`

`
const Title = styled(H3)``
const Quotation = styled(QuoteText)``
const Quote = styled(QuoteText)``
const Citation = styled.div`
display: grid;
grid-template-columns:80px auto;
grid-gap: 30px;
@media (max-width: 450px) {
grid-template-columns:60px auto;
grid-gap: 20px;
}
`
const Details = styled.div`
display: grid;
grid-template-rows:20px 20px auto;
grid-gap: 10px;
@media (max-width: 450px) {
  gap: 20px;
}
`
const TextBlock = styled.div`
display:grid;
grid-template-columns: auto auto;
`
const PersonName = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #2c2c2c;
  `
const Profile = styled.div`

`

const Position = styled.p`
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: normal;
  color: #2c2c2c;
    @media (max-width: 450px) {
 line-height: 1;
}
`
const CompanyName = styled.p`
font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: normal;
  color: #2c2c2c;

`
const TextCta = styled.p`

 font-weight: 800;
  font-size: 1.25em;
  color:#febd55;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const ArrowButton = styled.img`
padding-left:8px;
`