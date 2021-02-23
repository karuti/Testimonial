import React from "react"
import styled from "styled-components"
import { Button } from "../components/styles/TextStyles"
class Header extends React.Component {
  constructor() {
    super()
    this.state = { showModal: false }
    this.state = { showModalTwo: false }

    this.handleClick = this.handleClick.bind(this)
    this.handleModalTwo = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }
  handleModalTwo() {
    this.setState(prevState => ({
      showModalTwo: !prevState.showModalTwo,
    }))
  }
  render() {
    const modaltwo = (
      <>
        <Modal>Modal 2</Modal>
      </>
    )
    const modal = (
      <>
        <Modal>
          Modal 1<Button onClick={this.handleModalTwo}>oPEN TWO</Button>
        </Modal>
      </>
    )

    return (
      <>
        <Button onClick={this.handleClick}>Schedule a Demo</Button>
        {this.state.showModal ? modal : ""}
        {this.state.showModalTwo ? modaltwo : ""}
      </>
    )
  }
}
export default Header
const Modal = styled.div``
