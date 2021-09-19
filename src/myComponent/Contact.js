import React from 'react';
import '../css/Contact.css';

export default function Contact() {
    return (
        <>
            <div className="component-body">
                <div className="component-details">
                    <h1><span className="blue-line" />Let's catch up...</h1>
                    <p>I am always excited to work on some awesome projects, message me and let's discuss over coffee.</p>
                    <div className="contact-form">
                        <form action="https://formcarry.com/s/Um4lKFkd47r" method="POST" accept-charset="UTF-8" >
                            <label htmlFor="Name">Your Name <span>*</span></label>
                            <div className="names">
                                <input type="text" name="firstName" required placeholder="First Name" className="input-box" />
                                <input type="text" name="lastName" required placeholder="Last Name" className="input-box" />
                            </div>
                            <label htmlFor="firstName">Email <span>*</span></label>
                            <input type="email" name="email" required placeholder="I'll never share your email with anyone else" className="input-box short-section" />
                            <label htmlFor="firstName">Message <span>*</span></label>
                            <textarea type="text" name="anotherInput" required className="input-box short-section" />
                            <input type="hidden" name="_gotcha" />
                            <input type="submit" value="Submit" className="btn btn-blue" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
