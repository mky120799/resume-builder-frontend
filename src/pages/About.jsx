import React from 'react'; // from installed dependencies
import { Stack, Box } from "@mui/material";
import aboutData from '../data/aboutData.js' // from data folder 
import { colors } from "../utils/colors.js"; // from utils folder 

// this is about components 
// fecthing the about data from aboutData.js file 
// then displaying using .map()
function About() {
    return (
        <>
            <Stack
                sx={{
                    color: colors.gray200,
                    padding: {
                        xs: "18px",
                        sm: "25px",
                        md: "40px",
                        lg: "60px "
                    }
                }}
            >
                <h2 style={{ color: colors.amber500 }}>{aboutData.aboutResumeBuilder.heading}</h2>
                <Stack
                    direction={{
                        xs: "column",
                        lg: "row-reverse",
                    }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    mt="20px"
                >
                    <Stack>
                        <img
                            src={aboutData.aboutResumeBuilder.imageUrl}
                            alt="img"
                        />
                    </Stack>
                    <Stack
                        sx={{
                            fontSize: {
                                xs: "13px",
                                sm: "15px",
                                md: "17px",
                                lg: "19px",
                            },
                            paddingRight: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },
                            textAlign: "justify",
                            display: "flex",
                            flexDirection: 'column',
                            gap: '2rem'
                        }}>
                        <Box>
                            {aboutData.aboutResumeBuilder.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </Box>
                        <Box>
                            <h3 style={{ color: colors.amber500 }}>{aboutData.simpleSteps.heading}</h3>
                            <ol>
                                {aboutData.simpleSteps.steps.map((step, index) => (
                                    <li key={index} style={{ margin: '1rem' }}>{step}</li>
                                ))}
                            </ol>
                        </Box>
                        <Box>
                            <h3 style={{ color: colors.amber500 }}>{aboutData.privacyPolicy.heading}</h3>
                            <ol>
                                {aboutData.privacyPolicy.points.map((point, index) => (
                                    <li key={index} style={{ margin: '1rem' }}>{point}</li>
                                ))}
                            </ol>
                        </Box>
                        <Box>
                            <h3 style={{ color: colors.amber500 }}>{aboutData.technologiesUsed.heading}</h3>
                            <ol>
                                {aboutData.technologiesUsed.technologies.map((technology, index) => (
                                    <li key={index} style={{ margin: '1rem' }}>{technology}</li>
                                ))}
                            </ol>
                        </Box>
                        <Box>
                            <h3 style={{ color: colors.amber500 }}>{aboutData.aboutDeveloper.heading}</h3>
                            <ul>
                                {aboutData.aboutDeveloper.details.map((detail, index) => (
                                    <li key={index} style={{ margin: '1rem' }}>
                                        {typeof detail === 'string' ? detail : (
                                            <a
                                                href={detail.url}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                style={{
                                                    textDecoration: 'none',
                                                    color: colors.cyan500,
                                                }}
                                            >
                                                {detail.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default About;
