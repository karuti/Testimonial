import React from "react"
import styled from "styled-components"
import { H3, P } from "../styles/TextStyles"

function ContentCard(props) {
  const {
    productpicture,
    title,
    content,
    contentTwo,
    contentThree,
    textcta,
  } = props
  return (
    <Wrapper>
      <Description>
        <Title>{title || "Title "}</Title>
        <TextBlock>
          <LineBlock>
            <TickButton src="/images/green-check-mark.svg" alt=""></TickButton>
            <Content>{content || "Content"}</Content>
          </LineBlock>
          <LineBlock>
            <TickButton src="/images/green-check-mark.svg" alt=""></TickButton>
            <ContentTwo>{contentTwo || "Content"}</ContentTwo>
          </LineBlock>
          <LineBlock>
            <TickButton src="/images/green-check-mark.svg" alt=""></TickButton>
            <ContentThree>{contentThree || "Content"}</ContentThree>
          </LineBlock>
        </TextBlock>
        <TextCta>
          {textcta || "Cta text"}
          <ArrowButton src="/images/Arrow.svg" alt=""></ArrowButton>
        </TextCta>
      </Description>
      <ProductPicture>{productpicture || "Product picture"}</ProductPicture>
    </Wrapper>
  )
}

export default ContentCard

const Wrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px 0px 50px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 562px 552px;
  grid-gap: 120px;

  @media (max-width: 450px) {
    padding: 0px 40px 0 40px;
    margin: 0;
    display: flex;
    flex-direction: column-reverse;
    gap: 30px;
  }
`
const ProductPicture = styled.div`
  padding-top: 30px;
`
const Description = styled.div``
const Title = styled(H3)``
const TextBlock = styled.div``
const LineBlock = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 12px;
`
const Content = styled(P)``
const ContentTwo = styled(P)``
const ContentThree = styled(P)``
const TextCta = styled.p`
  font-weight: 800;
  font-size: 1.25em;
  color: #febd55;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const TickButton = styled.img`
  padding-top: 8px;
`
const ArrowButton = styled.img`
  padding-left: 8px;
`
