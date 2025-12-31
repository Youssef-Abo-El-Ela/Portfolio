import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardHeader, TextField } from '@mui/material';

function ContactForm() {
    const [state, handleSubmit] = useForm("mpqzglgz");
    if (state.succeeded) {
        return <Card sx={{ padding: "2rem", maxWidth: "50%", width: { xs: "90%", sm: "70%", md: "40%" }, mt: "2rem", textAlign: "center", mx: "auto" }}>
            <CardHeader title="Thank you for your message!" />
        </Card>;
    }
    return (
        <Grid container size={12} justifyContent="center" alignItems="center" height="80vh" sx={{ flexDirection: "column", mt: "2rem" }}>
            <Card sx={{ padding: "2rem", maxWidth: { xs: "80%", sm: "60%", md: "50%" }, width: { xs: "90%", sm: "70%", md: "40%" } }}>
                <CardHeader title="Contact Me" align="center" />
                <form onSubmit={handleSubmit}>
                    <CardHeader title="Name" />
                    <TextField
                        required
                        fullWidth
                        variant='outlined'
                        id="name"
                        name="name"
                    />
                    <CardHeader title="Email Address" />
                    <TextField
                        required
                        fullWidth
                        variant='outlined'
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <CardHeader title="Message" />
                    <TextField
                        required
                        multiline
                        fullWidth
                        variant='outlined'
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <Button type="submit" disabled={state.submitting} variant="contained" sx={{ mt: "1rem", height: "3rem", width: "40%", mx: "auto", display: "block" }}>
                        Submit
                    </Button>

                </form>
            </Card>
        </Grid >
    );
}

export default ContactForm;