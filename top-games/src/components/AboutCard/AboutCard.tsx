"use client"
import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import { Grid as MuiGrid } from "@mui/material";

const categoriesSet = [
    "FPS", "Mobile", "Moba", "RPG"
]

export interface AboutCardProps {
    title: string;
    categoriesSet: string;
    subtitle: string;
    srcImg: string;
    websiteURL: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
    title,
    categoriesSet,
    subtitle,
    srcImg,
    websiteURL,
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    })); 

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography variant="h3">
                {categoriesSet}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Grid container spacing={1} pt={2}>
                <MuiGrid>
                    <StyledButton onClick={() => window.open(websiteURL)}>View About</StyledButton>
                </MuiGrid>
            </Grid>
        </StyledCard>
    )
}

export default AboutCard;