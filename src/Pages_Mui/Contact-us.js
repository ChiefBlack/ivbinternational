import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
});

const Column = styled("div")({
  flexBasis: "48%",
});

const CompanyInfo = styled("div")({
  marginBottom: "2rem",
});

const SocialIcons = styled("div")({
  display: "flex",
  marginTop: "1rem",
});

const SocialIconLink = styled("a")({
  display: "block",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  marginRight: "1rem",
  overflow: "hidden",
});

const SocialIcon = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
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
    <Container>
      <Column>
        <CompanyInfo>
          <h2 style={{color:"red"}}> Business and investments</h2>
          <p>6102 Refiloe   St.</p>
          <p>DanHouse, </p>
          <p>Cell: 079 029 0822 </p>
          <p>Email: ivbbusiness.investment@gmail.com </p>
          <p> 2017/134496/07</p>
        </CompanyInfo>
        <SocialIcons>
          <SocialIconLink href="#">
            <SocialIcon
              src="https://via.placeholder.com/32x32?text=Twitter"
              alt="Twitter"
            />
          </SocialIconLink>
          <SocialIconLink href="#">
            <SocialIcon
              src="https://via.placeholder.com/32x32?text=Facebook"
              alt="Facebook"
            />
          </SocialIconLink>
          <SocialIconLink href="#">
            <SocialIcon
              src="https://via.placeholder.com/32x32?text=Instagram"
              alt="Instagram"
            />
          </SocialIconLink>
        </SocialIcons>
      </Column>
      <Column>
        <Form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TextField label="Name" variant="outlined" margin="dense" required />
          <TextField label="Email" variant="outlined" margin="dense" required />
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
  );
}
