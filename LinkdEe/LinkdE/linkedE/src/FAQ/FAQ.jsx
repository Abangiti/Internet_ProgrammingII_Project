import React from 'react'
import './faq.css';

export default function FAQ() {
  return (
    <div className="faq-container">
    <h1>Frequently Asked Questions(FAQ)</h1>
    <div className="faq-section">
      <h2 className="faq-question">
        1. What is the purpose of this event organizing website?
      </h2>
      <div className="faq-answer">
        <p>
          Our website serves as a platform connecting customers seeking event
          planning services with experienced event organizers, making the process
          of organizing events hassle-free and efficient
        </p>
      </div>
    </div>
    <div className="faq-section">
      <h2 className="faq-question">
        2. How do I find an event organizer for my specific needs on this website?
      </h2>
      <div className="faq-answer">
        <p>
          To find an event organizer, simply browse through our database of
          professionals, filtering by event type, location, budget, and other
          criteria. You can then review their profiles, portfolios, and client
          reviews to make an informed decision.
        </p>
      </div>
    </div>
    <div className="faq-section">
      <h2 className="faq-question">
        3. Is there a fee for using this website to connect with event organizers?
      </h2>
      <div className="faq-answer">
        <p>
          Signing up and browsing event organizer profiles is completely free.
          However, there may be fees associated with booking services from event
          organizers, which will be clearly outlined during the booking process
        </p>
      </div>
    </div>
    <div className="faq-section">
      <h2 className="faq-question">
        4. Can I communicate with event organizers directly through this website?
      </h2>
      <div className="faq-answer">
        <p>
          Yes, our website provides messaging capabilities, allowing you to
          communicate directly with event organizers to discuss your requirements,
          ask questions, and finalize details before making a booking.
        </p>
      </div>
    </div>
    <div className="faq-section">
      <h2 className="faq-question">
        5. How do I ensure the reliability and professionalism of the event
        organizers listed on this website?
      </h2>
      <div className="faq-answer">
        <p>
          We carefully vet all event organizers before listing them on our
          platform, ensuring they meet our standards of professionalism,
          experience, and customer satisfaction. Additionally, you can review
          ratings, testimonials, and past client feedback to gauge the quality of
          their services.
        </p>
      </div>
    </div>
    <div className="faq-section">
      <h2 className="faq-question">
        6. How secure is the payment process for booking event organizers through
        this website?
      </h2>
      <div className="faq-answer">
        <p>
          We prioritize the security of all transactions conducted through our
          platform. We utilize industry-standard encryption protocols to ensure
          that all payment information is kept safe and secure.
        </p>
      </div>
    </div>
    <div className="faq-section">
      <h2 className="faq-question">
        7.What if I encounter any issues or have questions while using the
        website?
      </h2>
      <div className="faq-answer">
        <p>
          Our customer support team is available to assist you with any inquiries
          or concerns you may have. You can reach out to us via email, live chat,
          or phone during our support hours.
        </p>
      </div>
    </div>
  </div>
  
  )
}
