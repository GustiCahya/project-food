import React from "react";
import { Row, Col, Button, Card, Layout, Tabs, List, Avatar, Divider, Image, Statistic, Rate, Select } from "antd";
import { BrowserRouter, Route, NavLink, Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft, BsAsterisk } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";
import Container from "../../components/Container";
import TextInputButton from "../../components/TextInputButton";
import { BsTwitter, BsInstagram } from "react-icons/bs";

export default function User() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const biggerThan576 = useMediaPredicate("(min-width: 576px)");
  const lowerThan1020 = useMediaPredicate("(max-width: 1020px)");
  const heightBiggerThan1023 = useMediaPredicate("(min-height: 1023px)");
  return (
    <div>
      <Container style={{ backgroundColor: "white", color: "black", paddingTop: "12rem" }} boxStyle={{ minHeight: "100vh" }}>
        <Row
          className="hero"
          gutter={[50, 50]}
          style={{ alignItems: "flex-start", justifyContent: "space-between", paddingBottom: "10rem" }}
        >
          <Col xs={24} lg={heightBiggerThan1023 ? 24 : 10}>
            <Row gutter={20} style={{ alignItems: "center" }}>
              <Col>
                <Avatar
                  src={require("../../assets/pictures/user_1.png").default}
                  style={{ width: "10rem", height: "10rem" }}
                />
              </Col>
              <Col>
                <h1 style={{ fontSize: "3.6rem", fontFamily: "DMSerifDisplayRegular", marginBottom: "0" }}>John</h1>
                <p style={{ fontSize: "1.4rem", marginBottom: "2rem", marginTop: "-.8rem" }}>@JohnCollects</p>
                <p style={{ fontSize: "1.2rem", color: "#757575" }}>
                  <FaMapMarkerAlt style={{ fontSize: "inherit" }} /> Los Angeles, CA
                </p>
              </Col>
            </Row>
            <Divider></Divider>
            <Row>
              <Col>
                <p style={{ color: "#757575" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi maxime nihil fugit dolore debitis
                  modi sunt quasi enim assumenda cumque.
                </p>
              </Col>
            </Row>
            <Row style={{ flexDirection: "row", marginBottom: "1rem" }} gutter={25}>
              <Col>
                <h2 style={{ fontSize: "3rem", marginBottom: 0 }}>525</h2>
                <p style={{ color: "#757575" }}>Followers</p>
              </Col>
              <Divider style={{ height: "7rem" }} type="vertical"></Divider>
              <Col>
                <h2 style={{ fontSize: "3rem", marginBottom: 0 }}>890</h2>
                <p style={{ color: "#757575" }}>Following</p>
              </Col>
            </Row>
            <Button
              style={{
                width: "100%",
                padding: "1rem 0",
                boxSizing: "content-box",
                marginBottom: "3rem",
                color: "black",
                border: "3px solid #ace5be",
                fontFamily: "WorkSansMedium",
                fontWeight: "bold",
              }}
            >
              FOLLOW
            </Button>
            <p style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "1.2rem" }}>
              <BsInstagram style={{ marginRight: "1rem" }} />
              @JOHNPHOTO
            </p>
            <p style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "1.2rem" }}>
              <BsTwitter style={{ marginRight: "1rem" }} />
              @JOHNONTWITTER
            </p>
          </Col>
          <Col xs={24} lg={heightBiggerThan1023 ? 24 : 14} style={{ textAlign: "right" }}>
            <img
              style={{
                borderRadius: "2rem",
                width: "100%",
                height: lowerThan1020 ? "50rem" : heightBiggerThan1023 ? "65rem" : "70vh",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
              src={require("../../assets/pictures/food_1.jpg").default}
            />
          </Col>
        </Row>
        <div style={{ position: "relative" }}>
          <SelectFilter />
          <Tabs defaultActiveKey="1" style={{ marginBottom: "6rem" }}>
            <TabPane tab="COLLECTION" key="1">
              <Row style={{ marginTop: "5rem" }} gutter={20}>
                {[1, 2, 3, 4, 5, 6].map(() => (
                  <Col xs={24} md={12} lg={heightBiggerThan1023 ? 12 : 8}>
                    <CardCollection coverImage={require("../../assets/pictures/resto_1.jpg").default} />
                  </Col>
                ))}
              </Row>
            </TabPane>
            <TabPane tab="ABOUT" key="2">
              <div>
                <h2 style={{ fontSize: "2.4rem" }}>2 Reviews</h2>
                <p style={{ fontSize: "1.3rem", color: "#757575", maxWidth: "87rem" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga ducimus recusandae eos
                  pariatur aliquam nemo ipsam ab odit quasi quas quod doloribus minima, expedita quos laboriosam
                  repudiandae incidunt quaerat. Deleniti neque ratione porro praesentium numquam esse? Eligendi culpa
                  nostrum, ducimus fuga ipsam dignissimos repudiandae asperiores minus fugiat ipsa nulla distinctio
                  cupiditate ad dolorem sunt expedita debitis, consequuntur accusamus quae! Quaerat, sint magni. Maiores
                  debitis accusantium ad nesciunt sapiente recusandae praesentium fugit adipisci! Maiores dolores
                  reprehenderit assumenda libero accusantium, harum facilis doloribus veniam! Provident, modi
                  temporibus! Minus nesciunt facilis quam? Laudantium, ipsa, assumenda tempore officiis voluptas sint et
                  cum dignissimos iure possimus itaque dolor sapiente voluptate! Sapiente accusamus deserunt dolorem,
                  odio, voluptatem vero magni maiores eligendi saepe debitis, ipsa esse! Error repellat ab itaque sunt
                  incidunt? Quod
                </p>
              </div>
            </TabPane>
            <TabPane tab="REVIEWS" key="3">
              <div>
                <h2 style={{ fontSize: "2.4rem" }}>2 Reviews</h2>
                <p style={{ fontSize: "1.3rem", color: "#757575", maxWidth: "87rem" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga ducimus recusandae eos
                  pariatur aliquam nemo ipsam ab odit quasi quas quod doloribus minima, expedita quos laboriosam
                  repudiandae incidunt quaerat. Deleniti neque ratione porro praesentium numquam esse? Eligendi culpa
                  nostrum, ducimus fuga ipsam dignissimos repudiandae asperiores minus fugiat ipsa nulla distinctio
                  cupiditate ad dolorem sunt expedita debitis, consequuntur accusamus quae! Quaerat, sint magni. Maiores
                  debitis accusantium ad nesciunt sapiente recusandae praesentium fugit adipisci! Maiores dolores
                  reprehenderit assumenda libero accusantium, harum facilis doloribus veniam! Provident, modi
                  temporibus! Minus nesciunt facilis quam? Laudantium, ipsa, assumenda tempore officiis voluptas sint et
                  cum dignissimos iure possimus itaque dolor sapiente voluptate! Sapiente accusamus deserunt dolorem,
                  odio, voluptatem vero magni maiores eligendi saepe debitis, ipsa esse! Error repellat ab itaque sunt
                  incidunt? Quod
                </p>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}

function SelectFilter() {
  const [value, setValue] = React.useState("Newest");
  return (
    <Select
      value={value}
      onChange={val => setValue(val)}
      style={{ position: "absolute", right: 0, top: "1rem", width: "14rem", zIndex: 10 }}
    >
      <Select.Option value="Newest">Newest</Select.Option>
      <Select.Option value="Oldest">Oldest</Select.Option>
      <Select.Option value="Highest Price">Highest Price</Select.Option>
      <Select.Option value="Lowest Price">Lowest Price</Select.Option>
      <Select.Option value="Expired">Expired</Select.Option>
    </Select>
  );
}

function CardCollection({ coverImage, style = {} }) {
  const lessThan1060 = useMediaPredicate("(max-width: 1060px)");
  const lessThan756 = useMediaPredicate("(max-width: 756px)");
  const lessThan387 = useMediaPredicate("(max-width: 387px)");
  return (
    <>
      <Card
        style={{ borderRadius: "2rem", marginBottom: "3rem", ...style }}
        cover={<img style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }} src={coverImage} />}
      >
        <Row style={{ alignItems: "center", marginBottom: "2rem" }} gutter={10}>
          <Col style={{ flexDirection: "row", marginRight: "auto" }}>
            <h1 style={{ display: "block", fontWeight: "bold", fontSize: "2rem", marginBottom: "0" }}>CBD Offer</h1>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <img src={require("../../assets/pictures/share_ic.svg").default} />
          </Col>
        </Row>
        <Row gutter={50}>
          <Col>
            <p style={{ marginBottom: "0", fontFamily: "WorkSansItalic" }}>list price</p>
            <p style={{ fontWeight: "bold" }}>0.004 eth</p>
          </Col>
          <Col>
            <p style={{ marginBottom: "0", fontFamily: "WorkSansItalic" }}>last sale price</p>
            <p style={{ fontWeight: "bold" }}>0.004 eth</p>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col xs={lessThan387 ? 24 : 12} sm={lessThan756 ? 24 : 12} md={lessThan1060 ? 24 : 12} style={{ paddingTop: "1rem" }}>
            <p style={{ display: "block", fontSize: "1.3rem", fontFamily: "WorkSansItalic" }}>creator</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={require("../../assets/pictures/resto_2.png").default} style={{ marginRight: "1rem", aspectRatio: "1 / 1" }} />
              <p style={{ margin: 0, color: "#181a19" }}>NoraTropicals</p>
            </div>
          </Col>
          <Col xs={lessThan387 ? 24 : 12} sm={lessThan756 ? 24 : 12} md={lessThan1060 ? 24 : 12} style={{ paddingTop: "1rem" }}>
            <p style={{ display: "block", fontSize: "1.3rem", fontFamily: "WorkSansItalic" }}>owner</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={require("../../assets/pictures/user_1.png").default} style={{ marginRight: "1rem", aspectRatio: "1 / 1" }} />
              <p style={{ margin: 0, color: "#181a19" }}>Johncollects</p>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
