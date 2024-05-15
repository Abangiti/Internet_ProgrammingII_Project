import React from 'react'
import './graduation.css';
import photo1 from "../assets/Images/graduation/photo1.jpg";
import photo4 from "../assets/Images/graduation/photo4.jpg";
import photo3 from "../assets/Images/graduation/photo3.jpg";
import dicor1 from "../assets/Images/graduation/dicore1.jpg";
import dicor2 from "../assets/Images/graduation/dicore2.jpg";
import dicor3 from "../assets/Images/graduation/dicore3.jpg";
import cake1 from "../assets/Images/graduation/cake1.jpg";
import cake2 from "../assets/Images/graduation/cake2.jpg";
import Cupcake from "../assets/Images/graduation/cupcake.jpg";
import eli from "../assets/Images/graduation/eli.jpg";
import ferenji from "../assets/Images/graduation/ferenji.jpg";
import fruit from "../assets/Images/graduation/fruit.jpg";
import graduationbg from "../assets/Images/graduation/graduationbg.jpg";
import seraton from "../assets/Images/graduation/seraton.webp";
import hayat from "../assets/Images/graduation/hayat.webp";





export default function Graduation() {
  return (
    <>
  <section className="service_head">
    <h1 className="service">Graduation Services</h1>
  </section>
  <main className="service_lists">
    <div className="services">
      <div className="venue">
      <div className='bold'><h1><b>Venue Rental</b></h1> </div> 
        <div className="box-container">
          <div className="box">
            <img
              src={seraton}
              alt="Sheraton Addis"
            />
            <h2>Sheraton Addis</h2>
            <div className="rating">
              <span>★★★★☆</span>5.0(89)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=123+Main+St"
                target="_blank"
              >
                🏠TAITU STREET, P.O. BOX 6002
              </a>
              <br />
            </p>
            <p className="comment">
              Evocative venues suitable for large conferences or as a wedding
              hall. Welcome your group into the iconic beauty of the Sheraton
              Addis Hotel in Ethiopia..
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Venue Rental/Venue Rental 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
               src={hayat}
              alt="Hyatt Regency"
            />
            <h2>Hyatt Regency</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(123)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=123+Main+St"
                target="_blank"
              >
                🏠Meskel Adebabay
              </a>
              <br />
            </p>
            <p className="comment">
              With its elegant architecture, stunning interiors, and versatile
              spaces, our venue is designed to accommodate a range of occasions,
              from weddings and corporate gatherings to social soirées and
              cultural events.
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Venue Rental/Venue Rental 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={seraton}
              alt="Elilly International Hotel"
            />
            <h2>Elilly International Hotel</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(8)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=789+Maple+St"
                target="_blank"
              >
                🏠Kazanchis
              </a>
              <br />
            </p>
            <p className="comment">
              Between our luxurious rooms, catering by popular restaurant and
              sunlit reception space, we guarantee a celebration beyond your
              expectations.
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Venue Rental/Venue Rental 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="decor">
     < div className='bold'><h1><b>Decorations</b></h1> </div>
        <div className="box-container">
          <div className="box">
            <img
               src={dicor1}
              alt="Addis Dicore"
            />
            <h2>Addis Dicore</h2>
            <div className="rating">
              <span>★★★★☆</span>5.0(89)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=123+Main+St"
                target="_blank"
              >
                🏠around bole,Edna mole 3rd floor
              </a>
              <br />
            </p>
            <p className="comment">
              Embrace the extraordinary and make your space truly remarkable
              with our exceptional offerings.
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Decorations/Decoration 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={dicor2}
              alt="Elita Decore"
            />
            <h2>Elita Decore</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(123)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=123+Main+St"
                target="_blank"
              >
                🏠Dembel city center Ground Floor
              </a>
              <br />
            </p>
            <p className="comment">
              Our well versed knowledge and provision of the widest selection of
              flowers in Ethiopia,as well as our specialization in
              rare,hard-to-find breeds.
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Decorations/Decoration 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={dicor3}
              alt="Diva Decore"
            />
            <h2>Diva Decore</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(8)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=789+Maple+St"
                target="_blank"
              >
                🏠 Bole Road,Getu commercial bldg 3rd
              </a>
              <br />
            </p>
            <p className="comment">
              Crafting Enchanting Masterpieces for Unforgettable Celebrations.
              Your trusted partner in bringing timeless beauty to life with
              passion and precision. Elevate your event with our dedication to
              every detail.
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Decorations/Decoration 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="catering">
      < div className='bold'><h1><b>Catering</b></h1> </div> 
        <div className="box-container">
          <div className="box">
            <img
               src={ferenji}
              alt="flavor fusion"
            />
            <h2>FlavorFusion</h2>
            <div className="rating">
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
                href="../individual/graduation/Catering/Catering 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={fruit}
              alt="Pizza Image"
            />
            <h2>Gourmet Feast Express</h2>
            <div className="rating">
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
                href="../individual/graduation/Catering/Catering 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
               src={Cupcake}
              alt="Special Image"
            />
            <h2>Ethiopian Gastronomic Heritage</h2>
            <div className="rating">
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
                href="../individual/graduation/Catering/Catering 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="bakery">
      < div className='bold'><h1><b>Bakery</b></h1> </div> 
        <div className="box-container">
          <div className="box">
            <img
             src={Cupcake}
              alt="KOBA PATISSERIE & BAKERY"
            />
            <h2>Koba Patisserie &amp; Bakery</h2>
            <div className="rating">
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
                🏠Bole Atlas
              </a>
              <br />
            </p>
            <p className="comment">
              From sourcing to serving, our essential ingredients—the finest and
              freshest—are obtained from trusted and reputable local and global
              suppliers
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Bakery/bakery 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
             src={cake1}
              alt="Latika Bakery"
            />
            <h2>Latika Bakery</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(878)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=456+Oak+St"
                target="_blank"
              >
                🏠 Salite Mehret Rd Next To Cistercian
              </a>
              <br />
            </p>
            <p className="comment">
              Welcome to our delightful bakery, where the aroma of freshly baked
              goods fills the air. Step into a world of pure indulgence and
              treat your senses to a heavenly experience.
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Bakery/bakery 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={cake2}
              alt="Special Image"
            />
            <h2>Cupcake Delights Bakery</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(675)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=789+Maple+St"
                target="_blank"
              >
                🏠 opposite Beer Garden Innr
              </a>
              <br />
            </p>
            <p className="comment">
              Our skilled bakers, using only the finest ingredients, craft a
              delectable array of pastries, bread, and cakes that are sure to
              satisfy your cravings.
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Bakery/bakery 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="photography">
      < div className='bold'><h1><b>Photography</b></h1> </div>  
        <div className="box-container">
          <div className="box">
            <img
             src={photo1}
              alt="age photography"
            />
            <h2>Age Photography</h2>
            <div className="rating">
              <span>★★☆☆☆</span>5.0(565)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=789+Maple+St"
                target="_blank"
              >
                🏠 Bole
              </a>
              <br />
            </p>
            <p className="comment">
              Our dedicated team of skilled photographers is passionate about
              capturing the essence of life's most precious moments
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Photography/Photography 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={photo3}
              alt="BK Photography"
            />
            <h2>BK Photography</h2>
            <div className="rating">
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
              With an artistic eye and technical expertise, we strive to create
              stunning images that evoke emotion and tell a story
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Photography/Photography 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
                src={photo4}
              alt="Johnny Video Production"
            />
            <h2>Johnny Video Production</h2>
            <div className="rating">
              <span>★★★☆☆</span>5.0(19k)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=789+Maple+St"
                target="_blank"
              >
                🏠Berhan Adere Mall 2nd floor
              </a>
              <br />
            </p>
            <p className="comment">
              We utilize the latest technology and equipment to ensure the
              highest quality video production, allowing you to relive your
              cherished memories with clarity and vibrancy.
            </p>
            <button type="submit">
              <a
                href="../individual/graduation/Photography/Photography 3/individual.html"
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
