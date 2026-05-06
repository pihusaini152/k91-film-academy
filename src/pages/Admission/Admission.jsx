import React, { useEffect } from 'react';
import './Admission.css';

const Admission = () => {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up, .form-card').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();

    }, []);

    return (

        <section id="admission" className="admission">

            {/* BACKGROUND EFFECT */}
            <div className="bg-animation">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">

                {/* HEADER */}
                <div className="header-section fade-up">

                    <div className="badge-wrapper">
                        <span className="badge">LIMITED SEATS</span>
                    </div>

                    <h1 className="main-title">
                        Start Your Journey in
                        <span className="gradient-text"> Filmmaking</span>
                    </h1>

                    <p className="subtitle">
                        Join K91 Film Academy and learn from industry experts.
                        Get hands-on experience with real projects.
                    </p>

                    <div className="title-line"></div>

                </div>

                {/* STATS */}
                <div className="stats-row fade-up">

                    <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Projects Completed</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-number">200+</div>
                        <div className="stat-label">Happy Students</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Placement Support</div>
                    </div>

                </div>

                {/* FORM CARD */}
                <div className="form-card fade-up">

                    <div className="form-header">

                        <h2>
                            Admission <span className="gold">Form</span>
                        </h2>

                        <p>Fill your details to secure your seat</p>

                    </div>

                    {/* FORM */}
                    <form
                        action="https://formsubmit.co/hemant861983@gmail.com"
                        method="POST"
                        className="admission-form"
                    >

                        {/* HIDDEN INPUTS */}
                        <input
                            type="hidden"
                            name="_captcha"
                            value="false"
                        />

                        <input
                            type="hidden"
                            name="_subject"
                            value="New Admission Form"
                        />

                        <input
                            type="hidden"
                            name="_template"
                            value="table"
                        />

                        {/* ROW 1 */}
                        <div className="form-row">

                            <div className="input-group">
                                <label>Full Name *</label>

                                <input
                                    type="text"
                                    name="Full Name"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label>Father's Name *</label>

                                <input
                                    type="text"
                                    name="Father Name"
                                    placeholder="Enter father's name"
                                    required
                                />
                            </div>

                        </div>

                        {/* ROW 2 */}
                        <div className="form-row">

                            <div className="input-group">
                                <label>Age *</label>

                                <input
                                    type="number"
                                    name="Age"
                                    placeholder="Your age"
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <label>Phone Number *</label>

                                <input
                                    type="tel"
                                    name="Phone"
                                    placeholder="WhatsApp number"
                                    required
                                />
                            </div>

                        </div>

                        {/* ROW 3 */}
<div className="form-row">

    <div className="input-group">
        <label>Email Address *</label>

        <input
            type="email"
            name="Email"
            placeholder="your@email.com"
            required
        />
    </div>

    <div className="input-group">
        <label>Select Course *</label>

        <select
            name="Course"
            required
        >

            <option value="">
                -- Choose a course --
            </option>

            <option value="Basic Video Editing">
                Basic Video Editing
            </option>

            <option value="Advanced Editing">
                Advanced Editing
            </option>

            <option value="Motion Graphics & VFX">
               Graphics design 
            </option>

            <option value="Professional Colour Grading">
               Web development 
            </option>

            <option value="Complete Filmmaking Course">
                Digital marketing
            </option>

        </select>

    </div>

</div>

                        {/* ADDRESS */}
                        <div className="input-group">

                            <label>Address *</label>

                            <textarea
                                name="Address"
                                placeholder="Your complete address"
                                rows="3"
                                required
                            />

                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="submit-btn"
                        >

                            Submit Application

                            <svg
                                className="btn-icon"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5 12H19M19 12L13 6M19 12L13 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );
};

export default Admission;