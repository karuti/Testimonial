import React from "react"
import styled from "styled-components"
import { H3, P } from "../styles/TextStyles"
function Benefits(props) {
  const { icon, title, description } = props
  return (
    <Wrapper>
      <Icon>{icon || "Outlet mapping"}</Icon>
      <Content>
        <Title>{title || "Outlet mapping"}</Title>
        <Description>
          {description ||
            "Outlet mapping Identify and geo map all your retailers. Segment them.Create routes and assign them to territories"}
        </Description>
      </Content>
    </Wrapper>
  )
}
export default Benefits
const Wrapper = styled.div`
  width: 385px;
  height: 180px;
  margin: 100px 0px 50px 350px;
  @media (max-width: 450px) {
    max-width: 320px;
    margin: 40px 16px;
  }
`
const Content = styled.div`
  margin: -120px 0px 0px 50px;
`
const Icon = styled.div``
const Title = styled(H3)``
const Description = styled(P)``
