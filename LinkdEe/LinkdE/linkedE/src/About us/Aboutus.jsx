import React from 'react'
import './Aboutus.css';

export default function Aboutus() {
  return (
    <>
    <title>About us</title>
    <header>
      <section className="about_us_head">
        <div className="about">
          <h1>About Us</h1>
          <p className="about_us_disc">
            Link-E is an all in one website to put service providers at an arms
            length. We’re on a mission to make event and provide services in one
            platform.
          </p>
        </div>
      </section>
    </header>
    <main>
      <div className="about_linke">
        <h1>What's in Link-E ?</h1>
        <p className="about_us_disc">
          Welcome to Linked-E your premier destination for seamless event
          organization and management. At Linked-E, we understand the importance
          of creating memorable and impactful events, whether it's a corporate
          conference, a community gathering, or a special celebration. Our
          platform is designed to empower event organizers, providing them with
          the tools and resources needed to plan, execute, and elevate their
          events to new heights. <br />
          <br />
          With a user-friendly interface and a comprehensive suite of features,
          Link-E caters to the diverse needs of event planners, making the entire
          process from planning to execution a smooth and enjoyable experience.
          Our mission is to redefine event management, offering a one-stop
          solution that brings together innovation, efficiency, and a touch of
          creativity.
        </p>
        <h1>What we do</h1>
        <p className="about_us_disc">
          Our platform connect different service providers with users in need. The
          scope of the services are limited to those related to events like
          wedding planners, venue rental, catering services, photography and
          videography, florists and decorators, makeup and hair stylists, wedding
          cake bakeries, entertainment (DJ, live bands),transportation services
          and so on. Our platform have features like Service Providers
          Registration, Search and Filter Functionality, Booking System, Payment
          Gateway, Ratings and Reviews, Event Blog/News, Event Promotions and
          Security and Privacy.
        </p>
      </div>
      <h1 className="our_team">Meet Our Team</h1>
      <div className="team">
        <div className="team_member">
          <img
            src="../Resources/Images/about_us/robelsisay.jpg"
            alt="robel sisay"
          />
          <h2 className="name">Robel Sisay</h2>
          <h4>Founder and CEO</h4>
        </div>
        <div className="team_member">
          <img src="../Resources/Images/about_us/salem.jpg" alt="salem habte" />
          <h2 className="name">Salem Habte</h2>
          <h4>Project Manager</h4>
        </div>
        <div className="team_member">
          <img src="../Resources/Images/about_us/olimars.jpg" alt="Olimars" />
          <h2 className="name">Olimars Tamirayehu</h2>
          <h4>Front-End Developer</h4>
        </div>
        <div className="team_member">
          <img
            src="../Resources/Images/about_us/robelteshome.jpg"
            alt="robel teshome"
          />
          <h2 className="name">Robel Teshome</h2>
          <h4>Front-End Developer</h4>
        </div>
        <div className="team_member">
          <img
            src="../Resources/Images/about_us/robeldaba.jpg"
            alt="robel daba"
          />
          <h2 className="name">Robel Daba</h2>
          <h4>Back-End Developer</h4>
        </div>
        <div className="team_member">
          <img
            src="../Resources/Images/about_us/ruthamenu.jpg"
            alt="ruth amenu"
          />
          <h2 className="name">Ruth Amenu</h2>
          <h4>Marketing Specialist</h4>
        </div>
        <div className="team_member">
          <img
            src="../Resources/Images/about_us/ruthtadesse.jpg"
            alt="robel tadesse"
          />
          <h2 className="name">Ruth Tadesse</h2>
          <h4>Customer Support</h4>
        </div>
        <div className="team_member">
          <img
            src="../Resources/Images/about_us/ruthzenabu.jpg"
            alt="ruth zenabu"
          />
          <h2 className="name">Ruth Zenabu</h2>
          <h4>Content Creator</h4>
        </div>
      </div>
    </main>
  </>
  )
}
