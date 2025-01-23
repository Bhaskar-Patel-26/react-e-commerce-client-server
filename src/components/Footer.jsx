import { Link } from 'react-router-dom';

import instaImg1 from "../assets/instagram-1.jpg";
import instaImg2 from "../assets/instagram-2.jpg";
import instaImg3 from "../assets/instagram-3.jpg";
import instaImg4 from "../assets/instagram-4.jpg";
import instaImg5 from "../assets/instagram-5.jpg";
import instaImg6 from "../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <>
      <footer className='section__container footer__container'>
        <div className='footer__col'>
          <h4>CONTACT INFO</h4>
          <p>
              <span><i className='ri-map-pin-2-fill'></i></span>
              Raipur CG, India
          </p>
          <p>
              <span><i className='ri-mail-fill'></i></span>
              info@thingandcode.com
          </p>
          <p>
              <span><i className='ri-phone-fill'></i></span>
              +91 1234567890
          </p>
        </div>

        <div className='footer__col'>
          <h4>COMPANY</h4>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Work With US</Link>
          <Link to="/">Our Blogs</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>

        <div className='footer__col'>
          <h4>USEFULL LINKS</h4>
          <Link to="/">Help</Link>
          <Link to="/">Track your order</Link>
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
          <Link to="/">Dresses</Link>
        </div>

        <div className='footer__col'>
          <h4>INSTAGRAM</h4>
          <div className='instagram__grid'>
              <img src={instaImg1} alt="Insta Img" />
              <img src={instaImg2} alt="Insta Img" />
              <img src={instaImg3} alt="Insta Img" />
              <img src={instaImg4} alt="Insta Img" />
              <img src={instaImg5} alt="Insta Img" />
              <img src={instaImg6} alt="Insta Img" />
          </div>
        </div>
      </footer>
      <div className='footer__bar'>
        Copyright @ 2025 All rights reserved. 
        <p> Made with ❤️ By Think And Code</p>
      </div>
    </>
  )
}

export default Footer
