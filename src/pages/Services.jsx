import { FaBed, FaUtensils, FaUserFriends, FaComments, FaGift, FaHotel, FaHeadset } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBed />,
      title: "Flexible Bookings",
      desc: "Full-day or hourly options. Pay only for what you use."
    },
    {
      icon: <FaUtensils />,
      title: "In-App Room Service",
      desc: "Order food, towels, or extras instantly from your phone."
    },
    {
      icon: <FaUserFriends />,
      title: "Couple Friendly",
      desc: "Secure, private stays for couples with zero judgment."
    },
    {
      icon: <FaComments />,
      title: "Feedback System",
      desc: "Rate hotels and raise complaints immediately."
    },
    {
      icon: <FaGift />,
      title: "Loyalty Rewards",
      desc: "Earn points, free nights, and exclusive gifts."
    },
    {
      icon: <FaHotel />,
      title: "Hotel Management",
      desc: "End-to-end management for smooth operations."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated female support team always ready to help."
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <div className="bg-light py-5 text-center border-bottom">
        <div className="container">
           <span className="text-primary-custom fw-bold text-uppercase letter-spacing-2">What We Offer</span>
           <h1 className="display-4 fw-bold mt-2">Our Services</h1>
           <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
               A complete ecosystem designed for your comfort and convenience.
           </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border p-4 hover-shadow d-flex flex-column align-items-start">
                <div className="mb-4 text-white bg-primary-custom rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                  {service.icon}
                </div>
                <h3 className="h5 fw-bold mb-3 text-on-light">{service.title}</h3>
                <p className="text-secondary mb-0">{service.desc}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
