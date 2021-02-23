import React from "react"
import styled from "styled-components"

function Brands() {
    return(
    <Wrapper>
            <BrandLogo src="/images/danone-logo.png" alt="Danone Logo" />
            <BrandLogo src="/images/fanmilk-logo.png" alt="Fanmilk Logo" />
            <BrandLogo src="/images/nestle-logo.png" alt="Nestle Logo" />
            <BrandLogo src="/images/loreal-logo.png" alt="Loreal Logo" />
            <BrandLogo src="/images/mtn-logo.png" alt="MTN Logo" />
            <BrandLogo src="/images/nbci-logo.png" alt="NBCI Logo" />
            <BrandLogo src="/images/ramco-logo.png" alt="Ramco Logo" />
            <BrandLogo src="/images/seb-logo.png" alt="SEB Logo" />
            <BrandLogo src="/images/unga-logo.png" alt="UNGA Group Logo" />
            <BrandLogo src="/images/vodacom-logo.png" alt="Vodacom Logo" />
            <BrandLogo src="/images/winnies-logo.png" alt="Winnies Logo" />
            <BrandLogo src="/images/pgbison-logo.png" alt="PG Bison Logo" />
            
    </Wrapper>
    )
}
export default Brands

const Wrapper = styled.div`
max-width: 1280px;
padding:40px 30px;
margin: 0 auto;  

@media (max-width: 450px) {
    display: grid;
  grid-template-columns: auto auto ;
  

}

`
const BrandLogo = styled.img`
padding:15px;
justify-content: space-evenly;
`