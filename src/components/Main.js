import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import canna from '../images/canna.jpg'
import hr from '../images/hr.jpg'
import ted from '../images/ted.jpg'
import flav from '../images/flav.jpg'
import myriam from '../images/myriam.jpg'
import artisticink from '../images/artisticink.jpg'
import rlb from '../images/rlb.jpg'
import about from '../images/about.jpg'
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h3>
            Innovative solutions for your creative projects <br />
          </h3>
          <p>
          UrbanRise Designs offers a host of web services geared 
          towards creating and enhancing your online presence. 
          We take a design approach that aligns with the online 
          vision and needs of our clients.   Our web solutions 
          are built to be customizable and scaleable to accommodate 
          business growth and expansion.  You can leverage Premier’s
          web knowledge, expertise, and creativity across various web 
          services including:
          </p>

          <h3>WEBSITE DESIGN</h3>
          <p>
          You have about 5 to 15 seconds to convince your visitor to 
          stay on your website. Use our custom website designs to give 
          your business website a professional look and feel that hooks 
          your visitor. We ensure that your website design is appropriately 
          impressive, contributing very positively to your conversion rates.
          </p>
          <h4>
          OUR WEBSITE DESIGN SERVICES INCLUDE:
          </h4>
          <p>
          <b>Responsive website designs</b> – Adapt to today’s phone and 
             tablet devices, providing your audience with a mobile-friendly 
             experience.
          </p>
          <p><b>Content management System</b> – Manage updating and editing content 
            for your website. Create multiple users to manage specific areas 
            of content.
          </p>
          <p><b>E-commerce Website Designs</b> – Setup and or integration of 3rd-party 
          e-commerce solutions.</p>
          <p><b>Password-protected sections</b> – Serve a variety of your audiences by 
          having password protected or private restricted areas of your website.
          </p>
          <p><b>Database-driven web solutions</b> – Backend web solutions created to 
          store and serve your clients with information.
          </p>
          <h3>WEB DEVELOPMENT</h3>
             <p>Our web developers combine clean coding with creativity to achieve diverse 
              web functionalities. You can improve your online business efficiency by using 
              our web development for web-based CMS, CRM and of course, creating websites.</p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Some Of Our Work</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <h3>
            Myriams Hope Hemp
          </h3>
          <a href="https://www.myriamshopehemp.com/" target="_blank" rel="noopener noreferrer">
            <span className="image main">
              <img src={myriam} alt="" />
            </span>
          </a>
          <p>
            Myriams Hope Hemp strives to produce and deliver products that are pure and to ship it efficiently to the customer in the soonest time frame possible.They provide their customers relief with their custom-made Cannabis Oil products.

            Myriam's Hope was unique in that it has an incredible number of visitors a month. <br/> 
            <br />
            Their site, while built on WordPress for easy content mangement also had to be optimized for speed and efficiency.  Through careful planning and with a focus on customer satisfaction, we built a pleasing site which is easily to navigate while also providing a healing, calming experience.<br />
            <br />
            <a href="https://www.myriamshopehemp.com/" target="_blank" rel="noopener noreferrer">View Site</a>
          </p>
          <h3>
            Tranzition Engineering Designs
          </h3>
          <a href="https://tedesigns.com" target="_blank" rel="noopener noreferrer">
            <span className="image main">
              <img src={ted} alt="" />
            </span>
          </a>
          <p>
            T.E.Designs builds high quality custom WIY rollcages for off-roading vehicles.  The company family owned and operated with great products and amazing customer service!<br />
            <br/>
            T.E.Designs was built on WordPress with a minimal aesthetic.  The site is designed to catch the customers attention with an immediate off-road image.  Without much other interaction on the home page, the customer is immediately led to the purchase portal for browsing products.<br />
            <br />
            <a href="https://tedesigns.com" target="_blank" rel="noopener noreferrer">View Site</a>
          </p>
          <h3>
            CannaCura
          </h3>
          <a href="https://cannacura.net" target="_blank" rel="noopener noreferrer">
          <span className="image main">
             <img src={canna} alt="" />
            </span>
            </a>
          <p>
          CannaCura is dedicated to bringing health & wellness to the 
          world by offering a line of cannabinoid products that promote 
          a healthy body and mind. Our ultimate goal is to help people, 
          and their loved ones, achieve holistic healing, happiness and 
          a healthy lifestyle.<br/>
          <br/> 
          Their website was built using a wordpress CMS system with a 
          custom design centered around a balanced, centered approach 
          with a earthy and natural color palette.  The flat modern design 
          approach emphasises the healthy state of mind and general well-being 
          promoted by the company.<br />
          <br />
           <a href="https://cannacura.net" target="_blank" rel="noopener noreferrer">View Site</a>
          </p>

          <h3>
            Hangtown Range
          </h3>
          <a href="https://hangtownrange.com" target="_blank" rel="noopener noreferrer">
          <span className="image main">
             <img src={hr} alt="" />
            </span>
            </a>
          <p>
          Hangtown range is a small locally owned shooting range where customers
          can feel comfortable practicing all types of weapons in an up to date, 
          clean and friendly environment.  The staff is always professional and 
          welcoming to new and repeat guests.  Their state of the art Virtual 
          Range is an amazing time!<br/>
          <br/>
          Their website was built using a wordpress CMS system with a custom 
          darker design with a pop of red.  The flat but modern design portrays 
          the inviting, friendly atmosphere where customers feel welcome to learn 
          and train.<br />
          <br />
           <a href="https://hangtownrange.com" target="_blank" rel="noopener noreferrer">View Site</a>
          </p>

          <h3>
            The Flavolution
          </h3>
          <a href="https://theflavolution.com" target="_blank" rel="noopener noreferrer">
          <span className="image main">
             <img src={flav} alt="" />
            </span>
            </a>
          <p>
          Flavolution is an e-commerce site built on the WordPress 
          platform using an elegant and simplified navigation. The 
          focus was to highlight their small yet amazing lineup of 
          seasonings. <br />
          <br />
           <a href="https://theflavolution.com" target="_blank" rel="noopener noreferrer">View Site</a>
          </p>

          <h3>
            Artistic Ink
          </h3>
          <a href="https://pmu-artisticink.com" target="_blank" rel="noopener noreferrer">
          <span className="image main">
             <img src={artisticink} alt="" />
            </span>
            </a>
          <p>
            Artistic Ink is a permanent cosmetics company which 
            provides all types of permanent cosmetic services.<br />
            <br />
           <a href="https://pmu-artisticink.com" target="_blank" rel="noopener noreferrer">View Site</a>
          </p>

          <h3>
            Rear Light Bar
          </h3>
          <a href="https://rlbstore.com" target="_blank" rel="noopener noreferrer">
          <span className="image main">
             <img src={rlb} alt="" />
            </span>
            </a>
          <p>
            Rear Light Bar is an offroad lightbar company which 
            distributes custom lighting for your 4x4 vehicle.<br />
            <br />
           <a href="https://rlbstore.com" target="_blank" rel="noopener noreferrer">View Site</a>
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={about} alt="" />
          </span>
          <h3>
            Looking for a perfect web agency?
          </h3>
          <h3>
          You’ve just found it – we can realize any project!
          </h3>
          <p>
          At UrbanRise Designs our goal is to build a better web experience 
          for all our clients and their users. We utilize our experience and 
          expertise from over 10 years of web design and web development to 
          create solutions that fit your needs.
          </p>
          <h3>
          Our goal is clients’ success and future growth
          </h3>
          <p>
          We focus on Content Management System (CMS) driven solutions that 
          empower business users. We believe in clean, efficient code, and to 
          that end, we are continually searching for the best in new technology. 
          Some developers take a break by playing foosball – our team is known 
          to get frothed up over a new developer tool. True fact
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
           <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
           <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/urbanrisedesigns"
                className="icon fa-twitter" target="_blank" rel="noopener noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/urbanrisedesigns" className="icon fa-facebook" target="_blank" rel="noopener noreferrer">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/urbanrisedesigns" className="icon fa-instagram" target="_blank" rel="noopener noreferrer">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aaroncuddeback"
                className="icon fa-github" target="_blank" rel="noopener noreferrer"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
