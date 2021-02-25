import React from "react"
import styled from "styled-components"
import { H3, P } from "../styles/TextStyles"
function LinkCard(props) {
  const { icon, title, description } = props
  return (
    <Wrapper>
      <CardBox>
        <Icon>{icon || "Icon "}</Icon>
        <Title> {title || "Financial Services "}</Title>
        <Description>
          {description ||
            "We help Mobile Operators and Financial Service providers efficiently manage their agent network "}
        </Description>
      </CardBox>
    </Wrapper>
  )
}
export default LinkCard
const Wrapper = styled.div`
  padding: 100px 0px 0px 350px;
  @media (max-width: 450px) {
    max-width: 300px;
    padding: 0;
  }
`
const CardBox = styled.div`
  width: 400px;
  height: 360px;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.08);
  background-color: #fefefe;
  @media (max-width: 450px) {
    max-width: 360px;
    padding: 0;
  }
`
const Icon = styled.div`
  padding: 24px 0px 0px 32px;
  margin: 0;
`

const Title = styled(H3)`
  margin: 0;
  padding: 0px 24px 0px 32px;
`
const Description = styled(P)`
  padding: 20px 24px 0px 32px;
`
