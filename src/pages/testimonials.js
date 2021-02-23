
import React from "react"
import Header from "../components/sections/Header.js"
import Footer from "../components/sections/Footer.js"
import Brands from "../components/Testimonial-components/Brands.js"
import CallToAction from "../components/Testimonial-components/CallToAction.js"
import HeroSection from "../components/Testimonial-components/HeroSection.js"
import TestimonialCard from "../components/Testimonial-components/testimonial-card.js"
import TestimonialCardReverse from "../components/Testimonial-components/testimonialCardReverse.js"



function testimonials() {
    return <>
    
        <Header />
        <HeroSection />
        <Brands />
        <TestimonialCard
            companypicture={<img src="/images/fanmilk.png" alt="FanMilk" />}
            title="FANMILK"
            quote="I am very happy to count Optimetriks as our IT partner for our sales digitisation effort. 
            I appreciate their reactivity in rolling out software solutions that are relevant for us, 
            that produce the right analytical data to understand our distribution at a granular level.”"
            profile={<img src="/images/brian-rwehabura-fanmilk.png" alt="FanMilk" />}
            personname="Ziobeieton Yeo"
            position="General Manager"
            companyname="FanMilk West Africa"
            textcta={<a style={{color: "#febd55"}} href="https://blog.fieldproapp.com/fan-milk-digitising-the-field-vendor-management-by-franchisees-of-a-dairy-company-in-west-africa"> Read FanMilk’s Case Study</a>}
        />
    
        <TestimonialCardReverse
            companypicture={<img src="/images/gaselia-nbci.png" alt="Gaselia" />}
            title="Gaselia Group"
            quote='The solution has been a real value addition to the commercial reorganization, 
            bring much needed efficiency gains in our processes. 
            Their agile software solution has been critical in getting the right data points to understand our 
            strengths on the field, manage our outlet universe and rationalise our process."'
            profile={ <img src="/images/Geraldine-Gaselia.png" alt="Gaselia" /> }
            personname="Géraldine Schildknecht"
            position="Marketing and Commercial Director"
            companyname="Gaselia Group"
            textcta={<a style={{color: "#febd55"}} href="https://blog.fieldproapp.com/gaselia-implementing-the-road-to-market-methodology-for-a-west-african-beverages-group">Read Gaselia’s Case Study</a>}
        />
        <TestimonialCard
            companypicture={<img src="/images/vodacom.png" alt="Vodacom" />}
            title="Vodacom Mozambique"
            quote="I am glad that Vodacom and M-Pesa in particular decided to work with Optimetriks.
             The FieldPro platform allows us to plan and deploy our resources where there are needed the most
              and to react faster to challenges faced by our M-Pesa Agents in the market using real time 
              information gathered by teams on the ground . The result have been fantastic.”"
            profile={ <img src="/images/thabani-vodacom.png" alt="Vodacom" /> }
            personname="Thabani Gonesi"
            position="M-Pesa Distribution Director "
            companyname="Vodacom Mozambique"
            textcta={<a style={{color: "#febd55"}} href="https://blog.fieldproapp.com/vodacom-mozambique-digitising-the-customer-education-btl-activities">Read Vodacom’s Case Study</a>}
        />
           <TestimonialCardReverse
            companypicture={<img src="/images/zagol.png" alt="Zagol Milk" />}
            title="Zagol (Sano) Milk Ethiopia"
            quote="Optimetriks solution has been generating real time 
            information to decide or act quickly in our dairy business as dairy products are so perishable that require fast 
            actions to minimize loss. We use them to control our products' delivery status to
            our clients (outlets and agents) through sales representatives, 
            and also for customers' compliance handling as the customers comments on  quality of our dairy products.”"
            profile={ <img src="/images/thabani-vodacom.png" alt="Vodacom" /> }
            personname="Melkam Endale"
            position="CEO "
            companyname="Zagol (Sano) Ethiopia"
            textcta={<a style={{color: "#febd55"}} href="https://fieldproapp.com/analytics/">Learn more about our Geo-Tracking feautures</a>}
        />
            <TestimonialCard
            companypicture={<img src="/images/seb.png" alt="Seb Kenya" />}
            title="Groupe Seb Kenya"
            quote="It has made my work easier, because, at a glance, 
            I can easily check all the activities of the company within FieldPro,
             I can check who has reported, who has not reported, I can see sales for a particular period, 
             and I can do follow-ups.”"
            profile={ <img src="/images/Ken-seb.png" alt="Vodacom" /> }
            personname="Ken Odipo"
            position="Sales Manager"
            companyname="Groupe Seb Kenya"
            textcta={<a style={{color: "#febd55"}} href="https://blog.fieldproapp.com/groupe-seb-getting-full-visibility-on-merchandisers-deployed-in-kenya-modern-trade">Read Seb's Case Study</a>}
        />
            <TestimonialCardReverse
            companypicture={<img src="/images/vodacom-image.png" alt="Rural Digital Media" />}
            title="Rural Digital Media"
            quote='We deploy brand ambassadors and promoters on the ground to educate customers on products.
             Each customer engagement is tracked through FieldPro, which gives me a high level of confidence on 
             the effectiveness of field activities.”'
            profile={ <img src="/images/Brian-RuralMedia.png" alt="Rural  Digital Media" /> }
            personname="Brian Rwehabura"
            position="CEO "
            companyname="Rural Digital Media"
            textcta={<a style={{color: "#febd55"}} href="https://fieldproapp.com/retail/">Learn more about field force automation</a>}
        />
            <TestimonialCard
            companypicture={<img src="/images/ramco.png" alt="Ramco Group" />}
            title="RAMCO"
            quote='We find the Field Pro App helps our field sales team summarize their day with the follow up action plan. 
            Additionally it helps drive their KPIs and improves how the sales manager can support the sales team to secure orders quickly.. 
            It is easy to use in the field, customizable and drives behavior.”'
            profile={ <img src="/images/ramco-profile.png" alt="Ramco Group" /> }
            personname="Derek Steel"
            position="Group Marketing Director "
            companyname="RAMCO"
            textcta={<a style={{color: "#febd55"}} href="https://fieldproapp.com/sales/">Learn more about our Field Sales features</a>}
        />
             <TestimonialCardReverse
            companypicture={<img src="/images/tigo.png" alt="Tigo Cash" />}
            title="Tigo Cash"
            quote='FieldPro is a relevant technological solution that gives us real time insights from our mobile money agents across Ghana,
             which we then use to influence the performance of Tigo Cash. Their end- to-end solution is easy to deploy,
              agile and reliable."'
            profile={ <img src="/images/carl-pomeyie-image.png" alt="Tigo Cash" /> }
            personname="Carl Eli Pomeyie"
            position="Head of Tigo Cash"
            companyname="Tigo Ghana"
            textcta={<a style={{color: "#febd55"}} href="https://fieldproapp.com/app/">Learn more about the FieldPro Mobile App</a>}
        />
             <TestimonialCard
            companypicture={<img src="/images/dannone.png" alt="Danone" />}
            title="Danone Afrique"
            quote='FieldPro digital tool has been customised in a few days and was very easy to use. 
            It helped us  get reliable data on our distribution presence and identify new opportunities for 
            our Route To Market in different Western African countries."'
            profile={ <img src="/images/armelle-schlumberger-image .png" alt="Danone" /> }
            personname="Armelle Schlumberger"
            position="Head of Infant Nutrition "
            companyname="Danone Afrique"
            textcta={<a style={{color: "#febd55"}} href="https://fieldproapp.com/retail/">Learn more about our Retail Audit</a>}
        />
    
             <TestimonialCardReverse
            companypicture={<img src="/images/airtel.png" alt="Airtel Uganda" />}
            title="Airtel Uganda"
            quote='FieldPro has helped us efficiently monitored our 80 field supervisors, through a mobile app and management dashboards. 
            Thanks to that automated daily reporting, the quality of our mobile money distribution at agent levels has greatly improved."'
            profile={ <img src="/images/richard-yego-image.png" alt="Airtel Uganda" /> }
            personname="Richard Yego"
            position="Head of Airtel Money"
            companyname="Airtel Uganda"
            textcta={<a style={{color: "#febd55"}} href="https://blog.fieldproapp.com/managing-a-mobile-money-agent-network-with-digital-tools">Read Airtel’s case study</a>}
        />
                  <TestimonialCard
            companypicture={<img src="/images/superfoam.png" alt="Superfoam" />}
            title="Superfoam"
            quote='The FieldPro retail audit tool enabled us to maximize the effectiveness of 
            implementing our roll-out strategy. On top of that the dashboard to showcase the findings 
            was exceptional in its interface. "'
            profile={ <img src="/images/mike-fischer-image.png" alt="Superfoam" /> }
            personname="Mike Fischer"
            position="CEO"
            companyname="Superfoam"
            textcta={<a style={{color: "#febd55"}} href="https://fieldproapp.com/analytics/">Learn about our Dashboards and Analytics</a>}
        />
        <CallToAction />
<Footer />
    </>
}
export default testimonials
