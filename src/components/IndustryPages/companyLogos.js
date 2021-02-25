import React from "react"
import styled from "styled-components"

function CompanyLogo() {
  return (
    <Wrapper>
      <Logo src="/images/danone-logo.png" alt="Danone Logo" />
      <Logo src="/images/nestle-logo.png" alt="Nestle Logo" />
      <Logo src="/images/nbci-logo.png" alt="NBCI Logo" />
      <Logo src="/images/unga-logo.png" alt="UNGA Group Logo" />
      <Logo src="/images/winnies-logo.png" alt="Winnies Logo" />
    </Wrapper>
  )
}
export default CompanyLogo

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 120px 0px 0px 350px;

  @media (max-width: 450px) {
    display: grid;
    margin: 40px 0 0 0;
    grid-template-columns: auto auto;
  }
`
const Logo = styled.img`
  padding: 20px;
  justify-content: space-evenly;
`
