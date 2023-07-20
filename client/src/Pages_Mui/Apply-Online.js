import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "./images/bgImage.jpg";
import {
  Button,
  FormControlLabel,
  Link,
  MenuItem,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { motion } from "framer-motion";
import backgroundImage1 from "./images/bgImage2.jpg";

import { useFormik } from "formik";
import * as yup from "yup";

const backgroundImages = [backgroundImage, backgroundImage1];

const StyledDiv = styled(motion.div)({
  marginTop: "35x",
  paddingTop: "20px",
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  transition: "background-image 10s ease",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%",
  margin: "auto",
  padding: "24px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "auto",
});

const StyledTextField = styled(TextField)({
  marginBottom: "16px",
  backgroundColor: "white",
  color: "black",
});

const validationSchema = yup.object().shape({
  email: yup.string("Enter your email").email("Enter a valid email"),
  surname: yup.string("Enter your surname").required("This must be filled"),
  cellNumber: yup
    .number("Enter your phone number")
    .required("Your phone number is reqauired"),
  address: yup
    .string("Enter your postal address")
    .required("full postal address is required"),

  firstname: yup.string("Enter your name").required("this must be filled"),
  idNumber: yup
    .number("Enter your id munber")
    .min(14, "thi id must have 14  numbers")
    .required("this  must be filled"),

  termsChecked: yup
    .boolean("Accecpt terms and conditions")
    .oneOf([true], "You must accept the terms and conditions")
    .required("you must check to submit a form"),
  selectFunding: yup
    .string("select funding")
    .oneOf(["Funding", "Investment", "Charitable-services"]),
});

const ApplyOnline = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = React.useState(0);

  const formik = useFormik({
    initialValues: {
      surname: "",
      email: "",
      cellNumber: "",
      idNumber: "",
      address: "",
      selectFunding: "",
      firstname: "",
      termsChecked: false,
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      const dataSend =window.fetch(values, "https:localhost/dataSend/", {
        method: "post",
      })
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)});

      toast("cool stuff ahhh");

      // const payment = await fetch(
      //   "https://sandbox.payfast.co.za​/eng/process",
      //   {
      //     method: "post",
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Content-Type": "application/json",
      //     },
      //   }
      // ).catch((err) => {
      //   console.log(err);
      // });
      // if (payment.ok) {
      //   console.log(payment);
      // }
    },
  });

  const changeBackgroundImage = () => {
    const nextIndex = (backgroundImageIndex + 1) % backgroundImages.length;
    setBackgroundImageIndex(nextIndex);
  };

  // const handleApplyHereClick = async (e) => {
  //   // TODO: Implement apply here button click functionality
  //   e.preventDefault();

  //   try {
  //     const response = await window.fetch("https://restcountries.com/v3/all", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         " Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({ formik }),
  //     });

  //     if (response.ok) {
  //       // Subscription successful, handle the response accordingly
  //       console.log(response);
  //     } else {
  //       // Subscription failed, handle the response accordingly
  //     }
  //   } catch (error) {
  //     // Send form data to the server
  //     // Handle error while sending the request
  //     console.log(error);
  //   }
  // };

  return (
    <StyledDiv
      style={{
        backgroundImage: `url(${backgroundImages[backgroundImageIndex]})`,
      }}
      onAnimationComplete={changeBackgroundImage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, loop: Infinity, repeatDelay: 2 }}
    >
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledTextField
          select
          label="Select Funding"
          name="selectFunding"
          variant="outlined"
          onChange={formik.handleChange}
          fullWidth
          required
          error={
            formik.touched.selectFunding && Boolean(formik.errors.selectFunding)
          }
          helperText={
            formik.touched.selectFunding && formik.errors.selectFunding
          }
        >
          <MenuItem value="Funding">Funding</MenuItem>
          <MenuItem value="Investment">Investment</MenuItem>
          <MenuItem value="Charitable-services">Charitable Services</MenuItem>
        </StyledTextField>
        <StyledTextField
          label="Full Names"
          name="firstname"
          variant="outlined"
          fullWidth
          required
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <StyledTextField
          label="Surname"
          name="surname"
          variant="outlined"
          fullWidth
          required
          onChange={formik.handleChange}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
        />
        <StyledTextField
          label="Address"
          name="address"
          variant="outlined"
          fullWidth
          required
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          fullWidth
          required
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <StyledTextField
          label="Cell Number"
          variant="outlined"
          fullWidth
          name="cellNumber"
          required
          onChange={formik.handleChange}
          error={formik.touched.cellNumber && Boolean(formik.errors.cellNumber)}
          helperText={formik.touched.cellNumber && formik.errors.cellNumber}
        />
        <StyledTextField
          label="ID Number"
          variant="outlined"
          fullWidth
          required
          name="idNumber"
          onChange={formik.handleChange}
          error={formik.touched.idNumber && Boolean(formik.errors.idNumber)}
          helperText={formik.touched.idNumber && formik.errors.idNumber}
        />

        {/* <input type="hidden" name="22425723" value="10000100" />
        <input type="hidden" name="zxhduhalp9ryb" value="46f0cd694581a" />
        <input type="hidden" name="amount" value="100.00" /> */}

        <FormControlLabel
          required
          control={
            <Checkbox name="termsChecked" onChange={formik.handleChange} />
          }
          label="Terms and conditions apply"
          error={
            formik.touched.termsChecked && Boolean(formik.errors.termsChecked)
          }
          helperText={formik.touched.termsChecked && formik.errors.termsChecked}
        />
        {formik.values.termsChecked === true ? (
          <Typography variant="outlined">
            By checking this box you agree to our terms and conditions.
            <Link to="/about">view our terms and conditions</Link>
          </Typography>
        ) : (
          <></>
        )}
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </StyledForm>
    </StyledDiv>
  );
};

export default ApplyOnline;
