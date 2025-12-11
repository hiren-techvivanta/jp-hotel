import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="bg-light py-5 text-center border-bottom">
         <div className="container">
            <span className="text-primary-custom fw-bold text-uppercase letter-spacing-2">Get in Touch</span>
            <h1 className="display-4 fw-bold mt-2">Contact Us</h1>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                We’d love to hear from you! Reach out for any questions or support.
            </p>
         </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Contact Information</h2>
              <p className="text-secondary mb-5">
                Your comfort is our priority. Our team is available 24/7 to assist you.
              </p>

              <div className="d-flex flex-column gap-4">
                  {[
                      { icon: FaMapMarkerAlt, title: "Office Location", text: "173, M block,  Site-1, New Rajinder nagar,  Delhi-110060" },
                      { icon: FaPhoneAlt, title: "Phone", text: import.meta.env.VITE_COMPANY_MOBILE },
                      { icon: FaEnvelope, title: "Email", text: import.meta.env.VITE_COMPANY_EMAIL },
                      { icon: FaClock, title: "Availability", text: "Available 24/7 for support" }
                  ].map((item, idx) => (
                      <div className="d-flex gap-3" key={idx}>
                        <div className="bg-light p-3 rounded-circle text-primary-custom d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1 text-dark">{item.title}</h6>
                          <p className="text-secondary mb-0 small">{item.text}</p>
                        </div>
                      </div>
                  ))}
              </div>
            </div>

            <div className="col-lg-7">
              <div className="bg-white p-5 rounded-4 shadow-sm border">
                <h3 className="fw-bold mb-4">Send us a Message</h3>
                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-light border-0" id="nameInput" placeholder="Name" />
                        <label htmlFor="nameInput" className="text-secondary">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control bg-light border-0" id="emailInput" placeholder="name@example.com" />
                        <label htmlFor="emailInput" className="text-secondary">Email Address</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-light border-0" id="subjectInput" placeholder="Subject" />
                        <label htmlFor="subjectInput" className="text-secondary">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control bg-light border-0" placeholder="Message" id="messageInput" style={{ height: '150px' }}></textarea>
                        <label htmlFor="messageInput" className="text-secondary">Message</label>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <button type="submit" className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2">
                        Send Message <FaPaperPlane />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
