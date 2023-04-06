

import React from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Padding } from '@mui/icons-material';

const Form = styled('form')({
  width: '50%',
  marginTop: '1rem',
  alignItems:"center",
  justifyContent:"center",
  
  
});

const SubmitButton = styled(Button)({
  margin: '1rem 0 2rem',
});

export default function Contact() {
  return (
    <Form noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            multiline
            rows={4}
            id="message"
            label="Message"
            name="message"
            autoComplete="message"
          />
        </Grid>
      </Grid>
      <SubmitButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Send Message
      </SubmitButton>
    </Form>
  );
}