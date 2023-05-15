import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import logo from "./images/bgImage2.jpg";

const FooterComponent = () => {
  const columns = [
    {
      title: "About Us",
      items: [
        {
          title: "Our Story",
          href: "/about",
        },
        {
          title: "Contact Us",
          href: "/contact-us",
        },
      ],
    },
    {
      title: "Funding",
      items: [
        {
          title: "BGAI Funding",
          href: "/apply-online",
        },
        {
          title: "investment",
          href: "/contact-us",
        },
      ],
    },
    {
      title: "Get in touch here",
      items: [
        {
          href: "/info@ivbinternational.org",
        },
        {
          title: "info@ivbinternational.org",
          href: "/contact-us",
        },
      ],
    },
    {
      items: [
        {
          icon: <img src={logo} alt="-logo" />,
        },
      ],
    },
  ];

  return (
    <Footer
      columns={columns}
      bottom="Made with ❤️ by Molapo"
      theme="dark"
      backgroundColor="#333"
    ></Footer>
  );
};

export default FooterComponent;
