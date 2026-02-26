import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import "./contact.css";

export default function Contact() {
    const emailApiKey = process.env.REACT_APP_WEB3_FORMS_EMAIL_PUBLIC_KEY;

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({ mode: "onTouched" });

    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const userName = useWatch({
        control,
        name: "name",
        defaultValue: "Someone",
    });

    useEffect(() => {
        setValue("subject", `${userName} sent a message from Website`);
    }, [userName, setValue]);

    const onSubmit = async (data, e) => {
        await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(async (response) => {
                let json = await response.json();
                if (json.success) {
                    setIsSuccess(true);
                    setMessage(json.message);
                    e.target.reset();
                    reset();
                } else {
                    setIsSuccess(false);
                    setMessage(json.message);
                }
            })
            .catch(() => {
                setIsSuccess(false);
                setMessage("Something went wrong. Please try again.");
            });
    };

    return (
        <div className="contact-page">
            <div className="contact-card">
                <div className="contact-header">
                    <h1>Contact Me</h1>
                    <p>Fill out the form below and I’ll get back to you soon.</p>
                </div>

                <form action="https://api.web3forms.com/submit" method="POST" id="form" >
                    <input type="hidden" name="access_key" value={emailApiKey}/>
                    <input type="hidden" name="subject" value="New Submission from Portfolio"/>
                    <input type="hidden" name="redirect" value="https://kenohanlon.com/thanks"/>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" name="name" id="first_name" placeholder="John" required/>
                            <small className="error-text">Please provide your first name.</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" name="last_name" id="lname" placeholder="Doe" required/>
                            <small className="error-text">Please provide your last name.</small>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="you@company.com" required/>
                            <small className="error-text">Please provide a valid email.</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name="phone" id="phone" placeholder="+1 (555) 234-5678" required/>
                            <small className="error-text">Please provide your phone number.</small>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea rows="5" name="message" id="message" placeholder="Your Message" required></textarea>
                        <small className="error-text">Please enter your message.</small>
                    </div>

                    <button type="submit" className="contact-btn">
                        Send Message
                    </button>

                    <p id="result" className="form-result"></p>
                </form>
            </div>
        </div>
    );
}