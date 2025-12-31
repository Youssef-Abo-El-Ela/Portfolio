import { Card, CircularProgress, Grid, Link, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { githubApiClient } from "../../services/apiClient";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setRepos } from "./githubSlice";
import { GitHubRepo } from "../../types/githubRepos";


function ProjectsPage() {
    const dispatch = useAppDispatch();
    const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const getGithubRepos = async () => {
        try {
            setLoading(true);
            const response = await githubApiClient.get("");

            const data: GitHubRepo[] = response.data.map((repo: GitHubRepo) => ({
                name: repo.name,
                description: repo.description,
                html_url: repo.html_url,
                stargazers_count: repo.stargazers_count,
            }));
            dispatch(setRepos(data));
            setGithubRepos(data);

        } catch (error) {
            console.error("Error fetching GitHub repos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getGithubRepos();
    }, []);

    return (
        <Grid container size={12} sx={{ textAlign: "center" }}>
            {loading ? (
                <Grid size={12} sx={{ textAlign: "center" }}>
                    <h2>Loading</h2>
                    <CircularProgress />
                </Grid>
            ) : (
                githubRepos.map((repo) => (
                    <Grid key={repo.name} size={{ xs: 12, md: 6 }} sx={{ padding: "1rem" }}>
                        <Card sx={{
                            height: "100%",
                            padding: "1rem",
                            transition: "transform 0.15s ease-in-out",
                            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "0.5rem",
                        }}>
                            <Typography variant="h6">{repo.name}</Typography>
                            <Typography>{repo.description}</Typography>
                            <Typography>Stars: <Rating value={repo.stargazers_count} readOnly /></Typography>
                            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</Link>
                        </Card>
                    </Grid>
                ))
            )}
        </Grid>
    )
}

export default ProjectsPage;