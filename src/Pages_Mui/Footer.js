import React from 'react';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import logo from './images/bgImage.jpg';
import { Typography } from '@mui/material';

const FooterComponent = () => {
  const columns = [
    {
      title: 'About Us',
      items: [
        {
          title: 'Our Story',
          href: '/our-story',
        },
        {
          title: 'Contact Us',
          href: '/contact-us',
        },
      ],
    },
    {
      title: 'Funding',
      items: [
        {
          title: 'BGAI Funding',
          href: '/funding',
        },
        {
          title: 'investment',
          href: '/investors',
        },
      ],
    },
    { title:"Image",
      items:[
        {
          content: (
            <img
              src={logo}
              alt="Footer Image"
            />
          ),
        },
        
      ]
    }
  ];

  return (
    <Footer
      columns={columns}
      bottom="Made with ❤️ by Molapo"
      theme="dark"
      backgroundColor="#333"
      
    >
      
      
    </Footer>
  );
};

export default FooterComponent;
