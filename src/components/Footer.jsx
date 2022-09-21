//import Link from "next/link";
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";
//import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaTwitter, FaDiscord, FaMedium, FaGithub } from "react-icons/fa";
import { gsap } from "gsap/dist/gsap";
import { Power4 } from "gsap/dist/gsap";
import $ from "jquery";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Faucet } from "./";
import { Col, Row, Button, Layout, Input } from "antd";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { URLS } from "./Header";

import logo_wt from "../assets/logos/logo_wt.svg";
import logo from "../assets/logos/logo.svg";

import Container from "./Container";

import { useMediaPredicate } from "react-media-hook";

import st from "../views/styles/footer.module.css";
import TextInputButton from "./TextInputButton";

const styles = {
  footer: {
    position: "relative",
    backgroundColor: "#181a19",
    color: "white"
  },
  logo: {
    display: "inline-block",
    width: "11rem",
  },
};

const Footer = props => {
  const { currentTheme } = useThemeSwitcher();
  const { Footer } = Layout;
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  return (
    <Footer style={styles.footer}>
      <Container>
        <Row style={{ marginBottom: "3rem", marginTop: "3rem", justifyContent: biggerThan768 ? "space-between" : "center", alignItems: "center" }}>
          <Col
            span={{
              xs: 24,
              md: 12,
            }}
          >
            <Link to="/" style={styles.logo}>
              <img style={{ height: "4rem", width: "11rem" }} src={currentTheme == "dark" ? logo : logo_wt} alt="logo" />
            </Link>
          </Col>
          {biggerThan768 ? (
            <Col className="footer_urls">
              <URLS />
            </Col>
          ) : undefined}
        </Row>
        <Row style={{ marginBottom: "3rem", marginTop: "3rem", alignItems: "center"  }}>
          <Col
            xs={24}
            md={18}
          >
            <TextInputButton 
              titleInput="EMAIL ADDRESS"
              titleButton="SUBSCRIBE"
            />
          </Col>
          <Col
            xs={24}
            md={6}
            style={{textAlign: biggerThan768 ? "right" : "center", marginTop: biggerThan768 ? undefined : "1rem"}}
          >
            <Link to="/">
              <FaFacebookF style={{ color: "white", marginRight: "4rem", fontSize: "1.6rem" }} />
            </Link>
            <Link to="/">
              <BsTwitter style={{ color: "white", marginRight: "4rem", fontSize: "1.6rem" }} />
            </Link>
            <Link to="/">
              <BsInstagram style={{ color: "white", fontSize: "1.6rem" }} />
            </Link>
          </Col>
        </Row>
        <Row style={{ color: "#a8a8a8", marginBottom: "3rem", marginTop: "3rem", alignItems: "center"  }}>
          <Col
            xs={24}
            md={12}
            style={{ color: "#a8a8a8", marginBottom: ".3rem", textAlign: biggerThan768 ? "left" : "center" }}
          >
            © 2022 mmmint. All Rights Reserved.
          </Col>
          <Col
            xs={24}
            md={12}
            style={{textAlign: biggerThan768 ? "right" : "center"}}
          >
            <Link to="/" style={{ color: "#a8a8a8" }}>
              Community Guidelines
            </Link>{" "}
            <span style={{ margin: "0 .4rem" }}>•</span>{" "}
            <Link to="/" style={{ color: "#a8a8a8" }}>
              Term of Service
            </Link>{" "}
            <span style={{ margin: "0 .4rem" }}>•</span>{" "}
            <Link to="/" style={{ color: "#a8a8a8" }}>
              Privacy Policy
            </Link>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default Footer;
