import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import backgroundImage from "./images/bgImage.jpg";
import { Button, FormControlLabel } from "@mui/material";
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

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    ,
  surname: yup.string("Enter your surname"),
  cellNumber: yup
    .string("Enter your phone number"),
  address: yup
    .string("Enter your postal address")
    .required("this filled  is required"),
  name: yup.string("Enter your name"),
  idNumber: yup
    .number("Enter your id munber")
    .min(14, "thi id must have 14  numbers"),
    

  termsChecked: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});
// const options = [  { value: 'funding', label: 'Funding' },
// { value: 'charity', label: 'Charity' },
// { value: 'investment', label: 'Investment' }];

const ApplyOnline = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = React.useState(0);

  const formik = useFormik({
    initialValues: {
      surname: "",
      email: "",
      cellNumber: "",
      idNumber: "",
      address: "",
      // funding: "",
      name: "",
      termsChecked: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      // const payment = await axios
      //   .post("https://sandbox.payfast.co.za​/eng/process", {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Content-Type": "application/json",
      //     },
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // if (payment.ok) {
      //   console.log(payment);
      console.log(formik.values.termsChecked);
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
      <StyledForm>
        {/* <StyledTextField
          select
          label="Select Funding"
          variant="outlined"
          onChange={formik.handleChange}
          fullWidth
          required
          error={formik.touched.funding && Boolean(formik.errors.funding)}
          helperText={formik.touched.funding && formik.errors.funding}
        >
          <StyledMenuItem value="funding">Funding</StyledMenuItem>
          <StyledMenuItem value="investment">Investment</StyledMenuItem>
          <StyledMenuItem value="charitable-services">
            Charitable Services
          </StyledMenuItem>
        </StyledTextField> */}
        <StyledTextField
          label="Name"
        
          variant="outlined"
          fullWidth
          required
          onChange={formik.values.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <StyledTextField
          label="Surname"
          
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
            <Checkbox
              name={formik.values.termsChecked}
              value={formik.values.termsChecked}
            />
          }
          label="Terms and conditions apply"
        />
        {/* {formik.values.termsChecked ? <Button variant="outlined">Submit</Button>:<></>}   */}
        <Button type="submit" variant="outlined" onSubmit={formik.handleSubmit}>
          Submit
        </Button>
      </StyledForm>
    </StyledDiv>
  );
};

export default ApplyOnline;
