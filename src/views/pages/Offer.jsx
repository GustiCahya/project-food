import React from "react";
import { Row, Col, Button, Card, Layout, Tabs, List, Avatar, Divider, Image, Statistic, Rate, Select, Tag } from "antd";
import { BrowserRouter, Route, NavLink, Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiDialpad } from "react-icons/bi";
import { BsArrowRight, BsArrowLeft, BsAsterisk, BsFacebook, BsGlobe } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";
import Container from "../../components/Container";
import TextInputButton from "../../components/TextInputButton";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import CardOffer from "../../components/CardOffer";

export default function Offer() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const lessThan1200 = useMediaPredicate("(max-width: 1200px)");
  const heightBiggerThan1023 = useMediaPredicate("(min-height: 1023px)");
  return (
    <div>
      <Container style={{ backgroundColor: "white", color: "black", paddingTop: "12rem" }} boxStyle={{ minHeight: "100vh" }}>
        <Row
          gutter={{
            lg: 80,
          }}
          style={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingBottom: "1rem",
            flexDirection: "row-reverse",
          }}
        >
          <Col xs={24} lg={heightBiggerThan1023 ? 24 : 11}>
            <Row gutter={20} style={{ alignItems: "center" }}>
              <Col>
                <h1 style={{ fontSize: "3.6rem", fontFamily: "DMSerifDisplayRegular", marginBottom: 0, marginTop: 0 }}>
                  The Ultimate Beef Taco Feast
                </h1>
              </Col>
            </Row>
            <Divider style={{ backgroundColor: "#e1e1e1" }}></Divider>
            <Row>
              <div style={{ padding: "1rem 3rem", paddingLeft: 0 }}>
                <div>
                  <p style={{ color: "#757575" }}>Creators</p>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Avatar src={require("../../assets/pictures/user_1.png").default} />
                  <h3 style={{ marginBottom: 0 }}>moonshine</h3>
                </div>
              </div>
              <div style={{ padding: "1rem 3rem", borderLeft: "1px solid #e1e1e1" }}>
                <div>
                  <p style={{ color: "#757575" }}>Owner</p>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Avatar src={require("../../assets/pictures/resto_1.png").default} />
                  <h3 style={{ marginBottom: 0 }}>johncollects</h3>
                </div>
              </div>
            </Row>
            <Divider style={{ backgroundColor: "#e1e1e1" }}></Divider>
            <Row style={{ flexDirection: "row", marginBottom: "1rem" }} gutter={25}>
              <Col>
                <h2 style={{ fontSize: "3rem", marginBottom: "2.4rem" }}>.01 ETH ($17)</h2>
              </Col>
            </Row>
            <Row style={{ marginBottom: "2.5rem" }} gutter={20}>
              <Col xs={12}>
                <Button
                  style={{
                    width: "100%",
                    padding: "1rem 0",
                    boxSizing: "content-box",
                    color: "black",
                    border: "3px solid #ace5be",
                    fontFamily: "WorkSansMedium",
                    fontWeight: "bold",
                    borderRadius: 0,
                  }}
                >
                  MAKE AN OFFER
                </Button>
              </Col>
              <Col xs={12}>
                <Button
                  style={{
                    width: "100%",
                    padding: "1rem 0",
                    boxSizing: "content-box",
                    color: "white",
                    backgroundColor: "black",
                    border: "3px solid black",
                    fontFamily: "WorkSansMedium",
                    fontWeight: "bold",
                    borderRadius: 0,
                  }}
                >
                  BUY NOW
                </Button>
              </Col>
            </Row>
            <Row>
              <Col xs={24} style={{ display: "flex", justifyContent: "space-between" }}>
                <a style={{ display: "inline-block", marginBottom: "3rem", color: "black" }} href="#">
                  Created 2 hours ago
                </a>
                <a
                  href="#"
                  style={{ display: "inline-block", marginBottom: "3rem", color: "black", fontWeight: "500" }}
                >
                  <strong>SHARE</strong>{" "}
                  <img
                    style={{ marginLeft: ".2rem" }}
                    src={require("../../assets/pictures/share_ic.svg").default}
                    alt=""
                  />
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={24} lg={heightBiggerThan1023 ? 24 : 13}>
            <div>
              <img
                style={{
                  borderRadius: "2rem",
                  width: "100%",
                  height: "70vh",
                  maxHeight: lessThan1200 ? "50rem" : heightBiggerThan1023 ? "65rem" : undefined,
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                src={require("../../assets/pictures/food_1.jpg").default}
              />
            </div>
            <div>
              <h1 style={{ fontSize: "2rem", marginTop: "3rem" }}>Description</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis sequi consequatur veritatis
                nisi, sint hic eius ex id beatae eos incidunt amet cupiditate maxime impedit a neque inventore ipsam.
                Officia ullam excepturi quae sed temporibus adipisci repudiandae, nostrum maiores impedit nesciunt ab
                dolorem cum, possimus quam aliquam reprehenderit. Obcaecati?
              </p>
            </div>
            <div>
              <h1
                style={{
                  fontSize: "2rem",
                  marginTop: "2rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid #e1e1e1",
                }}
              >
                Offer Details
              </h1>
              <p>
                <Row gutter={[30, 16]}>
                  <Col>
                    <table style={{ width: "28.8rem" }}>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Type:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>Buy it now</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Total Offer Supply:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>1/100</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}># of offers sold:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>10</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Offer Expiry:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>14 days</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Offer Redemption:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>90 days</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Tradeable / Transferable:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>Yes</td>
                      </tr>
                    </table>
                  </Col>
                  <Col>
                    <table style={{ width: "28.8rem" }}>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Medium:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>Video(mp4)</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Contact Address:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>0xb9...b9e0</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Dimensions:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>2160x2728</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Token Standard:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>ERC-721</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}>File Size:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>48MB</td>
                      </tr>
                      <tr>
                        <td style={{ width: "18.8rem" }}>Blockchain:</td>
                        <td style={{ paddingLeft: "2rem", fontWeight: "bold" }}>Ethereum</td>
                      </tr>
                    </table>
                  </Col>
                </Row>
              </p>
            </div>
            <div style={{ display: "flex", gap: 30 }}>
              <a style={{ display: "inline-block", color: "black", fontWeight: "bold" }} href="#">
                <img
                  style={{
                    padding: "1rem",
                    border: "1px solid #e8e8e8",
                    borderRadius: "50%",
                    marginRight: ".8rem",
                    height: "4rem",
                    width: "4rem",
                    aspectRatio: "1 / 1",
                  }}
                  src={require("../../assets/pictures/etherscan.png").default}
                />
                <span style={{ borderBottom: "1px solid black" }}>Etherscan</span>
              </a>
              <a style={{ display: "inline-block", color: "black", fontWeight: "bold" }} href="#">
                <img
                  style={{
                    padding: "1rem",
                    border: "1px solid #e8e8e8",
                    borderRadius: "50%",
                    marginRight: ".8rem",
                    height: "4rem",
                    width: "4rem",
                    aspectRatio: "1 / 1",
                  }}
                  src={require("../../assets/pictures/ipfs.svg").default}
                />
                <span style={{ borderBottom: "1px solid black" }}>IPFS</span>
              </a>
              <a style={{ display: "inline-block", color: "black", fontWeight: "bold" }} href="#">
                <img
                  style={{
                    padding: "1rem",
                    border: "1px solid #e8e8e8",
                    borderRadius: "50%",
                    marginRight: ".8rem",
                    height: "4rem",
                    width: "4rem",
                    aspectRatio: "1 / 1",
                  }}
                  src={require("../../assets/pictures/curlybracket.svg").default}
                />
                <span style={{ borderBottom: "1px solid black" }}>METADATA</span>
              </a>
            </div>
            <div>
              <h1 style={{ fontSize: "2rem", marginTop: "1.6rem", marginBottom: "1rem" }}>Tags</h1>
              <div>
                <Tag>foodie</Tag>
                <Tag>cocktail</Tag>
                <Tag>gastropub</Tag>
                <Tag>tacos</Tag>
                <Tag>wine</Tag>
                <Tag>special</Tag>
                <Tag>new years eve</Tag>
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ position: "relative", marginBottom: "10rem" }}>
          <Divider></Divider>
          <h1 style={{ fontSize: "3rem" }}>
            More Offers from{" "}
            <span
              style={{ fontSize: "inherit", fontFamily: "DMSerifDisplayItalic", borderBottom: "5px solid #80de9d" }}
            >
              @Moonshine
            </span>
          </h1>
          <Row style={{ marginTop: "5rem" }} gutter={20}>
            {[1, 2, 3, 4].map(() => (
              <Col xs={24} md={12} lg={heightBiggerThan1023 ? 12 : 8}>
                <CardOffer coverImage={require("../../assets/pictures/resto_1.jpg").default} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

function SelectFilter() {
  const [value, setValue] = React.useState("Newest");
  return (
    <Select value={value} onChange={val => setValue(val)} style={{ width: "14rem", zIndex: 10 }}>
      <Select.Option value="Newest">Newest</Select.Option>
      <Select.Option value="Oldest">Oldest</Select.Option>
      <Select.Option value="Highest Price">Highest Price</Select.Option>
      <Select.Option value="Lowest Price">Lowest Price</Select.Option>
      <Select.Option value="Expired">Expired</Select.Option>
    </Select>
  );
}
