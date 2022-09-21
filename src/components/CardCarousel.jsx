import React from "react";

import "./styles/CardCarousel.css";

import { Row, Col, Button, Card, Layout, Tabs, List, Avatar, Divider, Image, Statistic, Rate } from "antd";
import { BrowserRouter, Route, NavLink, Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft, BsAsterisk } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";

const cards = [
  {
    title: "Taco Tuesday",
    restoName: "Cantina on 5th",
    coverImage: require("../assets/pictures/food_1.jpg").default,
    avatar: require("../assets/pictures/resto_1.png").default,
    isFeatured: true,
  },
  {
    title: "Seafood Feast Night",
    restoName: "Sealevel",
    coverImage: require("../assets/pictures/food_2.jpg").default,
    avatar: require("../assets/pictures/resto_3.png").default,
  },
  {
    title: "Food",
    restoName: "Monaco",
    coverImage: require("../assets/pictures/resto_1.jpg").default,
    avatar: require("../assets/pictures/resto_2.png").default,
  },
  {
    title: "Lobster",
    restoName: "Dorman",
    coverImage: require("../assets/pictures/resto_4.jpg").default,
    avatar: require("../assets/pictures/resto_4.png").default,
  },
  {
    title: "Steak",
    restoName: "Supercow",
    coverImage: require("../assets/pictures/resto-auction_1.jpg").default,
    avatar: require("../assets/pictures/resto-auction_1.png").default,
  },
  {
    title: "Burger",
    restoName: "Michael's food",
    coverImage: require("../assets/pictures/resto-auction_2.jpg").default,
    avatar: require("../assets/pictures/resto-auction_2.png").default,
  },
];

export default function CardCarousel() {
  const [num, setNum] = React.useState(1);
  const lowerThan1200 = useMediaPredicate("(max-width: 1200px)");
  const lowerThan768 = useMediaPredicate("(max-width: 768px)");
  const heightBiggerThan1023 = useMediaPredicate("(min-height: 1023px)");
  const next = () => {
    setNum((prevNum) => {
        let newNum = prevNum + 1;
        if(newNum > cards.length){
            return 1;
        }
        return newNum;
    })
  }
  const back = () => {
    setNum((prevNum) => {
        let newNum = prevNum - 1;
        if(newNum < 1){
            return cards.length;
        }
        return newNum;
    })
  }
  return (
    <>
      <div style={{marginTop: lowerThan1200 || heightBiggerThan1023 ? "3rem" : undefined}}>
        {cards.map((card, idx) => {
          const cardNum = idx + 1;
          return (
            <CardHero
              className={`cardhero ${
                num === cardNum 
                ? "cardhero_active" 
                : num + 1 === cardNum 
                ? "cardhero_inactive" 
                : "cardhero_none"
              }`}
              style={{
                width: lowerThan768 ? "100%" : lowerThan1200 || heightBiggerThan1023 ? "70%" : "81%",
                marginRight: lowerThan1200 || heightBiggerThan1023 ? "auto" : undefined,
                marginLeft: lowerThan1200 || heightBiggerThan1023 ? "auto" : undefined,
              }}
              coverImage={card.coverImage}
              avatar={card.avatar}
              title={card.title}
              restoName={card.restoName}
              isFeatured={card.isFeatured}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: lowerThan768 ? "100%" : lowerThan1200 || heightBiggerThan1023  ? "70%" : "81%",
          marginRight: lowerThan1200 || heightBiggerThan1023 ? "auto" : undefined,
          marginLeft: lowerThan1200 || heightBiggerThan1023 ? "auto" : undefined,
          marginTop: "3rem",
        }}
      >
        <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          <span style={{ fontFamily: "WorkSansSemiBold" }}>{("" + num).padStart(2, '0')}</span> / 06
        </span>
        <Divider style={{ minWidth: "50%", margin: "0 1rem" }} />
        <div style={{ whiteSpace: "nowrap" }}>
          <Button onClick={back}
            style={{
              position: "relative",
              borderRadius: "50%",
              height: "5rem",
              width: "5rem",
              marginRight: "1rem",
            }}
          >
            <BsArrowLeft
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.8rem",
              }}
            />
          </Button>
          <Button onClick={next} style={{ position: "relative", borderRadius: "50%", height: "5rem", width: "5rem" }}>
            <BsArrowRight
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.8rem",
              }}
            />
          </Button>
        </div>
      </div>
    </>
  );
}

function CardHero({ coverImage, isFeatured = false, avatar, title, restoName, style = {}, className }) {
  const { Meta } = Card;
  const heightBiggerThan1023 = useMediaPredicate("(min-height: 1023px)");
  return (
    <Card
      className={className}
      style={{ borderRadius: "2rem", ...style }}
      cover={
        <div style={{ position: "relative" }}>
          {isFeatured ? (
            <img
              src={require("../assets/pictures/featured.png").default}
              style={{
                position: "absolute",
                top: "-3.5rem",
                left: "-3.5rem",
              }}
            />
          ) : null}
          <img
            className="cardCover"
            style={{
              height: heightBiggerThan1023 ? "55rem" : "47.5rem",
              width: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
            }}
            src={coverImage}
          />
        </div>
      }
    >
      <Row>
        <Col>
          <strong
            style={{ display: "inline-block", fontSize: "2.2rem", marginBottom: 5, fontFamily: "DMSerifDisplay" }}
          >
            {title}
          </strong>
        </Col>
      </Row>
      <Row style={{ alignItems: "center" }} gutter={10}>
        <Col>
          <Avatar src={avatar} />
        </Col>
        <Col style={{ flexDirection: "row" }}>
          <p style={{ display: "block", marginBottom: "-0.9rem", fontSize: "1.4rem", fontFamily: "WorkSansMedium" }}>
            {restoName}
          </p>
          <Rate disabled value={5} />
        </Col>
      </Row>
    </Card>
  );
}
