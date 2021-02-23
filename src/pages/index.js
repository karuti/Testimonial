import React, { Component } from "react"


import Layout from "../components/Layout.js"
import SEO from "../components/seo.js"

import Header from "../components/sections/Header.js"
import Footer from "../components/sections/Footer.js"






class IndexPage extends Component {
  
  render() {
    return (
        <Layout>
      <SEO title="Home" />
        <Header />
      
    
      <Footer/>
    </Layout>
    
    );
  }
}

export default IndexPage