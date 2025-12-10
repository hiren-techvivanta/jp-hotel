import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Blogs = () => {
  const blogs = [
    {
      title: "Why Hourly Hotels are the Future of Smart Travel",
      excerpt: "Discover how flexibility in booking can save you money and time.",
      date: "Oct 12, 2023",
      image: "/blog_travel.png"
    },
    {
      title: "Safety Tips for Solo Female Travelers in India",
      excerpt: "Essential guides for a safe and enjoyable journey across the country.",
      date: "Oct 15, 2023",
      image: "/blog_travel.png"
    },
    {
      title: "Best Ways to Save Money on Hotel Stays",
      excerpt: "Expert hacks to get the best deals on luxury and budget stays.",
      date: "Oct 18, 2023",
      image: "/blog_travel.png"
    },
    {
      title: `How ${import.meta.env.VITE_PROJECT_NAME} is Changing the Booking Experience`,
      excerpt: "A look into our technology and how it simplifies your travel.",
      date: "Oct 20, 2023",
      image: "/blog_travel.png"
    },
    {
      title: "Staycations: Why You Should Take a Break",
      excerpt: "You don't need to travel far to relax. Explore local gems near you.",
      date: "Oct 22, 2023",
      image: "/blog_travel.png"
    }
  ];

  return (
    <div className="blogs-page">
      {/* Page Header */}
      <div className="bg-light py-5 text-center border-bottom">
         <div className="container">
            <span className="text-primary-custom fw-bold text-uppercase letter-spacing-2">Read Our Stories</span>
            <h1 className="display-4 fw-bold mt-2">Travel Blog</h1>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                Your guide to smart stays, safety, travel hacks, and hotel lifestyle tips.
            </p>
         </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {blogs.map((blog, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm overflow-hidden hover-shadow transition">
                  <div className="card-img-top position-relative overflow-hidden" style={{ height: '240px' }}>
                     <img src={blog.image} alt={blog.title} className="w-100 h-100 object-fit-cover" />
                     <div className="position-absolute bottom-0 start-0 bg-white px-3 py-1 m-3 rounded-pill shadow-sm small fw-bold text-primary-custom">
                         {blog.date}
                     </div>
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="card-title fw-bold mb-3 h5">
                      <Link to="#" className="text-dark text-decoration-none hover-primary transition-colors">
                        {blog.title}
                      </Link>
                    </h4>
                    <p className="card-text text-secondary mb-4 flex-grow-1" style={{ fontSize: '0.95rem' }}>
                      {blog.excerpt}
                    </p>
                    <Link to="#" className="text-primary-custom fw-bold text-decoration-none d-flex align-items-center gap-2 mt-auto">
                      Read More <FaArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 pt-4">
            <button className="btn btn-outline-dark rounded-pill px-5">Load More Stories</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
