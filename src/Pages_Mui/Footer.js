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
          href: "/our-story",
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
          href: "/funding",
        },
        {
          title: "investment",
          href: "/investors",
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
