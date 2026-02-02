import React from 'react';
import './experience.css'
import CustomTimeline from "../components/CustomTimeline";

const Experience = () => {
    const trackResumeClick = (format) => {
        if (window.gtag) {
            window.gtag('event', 'resume_download', {
                event_category: 'engagement',
                event_label: format,
            });
        }
    };

    return (
        <div>
            {/* Download Buttons */}
            <div className="resume-download">
                <div className="resume-download-container">
                    <span className="download-label">Resume Download:</span>

                    <a
                        href="/Kenneth_OHanlon_Resume.pdf"
                        download
                        onClick={() => trackResumeClick('pdf')}
                        className="download-btn"
                    >
                        PDF
                    </a>

                    <a
                        href="/Kenneth_OHanlon_Resume.docx"
                        download
                        onClick={() => trackResumeClick('word')}
                        className="download-btn secondary"
                    >
                        Word
                    </a>
                </div>
            </div>

            <div className="timeline-container">
                <CustomTimeline />
            </div>

            <div className="grid-item">
                <iframe
                    title="Word Resume"
                    src="https://1drv.ms/w/c/c93dfaff3d80cf23/IQTXw37N-IY4QYaFap9Syf4SARPXF2t1ZW3HtDjxQiGBNks?em=2&wdEmbedCode=0"
                    width="100%"
                    height="600px"
                    frameBorder="0"
                />
            </div>
        </div>
    );
};

export default Experience;