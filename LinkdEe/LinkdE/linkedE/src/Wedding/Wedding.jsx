import React from 'react'
import './wedding.css';
import dicor1 from "../assets/Images/graduation/dicore1.jpg";
import dicor2 from "../assets/Images/graduation/dicore2.jpg";
import dicor3 from "../assets/Images/graduation/dicore3.jpg";
import cake1 from "../assets/Images/graduation/cake1.jpg";
import cake2 from "../assets/Images/graduation/cake2.jpg";
import Cupcake from "../assets/Images/graduation/cupcake.jpg";
import ferenji from "../assets/Images/graduation/ferenji.jpg";
import fruit from "../assets/Images/graduation/fruit.jpg";
import catering3 from "../assets/Images/birthday/catering3.jpg";
import venue2 from "../assets/Images/wedding/venue2.jpg";
import venue1 from "../assets/Images/wedding/venue1.jpg";
import venue3 from "../assets/Images/wedding/venue3.jpg";
import photo1 from "../assets/Images/birthday/photo1.jpg";
import photo2 from "../assets/Images/birthday/photo2.jpg";
import photo3 from "../assets/Images/birthday/photo3.jpg";

export default function Wedding() {
  return (
    <>
  <section className="service_head">
    <h1 className="service">Wedding Services</h1>
  </section>
  <main className="service_lists">
    <div className="services">
      <div className="venue">
        <h1>Venue Rental</h1>
        <div className="box-container">
          <div className="box">
            <img
              src={venue1}
              alt="Burger Image"
            />
            <h2>Urban Loft Spaces</h2>
            <div className="rating">
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
              we provide trendy and modern loft-style venues perfect for hosting
              creative events, product launches, and art exhibitions. Our
              industrial-chic spaces offer a unique ambiance for those seeking a
              contemporary setting
            </p>
            <button type="submit">
              <a
                href="../individual/wedding/Venue Rental/Venue Rental 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={venue2}
              alt="Pizza Image"
            />
            <h2>Majestic Events</h2>
            <div className="rating">
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
              we specializes in outdoor venues surrounded by enchanting
              landscapes. Ideal for garden weddings, anniversary parties, and
              family reunions, our venues provide a picturesque backdrop for any
              celebration.
            </p>
            <button type="submit">
              <a
                className="contactbtn"
                href="../individual/wedding/Venue Rental/Venue Rental 2/individual.html"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={venue3}
              alt="Special Image"
            />
            <h2>Metro Lounge &amp; Rooftops</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(8)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=789+Maple+St"
                target="_blank"
              >
                🏠 22 next to golagol building
              </a>
              <br />
            </p>
            <p className="comment">
              we offer and trendy urban spaces, including rooftop venues with
              stunning city views. Perfect for cocktail parties, networking
              events, and fashion shows, our venues bring urban sophistication
              to any occasion.
            </p>
            <button type="submit">
              <a
                href="../individual/wedding/Venue Rental/Venue Rental 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="decor">
        <h1>Decorations</h1>
        <div className="box-container">
          <div className="box">
            <img
               src={dicor1}
              alt="Burger Image"
            />
            <h2>DazzleDelights Kid's Fiesta</h2>
            <div className="rating">
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
                href="../individual/wedding/Decorations/Decoration 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
               src={dicor2}
              alt="Pizza Image"
            />
            <h2>SparkleSplash Junior Jubilee</h2>
            <div className="rating">
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
                href="../individual/wedding/Decorations/Decoration 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={dicor3}
              alt="Special Image"
            />
            <h2>SophistiSurprises</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(8)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=789+Maple+St"
                target="_blank"
              >
                🏠 22 next to golagol building
              </a>
              <br />
            </p>
            <p className="comment">
              Do you want to surprise your spouse, brother,family then this is
              the best choice for you!!!
            </p>
            <button type="submit">
              <a
                href="../individual/wedding/Decorations/Decoration 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="catering">
        <h1>Catering</h1>
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
                href="../individual/wedding/Catering/Catering 1/individual.html"
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
                href="../individual/wedding/Catering/Catering 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
             src={catering3}
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
                href="../individual/wedding/Catering/Catering 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="bakery">
        <h1>Bakery</h1>
        <div className="box-container">
          <div className="box">
            <img
               src={cake1}
              alt="diseny dreams cafe"
            />
            <h2>Disney Dreams Café</h2>
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
                href="../individual/wedding/Bakery/bakery 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
               src={cake2}
              alt="Pizza Image"
            />
            <h2>Sweet Celebrations Buffet</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(878)
            </div>
            <p>
              <strong>Address:</strong>
              <a
                href="https://www.google.com/maps?q=456+Oak+St"
                target="_blank"
              >
                🏠 bole behind bora park
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
                href="../individual/wedding/Bakery/bakery 2/individual.html"
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
            <h2>FrostyFlair Cake Artistry</h2>
            <div className="rating">
              <span>★★★★★</span>5.0(675)
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
              Elevate celebrations with FrostyFlair Cake Artistry, where
              delectable ice cream cakes become edible masterpieces.
            </p>
            <button type="submit">
              <a
                href="../individual/wedding/Bakery/bakery 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="photography">
        <h1>Photography</h1>
        <div className="box-container">
          <div className="box">
            <img
              src={photo1}
              alt="Burger Image"
            />
            <h2>LensCrafted Memories</h2>
            <div className="rating">
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
                href="../individual/wedding/Photography/Photography 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
                src={photo2}
              alt="Pizza Image"
            />
            <h2>Radiant Visions Photography</h2>
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
              we paint emotions, telling stories that linger in the heart long
              after the shutter has closed."
            </p>
            <button type="submit">
              <a
                href="../individual/wedding/Photography/Photography 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={photo3}
              alt="Special Image"
            />
            <h2>Eclipsed Elegance Photography</h2>
            <div className="rating">
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
                href="../individual/wedding/Photography/Photography 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
            +
          </div>
        </div>
      </div>
    </div>
  </main>
</>

  )
}
