import React from 'react'
import './concert.css';
import decor1 from "../assets/Images/concert/decore1.jpg";
import decore2 from "../assets/Images/concert/decore2.jpg";
import decore3 from "../assets/Images/concert/decore3.jpg";
import eventplanner from "../assets/Images/concert/eventplanner.jpg";
import eventplanner2 from "../assets/Images/concert/eventplanner2.jpg";
import eventplanner3 from "../assets/Images/concert/eventplanner3.jpg";
import venue from "../assets/Images/concert/venue.jpg";
import venue1 from "../assets/Images/concert/venue1.jpg";
import venue3 from "../assets/Images/concert/venue3.jpg";
import photo1 from "../assets/Images/birthday/photo1.jpg";
import photo2 from "../assets/Images/birthday/photo2.jpg";
import photo3 from "../assets/Images/birthday/photo3.jpg";
import catering1 from "../assets/Images/birthday/catering1.jpg";
import catering2 from "../assets/Images/birthday/catering2.jpg";
import catering3 from "../assets/Images/birthday/catering3.jpg";

export default function Concert() {
  return (
    <>
  <header>
    <section className="service_head">
      <h1 className="service">Concert Services</h1>
    </section>
  </header>
  <main className="service_lists">
    <div className="services">
    <div className='bold'> <h1><b>Event Planning</b></h1> </div>
        
        <div className="box-container">
          <div className="box">
            <img
              src={eventplanner}
              alt="Innovate Events & Designs"
            />
            <h2>Innovate Events &amp; Designs</h2>
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
              we are an event planning company known for its creativity and
              innovation. From conceptualizing unique themes to executing
              flawless logistics, our team redefines event experiences.
              Specializing in corporate functions, product launches, and themed
              parties, Innovate Events &amp; Designs thrives on pushing the
              boundaries of imagination to create events that inspire.
            </p>
            <button type="submit">
              <a
                href="../individual/concert/Event Planning/Event Planning1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
             src={eventplanner2}
              alt="Elite Occasions Event Planning"
            />
            <h2>Elite Event Planning</h2>
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
              we offer refined elegance and meticulous event execution. From
              intimate celebrations to grand galas, our seasoned team
              specializes in orchestrating unforgettable experiences. With a
              keen eye for detail and a commitment to personalized service,
              Elite Occasions transforms visions into seamless realities,
              ensuring every event is a celebration of sophistication.
            </p>
            <button type="submit">
              <a
                href="../individual/concert/Event Planning/Event Planning2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
             src={eventplanner3}
              alt="Special Image"
            />
            <h2>Sunlight Events</h2>
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
              We are a trailblazing event planning company known for its
              creativity and innovation. From conceptualizing unique themes to
              executing flawless logistics, our team redefines event
              experiences. Specializing in corporate functions, product
              launches, and themed parties, Innovate Events &amp; Designs
              thrives on pushing the boundaries of imagination to create events
              that inspire.
            </p>
            <button type="submit">
              <a
                href="../individual/concert/Event Planning/Event Planning3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      
      <div className="photography">
      <div className='bold'> <h1><b>Photography</b></h1> </div>
        <div className="box-container">
          <div className="box">
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
                href="../individual/concert/Photography/Photography 1/individual.html"
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
                href="../individual/concert/Photography/Photography 2/individual.html"
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
                href="../individual/concert/Decorations/Decoration 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="decor">
       <div className='bold'> <h1><b>Decorations</b></h1> </div>
        <div className="box-container">
          <div className="box">
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
                href="../individual/concert/Decorations/Decoration 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
             src={decore2}
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
                href="../individual/concert/Decorations/Decoration 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
             src={decore3}
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
                href="../individual/concert/Decorations/Decoration 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="venue">
      <div className='bold'> <h1><b>Venue Rental</b></h1> </div> 
        <div className="box-container">
          <div className="box">
            <img
             src={venue}
              alt="Burger Image"
            />
            <h2>Urban Loft Spaces</h2>
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
              we provide trendy and modern loft-style venues perfect for hosting
              creative events, product launches, and art exhibitions. Our
              industrial-chic spaces offer a unique ambiance for those seeking a
              contemporary setting
            </p>
            <button type="submit">
              <a
                href="../individual/concert/Venue Rental/Venue Rental 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
              src={venue1}
              alt="Pizza Image"
            />
            <h2>Majestic Gardens &amp; Events</h2>
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
              we specializes in outdoor venues surrounded by enchanting
              landscapes. Ideal for garden weddings, anniversary parties, and
              family reunions, our venues provide a picturesque backdrop for any
              celebration.
            </p>
            <button type="submit">
              <a
                href="../individual/concert/Venue Rental/Venue Rental 2/individual.html"
                className="contactbtn"
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
            <div className="ratingg">
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
                href="../individual/concert/Venue Rental/Venue Rental 3/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="catering">
      <div className='bold'> <h1><b>Catering</b></h1> </div>  
        <div className="box-container">
          <div className="box">
            <img
                src={catering3}
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
                href="../individual/concert/Catering/Catering 1/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
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
                href="../individual/concert/Catering/Catering 2/individual.html"
                className="contactbtn"
              >
                Contact
              </a>
            </button>
          </div>
          <div className="box">
            <img
               src={catering1}
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
                href="../individual/concert/Catering/Catering 3/individual.html"
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
