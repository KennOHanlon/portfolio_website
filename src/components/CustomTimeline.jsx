import React from 'react';
import './timeline.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {Avatar, Typography} from "@mui/material";
import TimelineCard from "./TimelineCard";

const CustomTimeline = () => {
    return (
        <section className="timeline">
            <Timeline position="alternate"
                      sx={{
                          '@media (max-width: 768px)': {
                              '& .MuiTimelineItem-root': {
                                  flexDirection: 'row !important',
                              },
                              '& .MuiTimelineOppositeContent-root': {
                                  display: 'none',
                              },
                          },
                      }}>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        className="date-label"
                    >
                        December 2025
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <Typography className="hide-on-fullscreen date-label">
                            Dec 2025
                        </Typography>
                        <Avatar
                            src="GCP_Professional_Cloud_Developer_Cert.png"
                            alt="GCP Certification Icon"
                            sx={{
                                width: '7rem',
                                height: 'auto',
                                bgcolor: 'transparent',
                                '@media (max-width: 768px)': {
                                    width: '4rem',
                                },
                            }}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                        sx={{ py: 2, px: 2 }}>
                        <TimelineCard
                            variant="cert"
                            title="GCP Professional Cloud Developer"
                            meta="Google · Certification"
                            description="Validated expertise in building, deploying, and managing scalable cloud-native applications on Google Cloud Platform."
                            tags={[
                                'DevOps',
                                'System Design',
                                'Cloud-Security',
                                'GCP',
                            ]}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        className="date-label"
                    >
                        October 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <Typography className="hide-on-fullscreen date-label">
                            Oct 2024
                        </Typography>
                        <Avatar
                            src="Ford-Logo.png"
                            alt="Ford Motor Company Logo"
                            sx={{
                                width: '7rem',
                                height: 'auto',
                                bgcolor: 'transparent',
                                '@media (max-width: 768px)': {
                                    width: '4rem',
                                },
                            }}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                        className="left-timeline-card"
                        sx={{ py: 2, px: 2 }}>
                        <TimelineCard
                            variant="job"
                            title="Software Engineer II"
                            meta="Ford Motor Company · Career"
                            description="Recognized for technical leadership, ownership of critical systems, and mentoring junior engineers."
                            current
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        className="date-label"
                    >
                        January 2024
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <Typography className="hide-on-fullscreen date-label">
                            Jan 2024
                        </Typography>
                        <Avatar
                            src="Ford-Logo.png"
                            alt="Ford Motor Company Logo"
                            sx={{
                                width: '7rem',
                                height: 'auto',
                                bgcolor: 'transparent',
                                '@media (max-width: 768px)': {
                                    width: '4rem',
                                },
                            }}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: 2, px: 2 }}>
                        <TimelineCard
                            variant="job"
                            title="Software Engineer I"
                            meta="Ford Motor Company · Career"
                            description="Designed and maintained secure, scalable Spring Boot and GraphQL services supporting enterprise vehicle data systems."
                            tags={[
                                'Java',
                                'Spring Boot',
                                'REST',
                                'GCP',
                                'PostgreSQL',
                            ]}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        className="date-label"
                    >
                        January 2022
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <Typography className="hide-on-fullscreen date-label">
                            Jan 2022
                        </Typography>
                        <Avatar
                            // className="timeline-logo"
                            src="Ford-Logo.png"
                            alt="Ford Motor Company Logo"
                            sx={{
                                width: '7rem',
                                height: 'auto',
                                bgcolor: 'transparent',
                                '@media (max-width: 768px)': {
                                    width: '4rem',
                                },
                            }}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                        sx={{ py: 2, px: 2 }}
                        className="left-timeline-card">
                        <TimelineCard
                            variant="job"
                            title="Ford College Graduate (FCG)"
                            meta="Ford Motor Company · Career"
                            description="Designed and maintained secure, scalable Spring Boot and GraphQL services supporting enterprise vehicle data systems."
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        className="date-label"
                    >
                        December 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <Typography className="hide-on-fullscreen date-label">
                            Dec 2021
                        </Typography>
                        <Avatar
                            variant="square"
                            src="Wayne-State-Logo.png"
                            alt="Wayne State University Logo"
                            sx={{
                                width: '7rem',
                                height: 'auto',
                                bgcolor: 'transparent',
                                '@media (max-width: 768px)': {
                                    width: '4rem',
                                },
                            }}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: 2, px: 2, }}>
                        <TimelineCard
                            variant="education"
                            title="Bachelor of Science in Computer Science"
                            meta="Wayne State University · Education"
                            description="Focused on software engineering, data structures, and distributed systems with hands-on project work."
                            tags={[
                                'Data Structures',
                                'Algorithms',
                                'Operating Systems',
                                'Databases',
                            ]}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        className="date-label"
                    >
                        November 2020
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <Typography className="hide-on-fullscreen date-label">
                            Nov 2020
                        </Typography>
                        <Avatar
                            src="Masco-Logo.png"
                            alt="Masco Corporation Logo"
                            sx={{
                                width: '7rem',
                                height: 'auto',
                                bgcolor: 'transparent',
                                '@media (max-width: 768px)': {
                                    width: '4rem',
                                },
                            }}
                        />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent
                        className="left-timeline-card"
                        sx={{ py: 2, px: 2 }}>
                        <TimelineCard
                            variant="job"
                            title="Power Platform Engineer"
                            meta="Masco Corporation · Career"
                            description="Designed and maintained secure, scalable Spring Boot and GraphQL services supporting enterprise vehicle data systems."
                            tags={[
                                'Power Apps',
                                'Power Automate',
                                'SharePoint',
                                'Microsoft 365 Administration',
                            ]}
                        />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </section>
    );
};

export default CustomTimeline;
