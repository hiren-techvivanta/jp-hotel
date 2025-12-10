import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-modern mt-auto">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-primary-custom mb-4">{import.meta.env.VITE_PROJECT_NAME}</h3>
            <p className="text-white mb-4" style={{ maxWidth: '300px' }}>
              Your smart companion for comfortable, safe, and flexible stays. Experience hospitality reimagined.
            </p>
            <div className="d-flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a href="#" key={idx} className="social-icon">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-4 text-white">Quick Links</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blogs', path: '/blogs' },
                { name: 'Contact', path: '/contact' }
              ].map((item, idx) => (
                <li key={idx}><Link to={item.path} className="footer-link text-decoration-none">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-4 text-white">Legal & Support</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/terms" className="footer-link text-decoration-none">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="footer-link text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/contact" className="footer-link text-decoration-none">Help Center</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-4 text-white">Get in Touch</h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li className="d-flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-primary-custom flex-shrink-0" />
                <span className="text-white">Your Business Address Here</span>
              </li>
              <li className="d-flex gap-3">
                <FaPhoneAlt className="mt-1 text-primary-custom flex-shrink-0" />
                <span className="text-white">{import.meta.env.VITE_COMPANY_MOBILE}</span>
              </li>
              <li className="d-flex gap-3">
                <FaEnvelope className="mt-1 text-primary-custom flex-shrink-0" />
                <span className="text-white">{import.meta.env.VITE_COMPANY_EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-top mt-5 pt-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <small className="text-white">&copy; {currentYear} {import.meta.env.VITE_PROJECT_NAME}. All rights reserved.</small>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <small className="text-white">Designed with ❤️ for travelers.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
