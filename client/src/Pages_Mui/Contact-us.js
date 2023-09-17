import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import companyAddress from "./Content/companyInfo";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useRef } from "react";

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

const validateSchema = yup.object().shape({
  firstname: yup
    .string("this filed must be filled")
    .required("please fill in this field "),
  surname: yup
    .string("this field must be filled")
    .required("Surname must be filed"),
  email: yup
    .string("This email must be field")
    .required("please fill in this email field"),
  message: yup
    .string("message must be field")
    .required(" fill in your message. "),
});

export default function Contact() {
  const form = useRef();
  // const handleSubmit = (values) => {
  //  console.log(values);
  //   // Handle form submission
  // };
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_ts5kxoj", "template_dnljrtb", form.current,"U0N4YArhKR9Z25sU4")
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      surname: "",
      email: "",
      message: "",
    },

    validationSchema: validateSchema,
    onSubmit: (values) => {
      console.log(values);
      emailjs
      .sendForm("service_1f2e68h", "template_55e1gjw", form.current,"EUIxvum5d5lPZp-gH")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
        toast.success("Message  Success");
      
    },
  });

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
            ref={form}
            onSubmit={formik.handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TextField
              label=" First Name"
              name="firstname"
              variant="outlined"
              margin="dense"
              onChange={formik.handleChange}
              required
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
            <TextField
              label="Surname"
              name="surname"
              variant="outlined"
              margin="dense"
              onChange={formik.handleChange}
              required
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={formik.touched.surname && formik.errors.surname}
            />
            <TextField
              label="Email"
              name="email"
              onChange={formik.handleChange}
              variant="outlined"
              margin="dense"
              required
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Message"
              name="message"
              onChange={formik.handleChange}
              variant="outlined"
              margin="dense"
              multiline
              rows={4}
              required
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Button variant="outlined" color="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Column>
      </Container>
    </>
  );
}
