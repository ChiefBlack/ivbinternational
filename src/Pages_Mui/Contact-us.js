import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import companyAddress from "./Content/companyInfo";
import Map from "./MapComponent";

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
  boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.34)",
});

const Column = styled("div")({
  flexBasis: "48%",
});

const CompanyInfo = styled("div")({
  marginBottom: "2rem",
});

const Form = styled(motion.form)({
  display: "flex",
  flexDirection: "column",
});

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
  
  return (
    <>
  
      <Container>
        <Column>
          {companyAddress.map((address, index) => {
            return (
              <CompanyInfo key={index}>
                <h2 style={{ color: "red" }}>{address.companyName}</h2>
                <p>Cell:{address.phoneNumber} </p>
                <p>Email: {address.email}</p>
                <p> registration: {address.reg}</p>
              </CompanyInfo>
            );
          })}
        </Column>
        <Column>
          <Form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TextField
              label="Name"
              variant="outlined"
              margin="dense"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="dense"
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              margin="dense"
              multiline
              rows={4}
              required
            />
            <Button variant="outlined" color="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Column>
      </Container>
      <Map />
    </>
  );
}
