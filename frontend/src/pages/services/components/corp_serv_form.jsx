import React, { useState } from 'react';
import imageform from '../../../assets/images/about/wp7488412.webp'

function ContactForm() {
    // State for form fields (optional but recommended for functionality)
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', { name, phone, email, message, consent });
        alert('Form submitted! Check the console for data.');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setConsent(false);
    };

    return (
        <>
            <div className="container-fluid mt-4 p-0 border serviceform">
                <form
                    onSubmit={handleSubmit}
                    style={{
                        backgroundImage: `url(${imageform})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '20px',
                        borderRadius: '8px',
                        color: 'white',
                    }}
                >
                    <div className="row mb-3">
                        <div className="col-md-4 mb-3 mb-md-0"> {/* Add spacing for mobile */}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="YOUR NAME"
                                aria-label="Your Name" // Added aria-label for accessibility
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0"> {/* Add spacing for mobile */}
                            <input
                                type="tel" // Use type="tel" for phone numbers
                                className="form-control"
                                placeholder="YOUR PHONE NUMBER"
                                aria-label="Your Phone Number" // Added aria-label for accessibility
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="YOUR EMAIL"
                                aria-label="Your Email" // Added aria-label for accessibility
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            placeholder="YOUR MESSAGE"
                            aria-label="Your Message" // Added aria-label for accessibility
                            rows="6" // Adjust rows as needed to match visual height
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="consentCheck" // id must match label's htmlFor
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            required // Make consent mandatory if needed
                        />
                        <label className="form-check-label" htmlFor="consentCheck">
                            I consent to Emerald Events and Exhibitions collecting my details through this form.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-left"> {/* Center the button */}
                        <button type="submit" className="btn custom-btn px-4"> {/* Added padding */}
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
            <style jsx>{` 
                .serviceform textarea,
                .serviceform input{
                    background-color:rgba(255,255,255,0) !important;
                    color:white !important;
                }
                .serviceform textarea::placeholder,
                .serviceform input::placeholder{
                    color:white !important;
                }
            `}</style>
        </>
    );
}

export default ContactForm;