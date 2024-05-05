import React from 'react'
import './event.css';
import gena  from "../assets/Images/Event_page/gena.jpg";
import spectacle  from "../assets/Images/Event_page/spectacle.jpg";
import flawless  from "../assets/Images/Event_page/flawless.jpg";
import kidscode  from "../assets/Images/Event_page/kidscode.jpg";
import ict  from "../assets/Images/Event_page/ict.jpg";
import codenigh  from "../assets/Images/Event_page/codenight.jpg";


export default function Event() {
  return (
    <main className="above">
      <div className='event_head'>
  <h1>Recent Events:</h1></div>
  <div className="recent">
    <div className="card">
      <div className="card_img">
        <img
             src={gena}
          alt="Christmas Art in Ethiopian culture"
        />
      </div>
      <div className="below_img">
        <h3>Ethiopian Christmas</h3>
        <ul className="address">
          <li>
          <div><b>Location:</b></div>
            
            Lalibela, Ethiopia
          </li>
          <li>
          <div><b>Time:</b></div>
           
            Jan 7, 2:00 pm.
          </li>
          <li>
          <div><b>Price:</b></div>
           
            500 birr
          </li>
        </ul>
        <hr />
        <p className="p">
          Not Just a job to us, but a way of life! We bring the life of the
          party to you
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card_img">
        <img
           src={spectacle}
          alt="Spectacle Events"
        />
      </div>
      <div className="below_img">
        <h3>Spectacle Events</h3>
        <ul className="address">
          <li>
          <div><b>Location:</b></div>
           
            Addis Ababa, Ethiopia
          </li>
          <li>
          <div><b>Time:</b></div>
           
            Jan 7, 2:00 pm.
          </li>
          <li>
          <div><b>Price:</b></div>
           
            Free
          </li>
        </ul>
        <hr />
        <p className="p">
          Immersive experiences that captivate audiences and deliver
          unforgettable moments of entertainment.
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card_img">
        <img
           src={flawless}
          alt="FLAWLESS EVENTS"
        />
      </div>
      <div className="below_img">
        <h3>Flawless Events</h3>
        <ul className="address">
          <li>
          <div><b>Location:</b></div>
           
            bole, Addis Ababa
          </li>
          <li>
          <div><b>Time:</b></div>
          
            Feb 7, 2:00 pm.
          </li>
          <li>
          <div><b>Price:</b></div>
           
            100 birr
          </li>
        </ul>
        <hr />
        <p className="p">
          Flawless events seamlessly orchestrate every detail, ensuring
          impeccable execution.
        </p>
      </div>
    </div>
  </div>
  <h1 id="v">Virtual Events:</h1>
  <div className="virtualEvents">
    <div className="card">
      <div className="card_img">
        <img
            src={kidscode}
          alt="Kids Coding Time"
        />
      </div>
      <div className="below_img">
        <h3>Kids Coding Time</h3>
        <ul className="address">
          <li>
          <div><b>Location:</b></div>
          
            Online Event
          </li>
          <li>
          <div><b>Time:</b></div>
           
            January 14,2023.
          </li>
          <li>
          9:00 am - 10:00 am.
          </li>
          
        </ul>
        <hr />
        <p className="p">
          It is an engaging and educational program designed to introduce
          children to the exciting world of computer programming.
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card_img">
        <img
          src={ict}
          alt="Innovate Ethiopia"
        />
      </div>
      <div className="below_img">
        <h3>Innovate Ethiopia</h3>
        <ul className="address">
          <li>
          <div><b>Location:</b></div>
           
            Online Event
          </li>
          <li>
          <div><b>Time:</b></div>
           
            December 9,2022.
          </li>
          <li>
            11 am - 1 pm (EAT).
          </li>
        </ul>
        <hr />
        <p className="p">
          A dynamic and compelling event where entrepreneurs present their ideas
          and business concepts.
        </p>
      </div>
    </div>
    <div className="card">
      <div className="card_img">
        <img
         src={codenigh}
          alt="CodeNight Program"
        />
      </div>
      <div className="below_img">
        <h3>CodeNight Program</h3>
        <ul className="address">
          <li>
          <div><b>Location:</b></div>
           
            Ethiopia, Online Event
          </li>
          <li>
          <div><b>Time:</b></div>
           
            July 31, 2022.
          </li>
          <li>
            8:00 pm - 9:00 pm.
          </li>
        </ul>
        <hr />
        <p className="p">
          An exhilarating and collaborative event where passionate coders and
          developers present their innovative projects and....
        </p>
      </div>
    </div>
  </div>
</main>

  )
}
