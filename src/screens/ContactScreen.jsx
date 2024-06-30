import React from 'react';

function ContactScreen() {
    return (
          <div>
            <br/>
            <h1 align="center">Contact Us</h1>
            <p align="center">Contact Information</p>
            <br/>
        <div class="row d-flex contact-info">
          <div class="col-md-4 d-flex">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Address</h3>
                  <a href="https://www.google.com/maps/place/Sheth+C+N+Vidyalaya/@23.0186691,72.5492628,16.96z/data=!4m6!3m5!1s0x395e84e46e3ef511:0xd03b774ff7bb2f5e!8m2!3d23.0214064!4d72.5519863!16s%2Fm%2F04hzzpw?entry=ttu" target="_blank">
                  C. N. Vidyavihar, Surendra Mangaldas Rd, Ambawadi, Ahmedabad, Gujarat 380006</a>
	          </div>
          </div>
          <div class="col-md-4 d-flex">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Contact Number</h3>
	            <p><a href="tel://+917770043825">+91-9429122120</a></p>
	          </div>
          </div>
          <div class="col-md-4 d-flex">
          	<div class="bg-light align-self-stretch box p-4 text-center">
          		<h3 class="mb-4">Email</h3>
	            <p><a href="mailto:helpdesk@wisdom.in">helpdesk@wisdom.in</a></p>
	          </div>
          </div>
           
          
          </div>
      </div>
);
}
export default ContactScreen;
