import React from "react";
import { Row, Col, Button, Card, Layout, Tabs, List, Avatar, Divider, Image, Statistic, Rate, Select } from "antd";
import { BrowserRouter, Route, NavLink, Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiDialpad } from "react-icons/bi";
import { BsArrowRight, BsArrowLeft, BsAsterisk, BsFacebook, BsGlobe } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";
import Container from "../../components/Container";
import TextInputButton from "../../components/TextInputButton";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import CardOffer from "../../components/CardOffer";

export default function Creator() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const biggerThan992 = useMediaPredicate("(min-width: 992px)");
  const lessThan798 = useMediaPredicate("(max-width: 798px)");
  const heightBiggerThan1023 = useMediaPredicate("(min-height: 1023px)");
  const lowerThan1020 = useMediaPredicate("(max-width: 1020px)");
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
                  src={require("../../assets/pictures/creator_1.png").default}
                  style={{ width: "10rem", height: "10rem" }}
                />
              </Col>
              <Col>
                <h1 style={{ fontSize: "3.6rem", fontFamily: "DMSerifDisplayRegular", marginBottom: "0" }}>Moonshine <img src={require(`./../../assets/pictures/check.png`).default} /></h1>
                <p style={{ fontSize: "1.4rem", marginBottom: "2rem", marginTop: "-.8rem" }}>@moonshine</p>

                <div style={{display: "flex"}}>
                  <p style={{ fontSize: "1.2rem", color: "#757575", marginRight: '1rem' }}>
                    <FaMapMarkerAlt style={{ fontSize: "inherit" }} /> New York, NY
                  </p>
                  <p style={{ fontSize: "1.2rem", color: "#757575" }}>
                    <BiDialpad style={{ fontSize: "inherit" }} /> 519-231-1356
                  </p>
                </div>
                <p style={{ fontSize: "1.2rem", color: "#757575" }}>
                  <BsGlobe style={{ fontSize: "inherit" }} /> www.moonshinerestaurant.com
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
                <h2 style={{ fontSize: "3rem", marginBottom: 0 }}>1,235</h2>
                <p style={{ color: "#757575" }}>Followers</p>
              </Col>
              <Divider style={{ height: "7rem" }} type="vertical"></Divider>
              <Col>
                <h2 style={{ fontSize: "3rem", marginBottom: 0 }}>890</h2>
                <p style={{ color: "#757575" }}>Following</p>
              </Col>
              <Divider style={{ height: "7rem" }} type="vertical"></Divider>
              <Col>
                <h2 style={{ fontSize: "3rem", marginBottom: 0 }}>156</h2>
                <p style={{ color: "#757575" }}>CollectorsAffiliates</p>
              </Col>
            </Row>
            <Row style={{marginBottom: "2.5rem"}} gutter={heightBiggerThan1023 ? 30 : 20}>
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
                    borderRadius: 0
                  }}
                >
                  FOLLOW
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
                    borderRadius: 0
                  }}
                >
                  CREATE AN OFFER
                </Button>
              </Col>
            </Row>
            <a style={{display: "inline-block", marginBottom: "3rem", color: "black", borderBottom: "1px solid black"}} href="#">
              Learn more about creating offers
            </a>
            <p style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "1.2rem" }}>
              <BsInstagram style={{ marginRight: "1rem" }} />
              @MOONSHINERESTAURANT
            </p>
            <p style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "1.2rem" }}>
              <BsFacebook style={{ marginRight: "1rem" }} />
              @MOONSHINE
            </p>
            <p style={{ display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "1.2rem" }}>
              <BsTwitter style={{ marginRight: "1rem" }} />
              @MOONSHINE
            </p>
          </Col>
          <Col xs={24} lg={heightBiggerThan1023 ? 24 : 14} style={{ textAlign: "right" }}>
            <img
              style={{
                borderRadius: "2rem",
                width: heightBiggerThan1023 ? "100%" : "100%",
                height: lowerThan1020 ? "50rem" : heightBiggerThan1023 ? "65rem" : "70vh",
                aspectRatio: "1 / 1",
                objectFit: "cover",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
              src={require("../../assets/pictures/creator.jpg").default}
            />
          </Col>
        </Row>
        <div style={{ position: "relative" }}>
          <div style={{position: "absolute", right: 0, top: "1rem", display: "flex", alignItems: "center", gap: "3rem"}}>
            <p style={{marginBottom: 0, display: lessThan798 ? "none" : 'inline-block'}}><b>50</b> Offers</p>
            <SelectFilter />
          </div>
          <Tabs defaultActiveKey="1" style={{ marginBottom: "6rem" }}>
            <TabPane tab="COLLECTION OFFERS" key="1">
              <Row style={{ marginTop: "5rem" }} gutter={20}>
                {[1, 2, 3, 4, 5, 6].map(() => (
                  <Col xs={24} md={12} lg={heightBiggerThan1023 ? 12 : 8}>
                    <CardOffer coverImage={require("../../assets/pictures/resto_1.jpg").default} />
                  </Col>
                ))}
              </Row>
              <Row>
                <button style={{margin: "0 auto", marginTop: "2rem", padding: "1rem 3rem", border: "2px solid #ace5be", fontFamily: "WorkSansMedium", fontWeight: "700"}}>LOAD MORE</button>
              </Row>
            </TabPane>
            <TabPane tab="CREATOR+ OFFERS" key="2">
              <div>
                <h2 style={{ fontSize: "2.4rem" }}>Offers</h2>
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
            <TabPane tab={<><span>REVIEWS</span><Rate value={5} className="headerRate" style={{marginLeft: "1rem", cursor: "pointer", marginTop: 0, marginBottom: 0, display: biggerThan992 ? "initial" : "none"}} disabled/></>} key="3">
              <div>
              <h2 style={{ fontSize: "2.4rem", marginBottom: "2.5rem" }}>2 Reviews</h2>
                <div>
                  <Row gutter={20}>
                    <Col>
                      <Avatar src={require("../../assets/pictures/user_1.png").default} size="large" style={{width: "10rem", height: "10rem"}} />
                    </Col>
                    <Col>
                      <h3 style={{marginBottom: 0, fontSize: "2rem"}}>@MikeL</h3>
                      <Rate style={{marginTop: "-.5rem", marginBottom: "1rem"}} value={4}/>
                      <p style={{maxWidth: "106rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga ducimus recusandae eos
                  pariatur aliquam nemo ipsam ab odit quasi quas quod doloribus minima.</p>
                    </Col>
                  </Row>
                  <Divider></Divider>
                  <Row gutter={20}>
                    <Col>
                      <Avatar src={require("../../assets/pictures/user_1.png").default} size="large" style={{width: "10rem", height: "10rem"}} />
                    </Col>
                    <Col>
                      <h3 style={{marginBottom: 0, fontSize: "2rem"}}>@EmilyC</h3>
                      <Rate value={5} style={{marginTop: "-.5rem", marginBottom: "1rem"}} />
                      <p style={{maxWidth: "106rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga ducimus recusandae eos
                  pariatur aliquam nemo ipsam ab odit quasi quas quod doloribus minima.</p>
                    </Col>
                  </Row>
                </div>
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
      style={{ width: "14rem", zIndex: 10 }}
    >
      <Select.Option value="Newest">Newest</Select.Option>
      <Select.Option value="Oldest">Oldest</Select.Option>
      <Select.Option value="Highest Price">Highest Price</Select.Option>
      <Select.Option value="Lowest Price">Lowest Price</Select.Option>
      <Select.Option value="Expired">Expired</Select.Option>
    </Select>
  );
}
