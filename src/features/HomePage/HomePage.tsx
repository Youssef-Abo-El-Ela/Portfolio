import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { changeRoute } from "../../layouts/NavBarRouteSlice";
import { NavBarRoutes } from "../../enums/NavBar";
import { useEffect, useState } from "react";
import { fetchQuote } from "../../features/HomePage/quoteSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

function HomePage() {
    const dispatch = useAppDispatch();
    const quote = useAppSelector((state) => state.quote.text);
    const author = useAppSelector((state) => state.quote.author);

    const [currentQuote, setCurrentQuote] = useState("");
    const [currentAuthor, setCurrentAuthor] = useState("");
    const [loadingQuote, setLoadingQuote] = useState(false);
    const [newQuoteReceived, setNewQuoteReceived] = useState(false);

    const getNewQuoteHandler = async () => {
        setLoadingQuote(true);
        await dispatch(fetchQuote())
        setLoadingQuote(false);
        setNewQuoteReceived(true);
    }
    useEffect(() => {
        if (newQuoteReceived) {
            setCurrentQuote(quote);
            setCurrentAuthor(author);
            setNewQuoteReceived(false);
        }
    }, [quote]);

    useEffect(() => {
        const getNewQuote = async () => {
            await getNewQuoteHandler();
        };
        getNewQuote();
    }, []);

    return (
        <Box sx={{ p: 4 }}>
            <Grid container spacing={2} size={{ xs: 12, md: 6 }}>
                <Grid container justifyContent="center" alignItems="center">
                    <img
                        src="./Personal Photo.jpeg"
                        alt="Profile"
                        style={{ width: "30%", borderRadius: "50%" }}
                    />
                    <Typography variant="h2" align="center" sx={{ mt: 2 }}>
                        Welcome to My Portfolio
                    </Typography>
                </Grid>
            </Grid>
            <Grid container size={12} direction="column" spacing={2} alignItems="center" sx={{ mt: 2 }}>
                <Typography variant="h4" align="center">
                    Let me Introduce Myself! <br />
                    I am Youssef Aboelela a Full Stack Software
                    Engineer with knowledge in React and Node.js
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    <Button component={NavLink} to="/about" variant="contained" onClick={() => dispatch(changeRoute(NavBarRoutes.ABOUT))}>Know more about me!</Button>
                    <Button component={NavLink} to="/projects" variant="contained" onClick={() => dispatch(changeRoute(NavBarRoutes.PROJECTS))}>See my projects!</Button>
                    <Button component={NavLink} to="/contact" variant="contained" onClick={() => dispatch(changeRoute(NavBarRoutes.CONTACT))}>Contact Me!</Button>
                </Box>
            </Grid>
            <Card sx={{maxWidth: { xs: "90%", sm: "70%", md: "50%" }, my: "1.5rem", mx: "auto" }}>
                <CardContent>
                    <Typography variant="h5" align="center" >
                        {loadingQuote ? "Loading..." : currentQuote}
                    </Typography>
                    <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
                        {loadingQuote ? "" : `By: ${currentAuthor}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={getNewQuoteHandler}>Get New Quote</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
export default HomePage;
