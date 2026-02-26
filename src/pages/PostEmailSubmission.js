import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./postEmailSubmission.css";

export default function PostEmailSubmission() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        if (timeLeft === 0) {
            navigate("/");
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, navigate]);

    return (
        <div className="post-page">
            <div className="gradient-border">
                <div className="success-container">
                    <div className="success-icon">✓</div>

                    <h1>Message Received</h1>

                    <p>
                        Thank you for reaching out.
                        Your message has been successfully submitted and I truly appreciate
                        you taking the time to connect.
                    </p>

                    <div className="countdown">
                        Redirecting to home in <span>{timeLeft}</span> seconds...
                    </div>

                    <div className="button-group">
                        <button
                            className="home-btn"
                            onClick={() => navigate("/")}
                        >
                            Return Home
                        </button>

                        <button
                            className="portfolio-btn"
                            onClick={() => navigate("/experience")}
                        >
                            View Experience
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}