import { Link } from "react-router-dom";
import {
  FaClock,
  FaHeart,
  FaUserShield,
  FaConciergeBell,
  FaStar,
  FaGift,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Modern & Impactful */}
      <section
        className="hero-section position-relative d-flex align-items-center justify-content-center text-center text-white"
        style={{
          minHeight: "100vh",
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('hero_hotel_luxury.png') center/cover no-repeat`,
          marginTop: "-80px",
          paddingTop: "80px",
        }}
      >
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="display-2 fw-bold mb-4 animate-fade-in-down text-white">
                Welcome to <span className="text-primary-custom"> {import.meta.env.VITE_PROJECT_NAME}</span>
              </h1>
              <p
                className="lead fs-3 mb-5 fw-normal animate-fade-in-up animate-delay-1 text-white"
                style={{ textShadow: "0 4px 8px rgba(0,0,0,0.5)" }}
              >
                Stay Smart. Stay Comfortable.{" "}
                <br className="d-none d-md-block" />
                <span className="fs-5 opacity-75 d-block mt-2">
                  Premium hourly & full-day stays designed for you.
                </span>
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 animate-fade-in-up animate-delay-2">
                <Link
                  to="/services"
                  className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg  text-white"
                >
                  Explore Services
                </Link>
                <button className="btn btn-light btn-lg rounded-pill px-5 py-3 shadow-lg text-primary-custom fw-bold">
                  Download App
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-6" style={{ marginBottom: "4rem" }}>
            <span className="badge bg-white text-primary-custom px-3 py-2 rounded-pill shadow-sm mb-3">
              Why Choose Us
            </span>
            <h2 className="display-5 fw-bold text-dark mb-3">
              The {import.meta.env.VITE_PROJECT_NAME} Experience
            </h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
              We redefine hospitality with flexibility, safety, and care.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <FaClock size={28} />,
                title: "Flexible Stays",
                text: "Pay only for the time you need. Hourly or Full-Day.",
              },
              {
                icon: <FaUserShield size={28} />,
                title: "100% Secure",
                text: "Private, safe, and judgment-free environment for all.",
              },
              {
                icon: <FaHeart size={28} />,
                title: "Female Staff",
                text: "Managed by professionals ensuring extra care & comfort.",
              },
              {
                icon: <FaConciergeBell size={28} />,
                title: "Instant Service",
                text: "One-tap room service directly from our app.",
              },
              {
                icon: <FaStar size={28} />,
                title: "Transparent",
                text: "Real reviews, easy complaints, and quick resolution.",
              },
              {
                icon: <FaGift size={28} />,
                title: "Loyalty Perks",
                text: "Earn rewards, free nights, and surprise gifts.",
              },
            ].map((feature, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="feature-card h-100 bg-white">
                  <div className="icon-wrapper">{feature.icon}</div>
                  <h4 className="fw-bold mb-3">{feature.title}</h4>
                  <p className="text-secondary mb-0">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Split Layout */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 position-relative">
              <div
                className="position-absolute bg-primary-custom rounded-circle opacity-10"
                style={{
                  width: "300px",
                  height: "300px",
                  top: "-50px",
                  left: "-50px",
                  zIndex: -1,
                }}
              ></div>
              <img
                src="/hero_hotel_luxury.png"
                alt="Comfortable Stay"
                className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover"
                style={{ height: "500px" }}
              />
            </div>
            <div className="col-lg-6">
              <span className="text-primary-custom fw-bold letter-spacing-2 text-uppercase d-block mb-2">
                Feel at Home
              </span>
              <h2 className="display-4 fw-bold mb-4">
                A Stay Experience That <br /> Fits You Perfectly
              </h2>
              <p className="fs-5 text-secondary mb-5">
                At {import.meta.env.VITE_PROJECT_NAME}, we believe comfort shouldn't be complicated.
                Whether you're a couple looking for privacy, a traveler needing
                a quick rest, or on a business trip, we provide a seamless,
                secure, and premium experience.
              </p>

              <ul className="list-unstyled d-flex flex-column gap-3 mb-5">
                {[
                  "Best-rated properties verified for quality",
                  "24/7 Support with a human touch",
                  "Seamless booking & check-in process",
                ].map((item, i) => (
                  <li key={i} className="d-flex align-items-center gap-3">
                    <div
                      className="bg-success text-white rounded-circle p-1 d-flex align-items-center justify-content-center"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <FaArrowRight size={12} />
                    </div>
                    <span className="text-dark fw-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="btn btn-outline-dark rounded-pill px-4 py-2 fw-bold"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-6 bg-primary-custom text-white text-center position-relative overflow-hidden">
        <div className="container position-relative z-1 py-5">
          <h2 className="display-5 fw-bold mb-4">
            Ready to experience the difference?
          </h2>
          <p className="fs-4 opacity-90 mb-5 text-white">
            Download the {import.meta.env.VITE_PROJECT_NAME} app and book your first stay today.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light text-primary-custom fw-bold btn-lg rounded-pill px-5 shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
