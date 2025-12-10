const Privacy = () => {
  return (
    <div className="privacy-page">
       <div className="bg-light py-5 text-center border-bottom">
         <div className="container">
            <h1 className="display-5 fw-bold">Privacy Policy</h1>
         </div>
      </div>

      <div className="section-padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="bg-white p-5 rounded-4 shadow-sm border">
                        <p className="lead text-dark fw-medium mb-4">
                            Your privacy is important to us.
                        </p>
                        
                        <div className="d-flex flex-column gap-4">
                            {[
                                { title: "1. Data Collection", text: "We collect Name, Contact, Payment, and Device data to process bookings." },
                                { title: "2. Usage", text: "To process bookings, improve services, and provide support." },
                                { title: "3. Sharing", text: "We share data with Hotels and Payment Processors only as needed." },
                                { title: "4. Security", text: "We implement strict security measures but cannot guarantee 100% security." },
                                { title: "5. Your Rights", text: "Access, update, or delete your data anytime." },
                                { title: "6. Cookies", text: "We use cookies for analytics and user experience." },
                                { title: "7. Updates", text: "Policy updates will be posted here." },
                                { title: "8. Contact", text: `Questions? Email us at ${import.meta.env.VITE_COMPANY_EMAIL}.` }
                            ].map((section, idx) => (
                                <div key={idx}>
                                    <h5 className="fw-bold text-dark mb-2">{section.title}</h5>
                                    <p className="text-secondary">{section.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
