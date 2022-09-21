//import Link from "next/link";
import { BrowserRouter, Route, NavLink, Link, useLocation, useHistory } from "react-router-dom";
//import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { TbArrowUpRight } from "react-icons/tb";
import $ from "jquery";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import WalletConnectProvider from "@walletconnect/web3-provider";

import Web3Modal from "web3modal";
const { ethers } = require("ethers");
import WalletLink from "walletlink";

import logo_wt from "../assets/logos/logo_wt.svg";
import logo from "../assets/logos/logo.svg";

import Account from "./Account";
import { Input } from "antd";
import SearchContext from "../contexts/SearchContext";
import useOutsideClick from "../hooks/useOutsideClick";

const styles = {
  logo: {
    width: "11rem",
  },
  searchButton: {
    display: "inline-block",
    marginRight: "2.5rem",
    cursor: "pointer",
  },
  toggleMenu: {
    top: ".5rem",
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    border: ".3rem solid #666666",
    padding: ".3rem 1rem",
    borderRadius: "2rem",
  },
};

const Header = props => {
  const { currentTheme } = useThemeSwitcher();
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const { currentSearch, setCurrentSearch } = SearchContext();

  let subdomain = window.location.hostname.split(".")[0];
  if (subdomain == "app" || subdomain == "dev") {
    subdomain = "avax";
  }
  const [lang, setLang] = useState(subdomain);

  /* Mobile Header */
  const openMobHeader = () => {
    $(".header").addClass("active-mob-header");
    setIsOpenMenu(true);
  };
  const closeMobHeader = () => {
    $(".header").removeClass("active-mob-header");
    setIsOpenMenu(false);
  };

  const [bgOpacity, setBgOpacity] = React.useState(0);
  const handleScroll = () => {
    const scrollY = Math.round(window.scrollY) / 100;
    const start = 0;
    const end = 1;
    if (scrollY >= start && scrollY <= end) {
      setBgOpacity(scrollY);
    } else if (scrollY < start) {
      setBgOpacity(start);
    } else if (scrollY > end) {
      setBgOpacity(end);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // hide search element if clicked outside
  const refSearch = React.useRef(null);
  useOutsideClick(refSearch, () => {
    if(currentSearch?.isOpen) {
      setCurrentSearch((prev) => ({
        ...prev,
        isOpen: false
      }))
    }
  })

  // listen to route change
  const history = useHistory();

  React.useEffect(() => {
    return history?.listen(location => {
      setCurrentSearch((prev) => ({
        ...prev,
        isOpen: false
      }));
      closeMobHeader();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }, [history]);

  return (
    <div
      className="header"
      style={{
        backgroundColor: isOpenMenu || currentSearch?.isOpen ? "white" : `rgba(255, 255, 255, ${bgOpacity})`,
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="mob-header">
        <div className="box">
          <div className="mob-header-content">
            <URLS />
          </div>

          <div style={{ width: "100%", textAlign: "center" }}></div>
        </div>
      </div>
      <div className="box">
        <div className="headerContent">
          <Link to="/" style={styles.logo}>
            <img style={{ height: "40px" }} src={currentTheme == "dark" ? logo_wt : logo} alt="logo" />
          </Link>

          <div className={"headerRight"}>
            <URLS headerDesktop={true} />
          </div>

          <div className="headerRightButton">
            <div className={"headerRightButtonInner"}></div>
            <span style={styles.searchButton}>
              <FiSearch
                onClick={() => setCurrentSearch(prev => ({ ...prev, isOpen: !prev?.isOpen }))}
                style={{ fontSize: "3rem" }}
              />
            </span>
            <span style={styles.toggleMenu}>
              <MdMenu onClick={openMobHeader} style={{ fontSize: "3rem" }} className="open-mob-header" />
              <MdClose onClick={closeMobHeader} style={{ fontSize: "3rem" }} className="close-mob-header" />
            </span>
          </div>
        </div>
      </div>
      {currentSearch?.isOpen ? (
        <div ref={refSearch} style={{ width: "100%", backgroundColor: "white" }}>
          <div className="box" style={{ fontSize: "2.4rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <GoSearch style={{ fontSize: "inherit", fontWeight: "bold" }} />
            <Input
              placeholder="Search Offers by keyword, category, etc.."
              style={{
                fontSize: "inherit",
                paddingTop: "5rem",
                paddingBottom: "5rem",
                border: "none",
                outline: "none",
                boxShadow: "none",
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export function URLS({ headerDesktop = false }) {
  const { currentSearch, setCurrentSearch } = SearchContext();
  const router = useLocation();
  return (
    <>
      <Link to="/" passHref={true} className={router.pathname == "/" ? "link activeLink" : "link"}>
        HOME
      </Link>
      <Link to="/market" passHref={true} className={router.pathname == "/market" ? "link activeLink" : "link"}>
        MARKET
      </Link>
      <Link to="/offer" passHref={true} className={router.pathname == "/offer" ? "link activeLink" : "link"}>
        OFFER
      </Link>
      <Link to="/content" passHref={true} className={router.pathname == "/content" ? "link activeLink" : "link"}>
        CONTENT
      </Link>
      <Link
        onClick={e => {
          e.preventDefault();
          setCurrentSearch(prev => ({ ...prev, isOpen: !prev?.isOpen }));
        }}
        className={currentSearch?.isOpen ? "link activeLink" : "link"}
        style={headerDesktop ? { display: "flex", alignItems: "center" } : undefined}
      >
        {headerDesktop && <GoSearch style={{ fontSize: "inherit", color: "inherit", marginRight: ".5rem" }} />} SEARCH
      </Link>
      <Link
        to="/create-offer"
        passHref={true}
        className={router.pathname == "/create-offer" ? "link activeLink" : "link"}
      >
        CREATE OFFER
      </Link>
      <Link to="/user" passHref={true} className={router.pathname == "/user" ? "link activeLink" : "link"}>
        USER
      </Link>
      <Link to="/creator" passHref={true} className={router.pathname == "/creator" ? "link activeLink" : "link"}>
        CREATOR
      </Link>
      <Link to="/signup-1" passHref={true} className={router.pathname == "/signup-1" ? "link activeLink" : "link"}>
        LOGIN
      </Link>
      <Link
        to="/signup-2"
        passHref={true}
        className={router.pathname == "/signup-2" ? "link activeLink" : "link"}
        style={
          headerDesktop
            ? {
                display: "flex",
                alignItems: "center",
                backgroundColor: "#181a19",
                padding: "1rem 2rem",
                borderRadius: "50rem",
              }
            : undefined
        }
      >
        <span style={{ color: headerDesktop ? "white" : undefined, fontSize: "inherit" }} className="url_tryitout">
          TRY IT OUT
        </span>
        {headerDesktop && (
          <TbArrowUpRight
            style={{
              position: "relative",
              fontSize: "2.5rem",
              color: "80de9d",
              marginLeft: ".3rem",
              top: "-0.1rem",
            }}
          />
        )}
      </Link>
    </>
  );
}

export default Header;
