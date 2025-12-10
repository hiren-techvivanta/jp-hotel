const Terms = () => {
  return (
    <div className="terms-page">
       <div className="bg-light py-5 text-center border-bottom">
         <div className="container">
            <h1 className="display-5 fw-bold">Terms and Conditions</h1>
         </div>
      </div>

      <div className="section-padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="bg-white p-5 rounded-4 shadow-sm border">
                        <p className="lead text-dark fw-medium mb-4">
                            Welcome to {import.meta.env.VITE_PROJECT_NAME}. Please read these terms carefully.
                        </p>
                        
                        <div className="d-flex flex-column gap-4">
                            {[
                                { title: `1. Acceptance of Terms", text: "By accessing or using ${import.meta.env.VITE_PROJECT_NAME}, you agree to be bound by these Terms of Service and our Privacy Policy.` },
                                { title: "2. Use of Service", text: "You must be at least 18 years old. You agree to provide accurate information." },
                                { title: "3. Booking & Payment", text: "All bookings are subject to availability. Prices include taxes unless stated otherwise." },
                                { title: "4. Cancellations & Refunds", text: "Policies vary by hotel. Check booking details for specifics." },
                                { title: "5. User Accounts", text: "Keep your credentials safe. Notify us of unauthorized access immediately." },
                                { title: "6. Liability", text: "We act as an intermediary. We are not liable for hotel service quality or incidents." },
                                { title: "7. Changes", text: "We may update terms at any time. Continued use implies acceptance." },
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

export default Terms;
