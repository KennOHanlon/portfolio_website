import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';

const VARIANTS = {
    job: {
        bg: '#F6F7F3',
        border: '#A3B18A',     // olive
        accent: '#6B8E23',
        title: '#2F3E2E',
        meta: '#5F6F52',
    },
    cert: {
        bg: '#FFFBF0',
        border: '#E6C46A',     // gold
        accent: '#C9A227',
        title: '#6B4E16',
        meta: '#9A7B2F',
    },
    education: {
        bg: '#FBF6EE',        // warm parchment
        border: '#E4D3B2',    // soft tan
        accent: '#C2A66F',    // golden tan accent
        title: '#6B4E2E',     // warm brown
        meta: '#8A6A44',      // muted tan-brown
    },
};

const TimelineCard = ({
                          variant,
                          title,
                          meta,
                          description,
                          tags = [],
                          current = false,
}) => {
    const v = VARIANTS[variant];

    return (
        <Card
            elevation={0}
            sx={{
                backgroundColor: v.bg,
                borderRadius: '16px',
                border: `1px solid ${v.border}`,
                borderLeft: `6px solid ${v.accent}`,
                boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
                maxWidth: 440,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
                },
                '@media (max-width: 768px)': {
                    maxWidth: '100%',
                },
            }}
        >
            <CardContent sx={{ p: 2.5 }}>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: v.title }}
                >
                    {current && (
                        <Typography
                            sx={{
                                display: 'block',
                                mb: 1,
                                px: 1.2,
                                py: 0.25,
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
                                borderRadius: '999px',
                                backgroundColor: 'rgba(194, 166, 111, 0.15)', // warm tan
                                color: '#6B4E2E',
                            }}
                        >
                            Current Role
                        </Typography>
                    )}
                    {title}
                </Typography>

                <Typography
                    sx={{
                        fontSize: '0.9rem',
                        color: v.meta,
                        mb: 1,
                    }}
                >
                    {meta}
                </Typography>

                <Typography
                    sx={{
                        fontSize: '0.95rem',
                        color: '#374151',
                        lineHeight: 1.6,
                    }}
                >
                    {description}
                    {tags.length > 0 && (
                        <Stack
                            direction="row"
                            sx={{
                                mt: 1.5,
                                flexWrap: 'wrap',
                        }}
                        >
                            {tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    size="small"
                                    sx={{
                                        mr: 0.5,
                                        mt: 0.75,
                                        backgroundColor: 'rgba(255,255,255,0.6)',
                                        border: `1px solid ${v.border}`,
                                        color: v.meta,
                                        '& .MuiChip-label': {
                                            px: 0.75,
                                        },
                                    }}
                                />
                            ))}
                        </Stack>
                    )}

                </Typography>
            </CardContent>
        </Card>
    );
};

export default TimelineCard;
