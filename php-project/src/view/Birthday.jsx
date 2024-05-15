import React from 'react'
import './Birthday.css';
import ba from "../assets/Images/birthday/ba.jpg" ;
import Birthdaybg from "../assets/Images/birthday/birthdaybg.jpg";
import burger from "../assets/Images/birthday/burger.jpg";
import cake from "../assets/Images/birthday/cake.jpg";
import cake1 from "../assets/Images/birthday/cake1.jpg";
import cake2 from "../assets/Images/birthday/cake2.jpg";
import cake3 from "../assets/Images/birthday/cake3.jpg";
import catering1 from "../assets/Images/birthday/catering1.jpg";
import catering2 from "../assets/Images/birthday/catering2.jpg";
import catering3 from "../assets/Images/birthday/catering3.jpg";
import decor1 from "../assets/Images/birthday/decor1.jpg";
import decor2 from "../assets/Images/birthday/decor2.jpg";
import decor3 from "../assets/Images/birthday/decor3.jpg"
import kitfo from "../assets/Images/birthday/kitfo.jpg";
import makeup1 from "../assets/Images/birthday/makeup1.jpg"
import makeup2 from "../assets/Images/birthday/makeup2.jpg"
import makeup3 from "../assets/Images/birthday/makeup3.jpg"
import photo1 from "../assets/Images/birthday/photo1.jpg";
import photo2 from "../assets/Images/birthday/photo2.jpg";
import photo3 from "../assets/Images/birthday/photo3.jpg";

export default function Birthday() {
  return (
    <>
    <header>
      <div className="service_head">
       <div className="service"><h1 >Birthday Services</h1></div> 
      </div>
    </header>
    <main className="service_lists">
      <div className="services">
        <div className="decor">
         <div className='bold'> <h1><b>Decorations</b></h1> </div>
          <div className="box-container">
            <div className="side-box">
              <img
                src={decor1}
                alt="Burger Image"
              />
              <h2>DazzleDelights Kid's Fiesta</h2>
              <div className="ratingg">
                <span>★★★★☆</span>5.0(89)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=123+Main+St"
                  target="_blank"
                >
                  🏠Nifas silk lafto 230 street
                </a>
                <br />
              </p>
              <p className="comment">
                Unleash the magic of DazzleDelights, where every birthday becomes
                joyous fiesta with enchanting decorations
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Decorations/Decoration 1/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img
                src={decor2}
                alt="Pizza Image"
              />
              <h2>SparkleSplash Junior Jubilee</h2>
              <div className="ratingg">
                <span>★★★★★</span>5.0(123)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=123+Main+St"
                  target="_blank"
                >
                  🏠Megenagna on metebaber building
                </a>
                <br />
              </p>
              <p className="comment">
                Immerse your little ones in the whimsical world of SparkleSplash
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Decorations/Decoration 2/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img
                src={decor3}
                alt="Special Image"
              />
              <h2>SophistiSurprises</h2>
              <div className="ratingg">
                <span>★★★★★</span>5.0(8)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=789+Maple+St"
                  target="_blank"
                >
                  🏠 22 golagol building
                </a>
                <br />
              </p>
              <p className="comment">
                Do you want to surprise your spouse, brother,family then this is
                the best choice for you!!!
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Decorations/Decoration 3/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="catering">
         <div className='bold'><h1><b>Catering</b></h1> </div> 
          <div className="box-container">
            <div className="side-box">
              <img
                src={catering1}
                alt="flavor fusion"
              />
              <h2>FlavorFusion</h2>
              <div className="ratingg">
                <span>★★★★☆</span>
                5.0(234)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=123+Main+St"
                  target="_blank"
                >
                  🏠Nifas silk lafto 957 street
                </a>
                <br />
              </p>
              <p className="comment">
                Experience a burst of unique and delectable flavors in every bite
                at FlavorFusion. Unleash your taste buds to a culinary journey
                like no other
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Catering/Catering 1/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img
                src={catering2}
                alt="Pizza Image"
              />
              <h2>Gourmet Feast Express</h2>
              <div className="ratingg">
                <span>★★★★★</span>5.0(8997)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=123+Main+St"
                  target="_blank"
                >
                  🏠Nifas silk lafto 957 street
                </a>
                <br />
              </p>
              <p className="comment">
                Description: Order a culinary journey to your doorstep with
                Gourmet Feast Express. Indulge in a personalized table of
                delectable dishes curated just for you
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Catering/Catering 2/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img
                src={catering3}
                alt="Special Image"
              />
              <h2>Ethiopian Gastronomic Heritage</h2>
              <div className="ratingg">
                <span>★★★★★</span>5.0(213)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=789+Maple+St"
                  target="_blank"
                >
                  🏠 Lebu mebrat hayl infront of varnero
                </a>
                <br />
              </p>
              <p className="comment">
                Experience the true essence of Ethiopia through our traditional
                dishes!!!
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Catering/Catering 3/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="makeup">
        <div className='bold'><h1><b>Make Up</b></h1> </div> 
          <div className="box-container">
            <div className="side-box">
              <img src={makeup1}alt="Disney" />
              <h2>Disney makeovers</h2>
              <div className="ratingg">
                <span>★★★☆☆</span>5.0(467)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=123+Main+St"
                  target="_blank"
                >
                  🏠infont of bora amusement park
                </a>
                <br />
              </p>
              <p className="comment">
                let your kids transform into their favorite Disney characters,
                experiencing the enchantment of makeovers that bring beloved
                stories to life.
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Makeup/Makeup 1/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img src={makeup2}alt="Petite" />
              <h2>Petite Pixie Salon</h2>
              <div className="ratingg">
                <span>★★★★★</span>5.0(8786)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=456+Oak+St"
                  target="_blank"
                >
                  🏠 6 kilo
                </a>
                <br />
              </p>
              <p className="comment">
                A mini salon designed just for kids, where tiny transformations
                bring big smiles through delightful hair and makeup adventures.
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Makeup/Makeup 2/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img
                src={makeup3}
                alt="Sweet beauty"
              />
              <h2>Sweet beauty</h2>
              <div className="ratingg">
                <span>★★★☆☆</span>5.0(490)
              </div>
              <p>
                bole medhanialem behind getu commercial
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=789+Maple+St"
                  target="_blank"
                >
                  🏠 summit
                </a>
                <br />
              </p>
              <p className="comment">
                we know inner beauty matters but show them how beautiful you are
                outside girl!!
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Makeup/Makeup 3/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="bakery">
        <div className='bold'><h1><b>Bakery</b></h1> </div>   
          <div className="box-container">
            <div className="side-box">
              <img
                src={cake1}
                alt="diseny dreams cafe"
              />
              <h2>Disney Dreams Café</h2>
              <div className="ratingg">
                <span>★★★★</span>
                <span>☆</span>
                5.0(345)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=123+Main+St"
                  target="_blank"
                >
                  🏠mexico mesqel square
                </a>
                <br />
              </p>
              <p className="comment">
                we provide custom-designed cakes, inspired by beloved Disney
                characters all you got to do is order!!!
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Bakery/bakery 1/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img
                src={cake2}
                alt="Pizza Image"
              />
              <h2>Sweet Celebrations Buffet</h2>
              <div className="ratingg">
                <span>★★★★★</span>5.0(878)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=456+Oak+St"
                  target="_blank"
                >
                  🏠 Megenagna
                </a>
                <br />
              </p>
              <p className="comment">
                Turn your child's birthday into a sugary spectacle with our Sweet
                Celebrations Buffet, featuring an irresistible spread of
                cakes,candies and snacks for an unforgettable experience.
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Bakery/bakery 2/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img
                src={cake3}
                alt="Special Image"
              />
              <h2>FrostyFlair Cake Artistry</h2>
              <div className="ratingg">
                <span>★★★★★</span>5.0(675)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=789+Maple+St"
                  target="_blank"
                >
                  🏠 bole behind bora park
                </a>
                <br />
              </p>
              <p className="comment">
                Elevate celebrations with FrostyFlair Cake Artistry, where
                delectable ice cream cakes become edible masterpieces.
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Bakery/bakery 3/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="photography">
        <div className='bold'><h1><b>Photography</b></h1> </div>  
          <div className="box-container">
            <div className="side-box">
              <img
                src={photo1}
                alt="Burger Image"
              />
              <h2>LensCrafted Memories</h2>
              <div className="ratingg">
                <span>★★☆☆☆</span>5.0(565)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=789+Maple+St"
                  target="_blank"
                >
                  🏠 Megenagna ..zemen building 1st floor
                </a>
                <br />
              </p>
              <p className="comment">
                Immerse yourself in the art of capturing life's precious moments,
                beautifully crafted to etch memories that linger for a lifetime.
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Photography/Photography 1/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img
                src={photo2}
                alt="Pizza Image"
              />
              <h2>Radiant Visions Photography</h2>
              <div className="ratingg">
                <span>★★★★★</span>5.0(878)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=789+Maple+St"
                  target="_blank"
                >
                  🏠 Megenagna ..zemen building 1st floor
                </a>
                <br />
              </p>
              <p className="comment">
                we paint emotions, telling stories that linger in the heart long
                after the shutter has closed."
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Photography/Photography 2/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
            <div className="side-box">
              <img
                src={photo3}
                alt="Special Image"
              />
              <h2>Eclipsed Elegance Photography</h2>
              <div className="ratingg">
                <span>★★★☆☆</span>5.0(19k)
              </div>
              <p>
                <strong>Address:</strong>
                <a
                  href="https://www.google.com/maps?q=789+Maple+St"
                  target="_blank"
                >
                  🏠 Megenagna
                </a>
                <br />
              </p>
              <p className="comment">
                In the lens, we find poetry, capturing the elegance that
                transcends fleeting moments into everlasting memories.
              </p>
              <button type="submit">
                <a
                  href="../individual/birthday/Photography/Photography 3/individual.html"
                  className="contactbtn"
                >
                  Contact
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  
  )
}
