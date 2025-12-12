import { useState } from "react";
import axios from "axios";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validate Form
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length <= 2) {
      newErrors.name = "Name must bigger then 2 latters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSuccessMsg("");

    const formDadta = {
      name: form.name,
      email: form.email,
      phone_number: form.email,
      description: form.message,
      type: "enquiry",
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/settings/enquiry`,
        formDadta
      );

      toast.success(`Your message has been sent! We will contact you soon.`);
      setForm({ name: "", email: "", mobile: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="bg-light py-5 text-center border-bottom">
        <div className="container">
          <span className="text-primary-custom fw-bold text-uppercase letter-spacing-2">
            Get in Touch
          </span>
          <h1 className="display-4 fw-bold mt-2">Contact Us</h1>
          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "600px" }}
          >
            We’d love to hear from you! Reach out for any questions or support.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4">Contact Information</h2>
              <p className="text-secondary mb-5">
                Your comfort is our priority. Our team is available 24/7 to
                assist you.
              </p>

              <div className="d-flex flex-column gap-4">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    title: "Office Location",
                    text: "173, M block, Site-1, New Rajinder Nagar, Delhi-110060",
                  },
                  {
                    icon: FaPhoneAlt,
                    title: "Phone",
                    text: import.meta.env.VITE_COMPANY_MOBILE,
                  },
                  {
                    icon: FaEnvelope,
                    title: "Email",
                    text: import.meta.env.VITE_COMPANY_EMAIL,
                  },
                  {
                    icon: FaClock,
                    title: "Availability",
                    text: "Available 24/7 for support",
                  },
                ].map((item, idx) => (
                  <div className="d-flex gap-3" key={idx}>
                    <div
                      className="bg-light p-3 rounded-circle text-primary-custom d-flex align-items-center justify-content-center"
                      style={{ width: "50px", height: "50px" }}
                    >
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

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="bg-white p-5 rounded-4 shadow-sm border">
                <h3 className="fw-bold mb-4">Contact Us Now</h3>

                {successMsg && (
                  <div className="alert alert-info">{successMsg}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    {/* Name */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control bg-light border-0 ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          id="nameInput"
                          placeholder="Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                        />
                        <label htmlFor="nameInput" className="text-secondary">
                          Your Name
                        </label>
                        {errors.name && (
                          <small className="text-danger">{errors.name}</small>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className={`form-control bg-light border-0 ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          id="emailInput"
                          placeholder="name@example.com"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                        />
                        <label htmlFor="emailInput" className="text-secondary">
                          Email Address
                        </label>
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>
                    </div>

                    {/* Mobile */}
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control bg-light border-0 ${
                            errors.mobile ? "is-invalid" : ""
                          }`}
                          id="mobileInput"
                          placeholder="Mobile"
                          name="mobile"
                          value={form.mobile}
                          onChange={handleChange}
                        />
                        <label htmlFor="mobileInput" className="text-secondary">
                          Your Mobile Number
                        </label>
                        {errors.mobile && (
                          <small className="text-danger">{errors.mobile}</small>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className={`form-control bg-light border-0 ${
                            errors.message ? "is-invalid" : ""
                          }`}
                          placeholder="Message"
                          id="messageInput"
                          style={{ height: "150px" }}
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                        ></textarea>
                        <label
                          htmlFor="messageInput"
                          className="text-secondary"
                        >
                          Message
                        </label>
                        {errors.message && (
                          <small className="text-danger">
                            {errors.message}
                          </small>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-2">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="spinner-border spinner-border-sm"></span>
                        ) : (
                          <>
                            Send Message <FaPaperPlane />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Form */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
