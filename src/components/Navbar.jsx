import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Blogs', path: '/blogs' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top py-1 glass-effect shadow-sm`}>
      <div className="container">
        <Link to="/" className="navbar-brand fw-extrabold fs-3 text-primary-custom d-flex align-items-center gap-2">
           {import.meta.env.VITE_PROJECT_NAME}
        </Link>
        <button
          className="navbar-toggler border-0 p-2"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes size={24} color="#1A202C" /> : <FaBars size={24} color="#1A202C" />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center gap-lg-4">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.title}>
                <Link
                  to={link.path}
                  className={`nav-link fw-semibold px-0 position-relative ${location.pathname === link.path ? 'text-primary-custom' : 'text-dark'}`}
                  style={{ fontSize: '0.95rem' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                  {location.pathname === link.path && (
                    <span className="position-absolute bottom-0 start-0 w-100 bg-primary-custom" style={{ height: '2px', borderRadius: '2px' }}></span>
                  )}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
              <button className="btn btn-primary px-4 py-2 rounded-pill">
                Download App
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
