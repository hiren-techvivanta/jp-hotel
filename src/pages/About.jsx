import { FaLeaf, FaLock, FaHandshake, FaBolt, FaSmile } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="bg-light py-5 text-center border-bottom">
         <div className="container">
            <span className="text-primary-custom fw-bold text-uppercase letter-spacing-2">Who We Are</span>
            <h1 className="display-4 fw-bold mt-2">About Us</h1>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                Redefining hospitality with comfort, safety, and modern convenience.
            </p>
         </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center mb-6" style={{ marginBottom: '5rem' }}>
            <div className="col-lg-9 text-center">
              <h2 className="fw-bold mb-4 h1">Our Story</h2>
              <p className="fs-5 text-secondary">
                {import.meta.env.VITE_PROJECT_NAME} is a smart, fast, and modern hotel booking platform built to bring convenience, comfort, and trust into your travel experience. We believe that hospitality should be easy to access — anytime, anywhere.
              </p>
              <p className="fs-5 text-secondary mt-3">
                Whether it’s a quick rest stop, a full vacation, business travel, or a peaceful personal break — we create a space that fits you perfectly.
              </p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-12 text-center mb-4">
              <h3 className="fw-bold fs-2">Our Core Values</h3>
            </div>
            {[
              { icon: <FaLeaf />, text: "Comfort" },
              { icon: <FaLock />, text: "Safety" },
              { icon: <FaHandshake />, text: "Trust" },
              { icon: <FaBolt />, text: "Speed" },
              { icon: <FaSmile />, text: "Happiness" },
            ].map((val, idx) => (
              <div className="col-md-2 col-sm-4 mx-auto" key={idx}>
                <div className="text-center p-4 rounded-4 shadow-sm bg-white h-100 border transition-transform hover-shadow">
                  <div className="text-primary-custom fs-2 mb-3 bg-light rounded-circle d-inline-flex p-3">{val.icon}</div>
                  <h5 className="fw-bold mb-0">{val.text}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="row align-items-center mt-6 pt-5">
            <div className="col-lg-6 order-lg-2">
               <div className="bg-primary-custom text-white p-5 rounded-4 shadow-lg position-relative overflow-hidden">
                 <div className="position-absolute bg-white opacity-10 rounded-circle" style={{ width: '200px', height: '200px', top: -50, right: -50 }}></div>
                 <h3 className="fw-bold display-6 mb-3 text-on-dark">Our Unique Approach</h3>
                 <p className="fs-5 opacity-90 text-on-dark">
                   We are proud to be female-friendly and couple-friendly, backed by a dedicated female management & support team that ensures privacy, respect, and comfort for every guest.
                 </p>
               </div>
            </div>
            <div className="col-lg-6 order-lg-1 mt-5 mt-lg-0">
               <div className="pe-lg-5 d-flex flex-column gap-5">
                 <div>
                   <h4 className="fw-bold text-dark mb-2">Our Mission</h4>
                   <p className="text-secondary fs-5">To simplify hotel stays with technology, while maintaining warmth, care, and human connection.</p>
                 </div>
                 <div>
                   <h4 className="fw-bold text-dark mb-2">Our Vision</h4>
                   <p className="text-secondary fs-5">To become India’s most trusted hotel booking ecosystem — where comfort meets convenience.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
