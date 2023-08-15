import React from 'react'
import { Container } from 'react-bootstrap'
import Abt_bg from '../images/Mi/Screentech.png'
function About() {
  return (
    <div>
      
      <section className='section bg-light boeder-bottom'>
        <Container>
         
          <img className="d-block w-100" src={Abt_bg} alt='bg_img'></img>
          <h3 className='text-center' style={{textDecoration:'underline'}}>Our Company</h3>
          <p>
          Where innovation meets elegance. A trailblazing tech company dedicated to crafting cutting-edge smartphones that 
          seamlessly blend performance, design, and user-centric features.
           Elevate your mobile experience with OnePlus, 
            where every device is a masterpiece of technological artistry.OnePlus was founded by Pete Lau and Carl Pei on 16 December 2013 to develop a high-end flagship smartphone running Cyanogen OS that would come to be known as the OnePlus One.
           OnePlus would continue to release phones throughout the 2010s and 2020s. In 2020, OnePlus released the OnePlus Nord, its first mid-range smartphone since the OnePlus X in 2015. 
           Pei would oversee the design and marketing of OnePlus' products until his departure from the company in October 2020, going on to found the consumer electronics manufacturer Nothing.
            In 2022-2023, OnePlus is still actively producing affordably priced phones ($200-749 USD) with top-of-the-line specs comparable to leading Samsung phones, including 5G connectivity.
           OnePlus is also partnered with T-Mobile to provide OnePlus Phone through T-Mobile to extend its legitimacy and reach. 
          </p>
        </Container>
      </section>  
    </div> 
  )
}

export default About