import React, { useState } from 'react';
import './experience.css';
import CustomTimeline from "../components/CustomTimeline";

const Experience = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const trackResumeClick = (action) => {
        if (window.gtag) {
            window.gtag('event', 'resume_interaction', {
                event_category: 'engagement',
                event_label: action,
            });
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsLoading(true);
    };

    return (
        <div>
            {/* Resume Actions */}
            <div className="resume-actions">
                <div className="resume-card">
                    <span className="resume-label">Download Resume</span>
                    <div className="resume-buttons">
                        <a
                            href="/Kenneth_OHanlon_Resume.pdf"
                            download
                            onClick={() => trackResumeClick('download_pdf')}
                            className="resume-btn"
                        >
                            PDF
                        </a>
                        <a
                            href="/Kenneth_OHanlon_Resume.docx"
                            download
                            onClick={() => trackResumeClick('download_word')}
                            className="resume-btn"
                        >
                            Word
                        </a>
                    </div>
                </div>

                <div className="resume-card">
                    <span className="resume-label">View Resume</span>
                    <button
                        className="resume-btn"
                        onClick={() => {
                            trackResumeClick('view_browser');
                            setIsModalOpen(true);
                        }}
                    >
                        Open in Browser
                    </button>
                </div>
            </div>

            <div className="timeline-container">
                <CustomTimeline />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="modal-close"
                            onClick={closeModal}
                            aria-label="Close resume viewer"
                        >
                            ✕
                        </button>

                        {/* Loader */}
                        {isLoading && (
                            <div className="iframe-loader">
                                <div className="spinner" />
                                <span>Loading resume…</span>
                            </div>
                        )}

                        <iframe
                            title="Resume Viewer"
                            src="https://1drv.ms/w/c/c93dfaff3d80cf23/IQTXw37N-IY4QYaFap9Syf4SARPXF2t1ZW3HtDjxQiGBNks?em=2&wdEmbedCode=0"
                            frameBorder="0"
                            onLoad={() => setIsLoading(false)}
                            className={`resume-iframe ${isLoading ? 'hidden' : ''}`}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;
