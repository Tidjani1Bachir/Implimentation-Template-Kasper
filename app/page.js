"use client"
import React ,{ useState } from 'react';
import Video from 'next-video';
import getStarted from '/videos/awesome-video.mp4';
import Image from 'next/image';
import image1 from "@/public/about.png"
import image2 from "@/public/footer.jpg"
import image3 from "@/public/logo.png"
import image4 from "@/public/mobile.png"
import image5 from "@/public/owl1.jpg"
import image6 from "@/public/pexels-tetyana-kovyrina-937980.jpg"
import image7 from "@/public/phone.jpg"
import image8 from "@/public/phone1.png"
import image9 from "@/public/shuffle-1.jpg"
import image10 from "@/public/shuffle-01.jpg"
import image11 from "@/public/shuffle-2.jpg"
import image12 from "@/public/shuffle-02.jpg"
import image13 from "@/public/shuffle-3.jpg"
import image14 from "@/public/shuffle-03.jpg"
import image15 from "@/public/shuffle-4.jpg"
import image16 from "@/public/shuffle-04.jpg"
import image17 from "@/public/shuffle-5.jpg"
import image18 from "@/public/shuffle-05.jpg"

import image20 from "@/public/shuffle-6.jpg"
import image21 from "@/public/shuffle-06.jpg"
import image22 from "@/public/shuffle-7.jpg"
import image23 from "@/public/shuffle-07.jpg"
import image24 from "@/public/shuffle-8.jpg"
import image25 from "@/public/shuffle-08.jpg"
import image26 from "@/public/skills-01.jpg"
import image27 from "@/public/skills-02.jpg"
import image28 from "@/public/subscribe.jpg"
import image29 from "@/public/User1.jpg"
import image30 from "@/public/User2.jpg"
import image31 from "@/public/video-section.jpg"


import "./normalize.css"
import "./styles.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"
export default function Home() {
  const [showMenu,setShowMenu]=useState(false) 
  return (
    <>
    {/* <!-- start Header --> */}
    <header>
      <div className="container">
        <Image src={image3} alt="logo" />
        <nav>
        <FontAwesomeIcon className="toggle-menu fas fa-bars" icon={faBars} onClick={()=> {setShowMenu(!showMenu)}}/>
          
          <ul className={`${showMenu ? 'show' :""}`}>
            <li><a className="active" href="#home">HOME</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#pricing">PRICING</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>

          <div className="form">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </nav>
      </div>
    </header>

    {/* <!-- end Header --> */}

    {/* <!--start Landing--> */}
    <div className="landing" id="home">
      <div className="overlay">
        <div className="text">
          <div className="content">
            <h2>
              Hello World ! <br />
              We are kasper we make art
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates magni quibusdam facilis voluptatem nemo labore fuga
              quasi dolorem nihil voluptate, laudantium doloremque animi
              voluptatum sequi, alias distinctio dicta ex quo?
            </p>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-angle-left change-background"></i>
      <i className="fa-solid fa-angle-right change-background"></i>
      <ul className="bullets">
        <li></li>
        <li className="active-bullet"></li>
        <li></li>
      </ul>
    </div>
    {/* <!--end Landing--> */}
    {/* <!-- Start services --> */}
    <div className="services" id="services">
      <div className="container">
        <div className="main-heading">
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            ducimus libero fuga, numquam dicta quo laudantium nisi aut rem fugit
            error! Quo commodi sunt sapiente, dolorem repellat quam dolorum
            nihil!
          </p>
        </div>
        <div className="services-container">
          <div className="srv-box">
            <i className="fas fa-desktop fa-3x"></i>

            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolorum quam illo optio quidem hic, reiciendis eius
                officia aliquam, unde iste saepe consequuntur quaerat omnis
                debitis? Consequuntur quis corporis necessitatibus.
              </p>
            </div>
          </div>

          <div className="srv-box">
            <i
              className="fa-brands fa-searchengin fa-3x"
              style={{fontSize: "4rem"}}
            ></i>
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolorum quam illo optio quidem hic, reiciendis eius
                officia aliquam, unde iste saepe consequuntur quaerat omnis
                debitis? Consequuntur quis corporis necessitatibus.
              </p>
            </div>
          </div>

          <div className="srv-box">
            <i className="fas fa-pencil-ruler fa-3x"></i>
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolorum quam illo optio quidem hic, reiciendis eius
                officia aliquam, unde iste saepe consequuntur quaerat omnis
                debitis? Consequuntur quis corporis necessitatibus.
              </p>
            </div>
          </div>

          <div className="srv-box">
            <i className="fa-solid fa-camera fa-3x"></i>
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolorum quam illo optio quidem hic, reiciendis eius
                officia aliquam, unde iste saepe consequuntur quaerat omnis
                debitis? Consequuntur quis corporis necessitatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- End services --> */}
    {/* <!--! Start Design --> */}
    <div className="design" id="">
      <div className="Image">
        <Image src={image4} alt="phone" />
      </div>
      <div className="text">
        <h2>Our Design Comes with...</h2>
        <ul>
          <li>Responsive Design</li>
          <li>Modern And Clean Design</li>
          <li>Clean Code</li>
          <li>Browser Friendly</li>
        </ul>
      </div>
    </div>
    {/* <!--! End Design --> */}
    {/* <!-- ? Start Portfolio --> */}
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="main-heading">
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            ducimus libero fuga, numquam dicta quo laudantium nisi aut rem fugit
            error! Quo commodi sunt sapiente, dolorem repellat quam dolorum
            nihil!
          </p>
        </div>
        <ul className="shuffle">
          <li className="Active">All</li>
          <li>App</li>
          <li>Photo</li>
          <li>Web</li>
          <li>Print</li>
        </ul>
      </div>
      <div className="imgs-container">
        <div className="box">
          <Image className='image' src={image23} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <Image className='image' src={image12} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>

        <div className="box">
          <Image width={400} className='image' src={image14} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <div className='image'>
          <Image  src={image23} alt="" />
          </div>
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <Image className='image' src={image13} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>

        <div className="box">
          <Image className='image' src={image18} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>

        <div className="box">
          <Image className='image' src={image11} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <Image className='image' src={image24} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
      </div>
      <a href="#" className="more">More</a>
    </div>
    {/* <!-- ? End Portfolio --> */}
    {/* <!-- ^Start Video --> */}
    <div class="video">
    <Video loop={true} playing={true} autoplay={true}  src={getStarted} />;
      
      <div class="text">
        <h2>Super Awesome Video Here</h2>
        <p>Its All You Need</p>
        <button>See More</button>
      </div>
    </div>
    {/* <!-- ^Start Video --> */}
    {/* <!--! Start About --> */}
    <div className="about" id="about">
      <div className="container">
        <div className="main-heading">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            odit, quaerat atque distinctio fugit debitis et sed dicta maxime
            quae minima, eveniet explicabo optio ducimus, labore necessitatibus
            totam aliquam repellat.
          </p>
        </div>
        <Image src={image1} alt="" />
      </div>
    </div>
    {/* <!--! End About --> */}
    {/* <!-- Start Stats --> */}
    <div className="stats">
      <div className="container">
        <div className="box">
          <i className="fas fa-mug-hot"></i>
          <div className="number">1.236</div>
          <p>coffe Drinks</p>
        </div>
        <div className="box">
          <i className="far fa-folder"></i>
          <div className="number">1.236</div>
          <p>coffe Drinks</p>
        </div>
        <div className="box">
          <i className="far fa-envelope"></i>
          <div className="number">1.236</div>
          <p>coffe Drinks</p>
        </div>
        <div className="box">
          <i className="fas fa-trophy"></i>
          <div className="number">1.236</div>
          <p>coffe Drinks</p>
        </div>
      </div>
    </div>
    {/* <!-- End Stats --> */}
    {/* <!-- * Start Skills --> */}
    <div className="our-skills">
      <div className="container">
        <div className="testimonials">
          <h3>testimonials</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            aliquid explicabo ullam voluptate quas adipisci doloribus minima
            ipsam deleniti, tenetur a odio at officia maxime reiciendis dolores
            excepturi iusto quibusdam?
          </p>
          <div className="content">
            <Image src={image29} alt="" />
            <div className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              accusantium beatae facilis provident! Maxime rerum rem et officiis
              nobis, deserunt ullam ab impedit accusamus, facilis voluptate
              reprehenderit quod a commodi.
              <p>Jhon Doe, CEO</p>
            </div>
          </div>
          <div className="content">
            <Image src={image30} alt="" />
            <div className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              accusantium beatae facilis provident! Maxime rerum rem et officiis
              nobis, deserunt ullam ab impedit accusamus, facilis voluptate
              reprehenderit quod a commodi.
              <p>Jhon Doe, CEO</p>
            </div>
          </div>
          <ul className="bullets">
            <li></li>
            <li className="active"></li>
            <li></li>
          </ul>
        </div>
        <div className="Skills">
          <h3>Skills</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            aliquid explicabo ullam voluptate quas adipisci doloribus minima
            ipsam deleniti, tenetur a odio at officia maxime reiciendis dolores
            excepturi iusto quibusdam?
          </p>
          <div className="prog-holder">
            <h4>Adobe</h4>
            <div className="prog">
              <span style={{width: "90%"}} data-progress="90%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>Html &amp; Css</h4>
            <div className="prog">
              <span style={{width: "85%"}} data-progress=" 85%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>JavaScript</h4>
            <div className="prog">
              <span style={{width: "80%"}} data-progress="80%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>Php</h4>
            <div className="prog">
              <span style={{width: "90%"}} data-progress="90%"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- *End Skills --> */}
    {/* <!--! Start Quote --> */}
    <div className="quote">
      <div className="container">
        <q
          >accumsan id imperdiet et, prottito at sem. Mauris blandit aliquet
          elit, aget tincidunt.</q
        >
        <span>Jhon Doe</span>
      </div>
    </div>
    {/* <!--! End Quote --> */}
    {/* <!--? Start Pricing--> */}
    <div className="pricing" id="pricing">
      <div className="container">
        <div className="main-heading">
          <h2>Pricing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut non
            eius in nobis? Perferendis quod illo ipsum aliquid at. Fuga
            quibusdam veniam pariatur corporis necessitatibus aspernatur dolor
            ad, non facilis.
          </p>
        </div>
        <div className="plans">
          <div className="plan">
            <div className="head">
              <h3>Basic</h3>
              <span>19</span>
            </div>
            <ul>
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
            </ul>
            <div className="foot">
              <a href="#">Buy Now</a>
            </div>
          </div>
          <div className="plan">
            <div className="head">
              <h3>Basic</h3>
              <span>19</span>
            </div>
            <ul>
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
            </ul>
            <div className="foot">
              <a href="#">Buy Now</a>
            </div>
          </div>
          <div className="plan">
            <div className="head">
              <h3>Basic</h3>
              <span>19</span>
            </div>
            <ul>
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
            </ul>
            <div className="foot">
              <a href="#">Buy Now</a>
            </div>
          </div>
          <div className="plan">
            <div className="head">
              <h3>Basic</h3>
              <span>19</span>
            </div>
            <ul>
              <li>Feature No 1</li>
              <li>Extra Feature</li>
              <li>Extra Feature No 2</li>
              <li>Feature</li>
            </ul>
            <div className="foot">
              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
        <p className="contact-text">Contact us if you have special request</p>
        <a href="#" className="contact-link"> Contact Us </a>
      </div>
    </div>
    {/* <!--? End Pricing --> */}
    {/* <!--todo: Start Subscribe--> */}
    <div className="subscribe">
      <div className="container">
        <form action="">
          <i className="far fa-envelope fa-lg"></i>
          <input type="email" name="mail" id="" placeholder="Your Email" />
          <input type="submit" value="Subscribe" />
        </form>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
          minus ullam porro architecto aut perspiciatis in atque numquam omnis
          accusantium non at fuga ea temporibus voluptatibus exercitationem quos
          ex repellat.
        </p>
      </div>
    </div>
    {/* <!--todo: End Subscribe--> */}
    {/* <!--*Start Contact --> */}
    <div className="contact" id="contact">
      <div className="container">
        <div className="main-heading">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
            necessitatibus! Voluptate debitis distinctio cupiditate
            exercitationem id dolor, perspiciatis culpa iusto alias veritatis
            accusamus rem dignissimos! Assumenda atque voluptates optio vero.
          </p>
        </div>
        <div className="content">
          <form action="">
            <input
              className="main-input"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="main-input"
              type="email"
              name="mail"
              placeholder="Your Email"
            />
            <textarea
              className="main-input"
              name="message"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send Message" />
          </form>
          <div className="info">
            <h4>Fet In Touch</h4>
            <span className="phone"> +00 123.256.789 </span>
            <span className="phone"> +00 123.256.789 </span>
            <h4>Where We Are</h4>
            <address>
              Awesome Address 17 <br />New York, NYC <br />123-4567-890 <br />
              USA
            </address>
          </div>
        </div>
      </div>
    </div>
    {/* <!--*end Contact --> */}
    {/* <!--!Start Footer --> */}
    <div className="footer">
      <div className="container">
        <Image src={image3} alt="logo" />
        <p>We Are Social</p>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fas fa-home"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p className="copyright">
          &copy; 2021 <span>Kasper</span> All right Reserved
        </p>
      </div>
    </div>
    {/* <!--!End Footer --> */}
  </>
  );
}
