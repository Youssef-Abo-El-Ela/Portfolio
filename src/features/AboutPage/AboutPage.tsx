import CircleIcon from "@mui/icons-material/Circle";
import { Avatar, Card, CardContent, Divider, Grid, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";


function AboutPage() {
    return (
        <Grid container>
            <Grid size={{ xs: 12, md: 6 }} container justifyContent="center" alignItems="center">
                <Avatar sx={{ width: "31%", height: "auto", mt: "1.5rem" }} alt="Profile Picture" src="/Personal Photo.jpeg">
                </Avatar>
                <Card sx={{ maxWidth: "90%", mt: "1.5rem", width: { xs: "90%", sm: "70%", md: "70%" } }}>
                    <Typography variant="h4" align="center">
                        Bio
                    </Typography>
                    <CardContent>
                        <Typography align="center">
                            I am an aspiring Software Engineer with a strong focus on Backend Development, seeking to apply technical and analytical
                            skills to build efficient and scalable systems.
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: "90%", mt: "1.5rem", width: { xs: "90%", sm: "70%", md: "70%" } }}>
                    <Typography variant="h4" align="center">
                        Education
                    </Typography>
                    <CardContent>
                        <Typography align="center">
                            BSc. in Systems and Biomedical Engineering, Cairo University, Egypt<br />
                            Expected Graduation Date: August 2026 - Grade: Excellent - GPA: 3.9/4.0
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" }, width: "2px", borderColor: "grey.300" }} />
            <Grid size={{ xs: 12, md: 5 }} container justifyContent="center" alignItems="center">
                <Card sx={{ maxWidth: "90%", mt: "1.5rem", width: { xs: "90%", sm: "70%", md: "70%" } }}>
                    <Typography variant="h4" align="center" mt={2}>
                        Skills
                    </Typography>
                    <CardContent>
                        <List>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "auto", mr: "2px" }}><CircleIcon sx={{ width: "50%" }} /></ListItemIcon>
                                <ListItemText primary="Programming Languages:" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="- Python" />
                                <LinearProgress variant="determinate" value={60} sx={{ width: "30%" }} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="- JavaScript/TypeScript" />
                                <LinearProgress variant="determinate" value={85} sx={{ width: "30%" }} />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "auto", mr: "2px" }}><CircleIcon sx={{ width: "50%" }} /></ListItemIcon>
                                <ListItemText primary="Frontend:" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="- HTML, CSS" />
                                <LinearProgress variant="determinate" value={85} sx={{ width: "30%" }} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="- React.js, Material-UI" />
                                <LinearProgress variant="determinate" value={70} sx={{ width: "30%" }} />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "auto", mr: "2px" }}><CircleIcon sx={{ width: "50%" }} /></ListItemIcon>
                                <ListItemText primary="Desktop Development:" />
                            </ListItem>
                            <ListItem >
                                <ListItemText primary="- PyQt" />
                                <LinearProgress variant="determinate" value={65} sx={{ width: "30%" }} />
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
export default AboutPage;