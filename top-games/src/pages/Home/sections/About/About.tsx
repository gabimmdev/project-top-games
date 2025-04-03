"use client"
import { Box, Container, Typography, styled } from "@mui/material";
import {Grid} from "@mui/material";
import AboutCard, { AboutCardProps } from "@/components/AboutCard/AboutCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const About: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));
    

    const about = [ 
        {
            title: "Valorant",
            categoriesSet: "FPS",
            subtitle: "June 2020",
            srcImg: "/src/assets/images/valorant.jpg",
            websiteURL: "https://playvalorant.com/pt-br/news/announcements/beginners-guide/",
        },
        
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="about" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">About Games</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {about.map((about: AboutCardProps, index: number) => (
                        <Grid>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <AboutCard
                                    title={about.title}
                                    categoriesSet={about.categoriesSet}
                                    subtitle={about.subtitle}
                                    srcImg={about.srcImg}
                                    websiteURL={about.websiteURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default About