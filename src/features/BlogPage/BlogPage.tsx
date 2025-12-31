import { useEffect, useState } from "react";
import { blogApiClient } from "../../services/apiClient";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { storePosts } from "./BlogPageSlice";
import { Card, CardContent, CardHeader, CircularProgress, Grid, Link, Typography } from "@mui/material";
import { BlogPost } from "../../types/blogs";


function BlogPage() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const getBlogs = async () => {
        setLoading(true);
        await blogApiClient.get('/?per_page=6').then((response) => {
            setBlogs(response.data);
            dispatch(storePosts(response.data));
        }).catch((error) => {
            console.error("Error fetching blogs:", error);
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        getBlogs();
    }, []);
    return (
        <Grid container size={12} justifyContent="center" alignItems="center" sx={{ flexDirection: "column", mt: "2rem" }}>
            <h1>Blog Page</h1>
            {loading ? <CircularProgress /> :
                blogs.map((blog: BlogPost) => (
                    <Card sx={{
                        width: "70%", mb: "1.5rem",
                        transition: "transform 0.15s ease-in-out",
                        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
                    }}>
                        <CardHeader
                            title={blog.title}
                            subheader={blog.published_timestamp.split("T")[0]}
                        />
                        <CardContent>
                            <Typography>{blog.description}</Typography>
                            <Link href={blog.url} target="_blank" rel="noopener">Read more</Link>
                        </CardContent>
                    </Card>
                ))
            }
        </Grid>
    )
}
export default BlogPage;