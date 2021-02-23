import React, { Component } from "react"
import { CountryDropdown } from "react-country-region-selector";
import styled from "styled-components";
import { ScheduleButton } from "../Buttons/CtaButton";
import { Label, H3, P} from "../styles/TextStyles";
class ScheduleModal extends Component {
  constructor (props) {
    super(props);
      this.state = { country: '' };
    this.state = { value: '' };
    this.state = { showModal: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
   

  }

 //First Modal onclick to open if closed and vice versa
  handleClick() {
       this.setState(prevState => ({
        showModal: !prevState.showModal
       }));
  }


  //handle changes in input fileds
    handleChange(event) {
      this.setState({ value: event.target.value });
      
  }
//submit to sheets
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('https://script.google.com/macros/s/AKfycbz0vmYdgOg1FF15187B6Gdcke1c8W_X0JZQsy8tP0VMbD7dG8hfeGOy/exec', {
      method: 'POST',
      body: data,
    });
  //rest the form
    document.getElementById("leadform").reset();
    //close the modal
    this.setState(prevState => ({
        showModal: !prevState.showModal
        }));
  }
//Allow user to selct country in input fileds
  selectCountry (val) {
    this.setState({ country: val });
  }
//Second pop-up modal
  state = {
    isOpen:false
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  render() {
        
         const { country } = this.state;
       const modal = (
          <>
         <Modal>
                 <ModalContent>
              <ModalHeader>
                 <Close onClick={this.handleClick}>&times;</Close>
        <ModalTitle>
        Schedule a Demo
       
        </ModalTitle>
                         
        <Description>
        Fill the form below to gain access to a demo of our mobile and web app
        </Description>
      </ModalHeader>
      <ModalBody>
      <form id="leadform" method="post" onSubmit={this.handleSubmit}>
      <NameBlock>
        <FormGroup>
        <Label>First Name<span style={{color: "red"}}>*</span></Label>
        <InputSmall
          type="text"
          name="FirstName"
          id="name"
          required
         />
        </FormGroup>
        <FormGroup>
        <Label>Last Name<span style={{color: "red"}}>*</span></Label>
        <InputSmall
          type="text"
          name="LastName"
          id="name"
          required
        /></FormGroup>
        </NameBlock>
        <FormGroup>
        <Label>Email Address<span style={{color: "red"}}>*</span></Label>
        <InputBox
          type="email"
          name="Email"
          id="email"
          placeholder="yourworkemail@yourcompany.com"
          required
                     />
        </FormGroup>
        <PhoneBlock>
        <FormGroup>
                                   
        <Label>Country<span style={{color: "red"}}>*</span></Label> 
        <CountryDropdown
        name="countryCode"
        value={country}
                         onChange={(val) => this.selectCountry(val)}
                         style={styles.countryStyle}
        required  
                       />
                                

     </FormGroup>
         <FormGroup>                        
        <Label>Phone Number<span style={{color: "red"}}>*</span></Label>
        <InputSmall
          type="text"
          name="phonenumber"
          id=""
          placeholder="0700000000"
          required
                       /></FormGroup>
                             </PhoneBlock> 
       <FormGroup>                      
        <Label>Company Name</Label>
        <InputBox
          name="company-name"
          type="text"
          id=""
          placeholder="Enter your Company Name"
                               
                     /></FormGroup>
         <FormGroup>
        <Label>Number of Field Staff</Label>
        <InputBox
          name="FieldUsers"
          type="number"
          id=""
          placeholder="Enter the number of people to use the app"
                              
                     />
         </FormGroup>
                   <ScheduleButton
                     
                                 style={{ background: "#febd55", color: "#fefefe" }}
                                 type="submit"
                                 value={this.state.value}
                     onChange={this.handleChange}
                   >Schedule a Demo</ScheduleButton>
                    
    </form>
      </ModalBody>
      <ModalFooter>
                         <Privacy>
                             We value your privacy; 
                             Your information will only be used for our own internal processes and will not be shared with any external party
        </Privacy>
                     </ModalFooter>
                     </ModalContent>
           </Modal>
           <Modaltwo>
             Modal2
              
       </Modaltwo>
         </>
        
        );
         return (
             <Wrapper>
            <ScheduleButton onClick={this.handleClick}>
                     Schedule a Demo
              </ScheduleButton>
                 {this.state.showModal ? modal : ''}
              
             </Wrapper>
     
    );
  }
}
    
 

export default ScheduleModal
const Wrapper = styled.div``
const Modal = styled.div`
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
  margin: 0 auto;
  @media (max-width: 450px) {
  max-width:400px;

 
}
`

 const styles = {
  countryStyle: {
       backgroundColor:'#fefefe',
       fontSize:'1.2em',
       margin: '0',
       padding:'0 1em' ,
       height: '3em',
       width: '262px',
       border: '0.1em solid #2c2c2c',
     borderRadius: '0.2em',
   }
};
const Modaltwo = styled.div`

`
const ModalHeader = styled.div`` 
const ModalTitle = styled(H3)`
padding-top:40px;
` 
const Description = styled(P)`
@media (max-width: 450px) {
  max-width:350px ;
}
`
const ModalBody=styled.div``
const ModalContent = styled.div`
    width: 620px;
    height: 1100px;
    border-radius: 8px;
    box-shadow: 0 0 48px 0 rgba(0, 0, 0, 0.16);
    background-color: #fefefe;
    padding-left: 32px;
    padding-right: 24px;
    margin: 10% auto;
    align-items: center;
    @media (max-width: 450px) {
  height:1300px;
  max-width:360px;
  margin: 20% 3%;
 
}

` 
const FormGroup = styled.div`
padding-top:20px;
display:grid;
gap:4px;
`
const InputBox = styled.input`
  width:544px;
  margin: 0;
  padding: 0 1em;
  height: 3em;
  border-style: solid;
  border-color: #2c2c2c;
  border-width: 0.1em;
  border-radius: 0.2em;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media (max-width: 450px) {
  max-width:300px;
}

`
const InputSmall = styled.input`
  margin: 0;
  padding: 0 1em;
  height: 3em;
  width: 252px;
  border-style: solid;
  border-color: #2c2c2c;
  border-width: 0.1em;
  border-radius: 0.2em;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media (max-width: 450px) {
  width:300px;
  
}

`
const NameBlock = styled.div`
display:grid;
grid-template-columns: auto auto;
gap:20px;
@media (max-width: 450px) {
  max-width:300px;
  grid-template-columns: auto;
  gap: 10px;
}

`

const PhoneBlock = styled.div`
display:grid;
grid-template-columns:auto auto;
gap:20px;
@media (max-width: 450px) {
  max-width:300px;
  grid-template-columns: auto;
  gap: 10px;
}

`
const ModalFooter = styled.div`` 
const Privacy = styled.p`
  @media (max-width: 450px) {
  max-width:350px;
  }`
const   Close = styled.div`
  color: #aaa;
  font-size: 64px;
  float: right;
  font-weight: bold;
:hover,focus {
  color: black;
  text-decoration: none;
  cursor: pointer;}

`