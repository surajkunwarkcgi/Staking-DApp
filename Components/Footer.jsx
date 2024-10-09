import React from "react";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "./ReactICON/index";

const Footer = () => {
  const social = [
    {
      link: "#",
      icon: <TiSocialTwitter />,
    },
    {
      link: "#",
      icon: <TiSocialFacebook />,
    },
    {
      link: "#",
      icon: <TiSocialLinkedin />,
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-1 order-lg-4 order-xl-1">
            <div className="footer__logo">
              <img src="img/logo.svg" alt="logo" />
            </div>
            <p className="footer__tagline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam
              ad porro, iure hic vel aliquam quas quia ipsa! Reprehenderit
              molestias labore voluptatem fugiat iusto tenetur delectus odit
              minus corporis.
            </p>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-3 order-md-2 order-lg-2 order-xl-3 offset-md-2 offset-lg-0">
            <h6 className="footer__title">Company</h6>
            <div className="footer__nav">
              <a href="#">About Us</a>
              <a href="#">Our News</a>
              <a href="#">License</a>
              <a href="#">Contact Us</a>
            </div>
          </div>

          <div className="col-12 col-md-8 col-lg-6 col-xl-4 order-2 order-md-3 order-lg-1 order-xl-2">
            <div className="row">
              <div className="col-12">
                <h6 className="footer__title">Services &amp; features</h6>
              </div>

              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">Invest</a>
                  <a href="#">Token</a>
                  <a href="#">Affiliate</a>
                  <a href="#">Context</a>
                </div>
              </div>

              <div className="col-6">
                <div className="footer__nav">
                  <a href="#">Safety</a>
                  <a href="#">Automatization</a>
                  <a href="#">Analytics</a>
                  <a href="#">Reports</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-4 order-md-4 order-lg-3 order-xl-4">
            <h6 className="footer__title">Support</h6>
            <div className="footer__nav">
              <a href="#">Help center</a>
              <a href="#">How it works</a>
              <a href="#">Privacy policy</a>
              <a href="#">Terms &amp; conditions</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <div className="footer__social">
                {social.map((social, index) => (
                  <a key={index} href={social.link} target="_blank">
                    <i className="ti">{social.icon}</i>
                  </a>
                ))}
              </div>

              <small className="footer__copyright">
                @ Suraj Kunwar 2024, All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
