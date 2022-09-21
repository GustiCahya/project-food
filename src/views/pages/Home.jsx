import React from "react";
import { Row, Col, Button, Card, Layout, Tabs, List, Avatar, Divider, Image, Statistic, Rate } from "antd";
import { BrowserRouter, Route, NavLink, Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft, BsAsterisk } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";
import Container from "../../components/Container";
import TextInputButton from "../../components/TextInputButton";
import CardCarousel from "../../components/CardCarousel";

export default function Home() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const lowerThan1200 = useMediaPredicate("(max-width: 1200px)");
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const biggerThan576 = useMediaPredicate("(min-width: 576px)");
  const heightBiggerThan1023 = useMediaPredicate("(min-height: 1023px)");
  return (
    <div>
      <Container
        style={{ backgroundColor: "#f1f4eb", paddingTop: "12rem", paddingBottom: "5rem", overflowX: "hidden" }}
      >
        <Row
          className="hero"
          gutter={{
            xs: 0,
            md: 100,
          }}
          style={{ alignItems: "center" }}
        >
          <Col xs={24} md={24} xl={heightBiggerThan1023 ? 24 : 9}>
            <h1 style={{ fontSize: "3rem", fontFamily: "DMSerifDisplayRegular" }}>
              <span
                style={{
                  fontSize: "inherit",
                  borderBottom: ".5rem solid #80de9d",
                  fontFamily: "DMSerifDisplayItalic",
                  fontSize: "4rem",
                }}
              >
                Buy, Sell & Discover
              </span>
              <br /> NFT Offerings from Local Businesses
            </h1>
            <h2 style={{ marginBottom: "2rem" }}>
              <span style={{ fontWeight: 700 }}>Buy, sell, trade and earn rewards</span> for buying NFTs from your
              favourite restaurants, bars & local busineses.
            </h2>
            <TextInputButton
              prefix={<FaMapMarkerAlt style={{ marginRight: ".8rem", marginLeft: "1.2rem" }} />}
              titleInput="ZIPCODE"
              titleButton="Discover"
              styleInput={{
                padding: 0,
                background: undefined,
                color: "#81de9e",
              }}
              styleButton={{
                padding: 0,
                background: "#181a19",
                color: "white",
                paddingTop: ".3rem",
                paddingBottom: ".3rem",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1.2rem" }}>
              <img src={require("../../assets/pictures/sponsor_1.png").default} />
              <img src={require("../../assets/pictures/sponsor_2.png").default} />
              <img src={require("../../assets/pictures/sponsor_3.png").default} />
              <img src={require("../../assets/pictures/sponsor_4.png").default} />
            </div>
          </Col>
          <Col xs={24} md={24} xl={heightBiggerThan1023 ? 24 : 15}>
            <CardCarousel />
          </Col>
        </Row>
      </Container>
      <Container style={{ backgroundColor: "#181a19", color: "white", paddingTop: "7rem", paddingBottom: "7rem" }}>
        <Row
          gutter={{
            xs: 10,
            md: 35,
          }}
        >
          <Col
            xs={24}
            md={8}
            style={{
              display: biggerThan576 && !biggerThan768 ? "flex" : "block",
              marginBottom: biggerThan576 && !biggerThan768 ? "3rem" : undefined,
            }}
          >
            <div
              style={{
                position: "relative",
                border: ".3rem solid #87ffad",
                borderRadius: "50%",
                minWidth: "11.5rem",
                maxWidth: "11.5rem",
                height: "11.5rem",
                margin: "1rem 0",
                marginRight: "2rem",
                marginBottom: biggerThan768 ? "3rem" : undefined,
              }}
            >
              <img
                src={require("../../assets/pictures/info_1.png").default}
                style={{ position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}
              />
            </div>
            <div>
              <h3
                style={{
                  color: "#87ffad",
                  marginTop: biggerThan768 ? undefined : "1.5rem",
                  fontFamily: "DMSerifDisplayRegular",
                  fontSize: "2rem",
                }}
              >
                Proudly built by
              </h3>
              <p>
                local restaurateurs, small business owners & blockchain technology enthusiasts that want an inexpensive,
                fast and secure way to create and share NFTs offers.
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              display: biggerThan576 && !biggerThan768 ? "flex" : "block",
              marginBottom: biggerThan576 && !biggerThan768 ? "3rem" : undefined,
            }}
          >
            <div
              style={{
                position: "relative",
                border: ".3rem solid #87ffad",
                borderRadius: "50%",
                minWidth: "11.5rem",
                maxWidth: "11.5rem",
                height: "11.5rem",
                margin: "1rem 0",
                marginRight: "2rem",
                marginBottom: biggerThan768 ? "3rem" : undefined,
              }}
            >
              <img
                src={require("../../assets/pictures/info_2.png").default}
                style={{ position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}
              />
            </div>
            <div>
              <h3
                style={{
                  color: "#87ffad",
                  marginTop: biggerThan768 ? undefined : "1.5rem",
                  fontFamily: "DMSerifDisplayRegular",
                  fontSize: "2rem",
                }}
              >
                As the community evolves
              </h3>
              <p>
                connects, and innovates within the blockchain and hyperlocal search discovery environment, everyone on
                the platform will benefit from its growth. Naturally and organically, the community will add more local
                businesses and users, creative offerings, trade and share, earn rewards and more.
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              display: biggerThan576 && !biggerThan768 ? "flex" : "block",
              marginBottom: biggerThan576 && !biggerThan768 ? "3rem" : undefined,
            }}
          >
            <div
              style={{
                position: "relative",
                border: ".3rem solid #87ffad",
                borderRadius: "50%",
                minWidth: "11.5rem",
                maxWidth: "11.5rem",
                height: "11.5rem",
                margin: "1rem 0",
                marginRight: "2rem",
                marginBottom: biggerThan768 ? "3rem" : undefined,
              }}
            >
              <img
                src={require("../../assets/pictures/info_3.png").default}
                style={{ position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}
              />
            </div>
            <div>
              <h3
                style={{
                  color: "#87ffad",
                  marginTop: biggerThan768 ? undefined : "1.5rem",
                  fontFamily: "DMSerifDisplayRegular",
                  fontSize: "2rem",
                }}
              >
                All local businesses and customers
              </h3>
              <p>
                are verified by mmmint via industry “know your customer” standards. So you can rest assured knowing we
                have vetted all bars and restaurants on our platform and that you are safely transacting and interacting
                with real local businesses and users.
              </p>
            </div>
          </Col>
          <Col xs={24} style={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="#"
              style={{
                width: biggerThan576 ? "20rem" : "100%",
                display: "inline-block",
                textAlign: "center",
                border: ".3rem solid #87ffad",
                color: "white",
                background: "transparent",
                padding: ".9rem .5rem",
                marginTop: "3rem",
              }}
            >
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ backgroundColor: "var(--white)", color: "var(--black)", paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <Row gutter={45} style={{ rowGap: "2rem" }}>
          <Col xs={24} xl={heightBiggerThan1023 ? 24 : 16}>
            <h1 style={{ fontWeight: "700", fontSize: "4rem", fontFamily: "DMSerifDisplayRegular" }}>
              Latest{" "}
              <span
                style={{ borderBottom: ".3rem solid #87ffad", fontSize: "inherit", fontFamily: "DMSerifDisplayItalic" }}
              >
                Offers
              </span>
            </h1>
            <Tabs defaultActiveKey="1">
              <TabPane tab="ALL OFFERS" key="1">
                <Row gutter={20} style={{ rowGap: "2rem" }}>
                  <Col xs={24}>
                    <CardMenu
                      coverImage={require("../../assets/pictures/resto_1.jpg").default}
                      avatar={require("../../assets/pictures/resto_1.png").default}
                      title="Ultimate Brunch Experience"
                      desc="bids start at 0.00015 eth"
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="RESTAURANTS" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="BARS & CLUBS" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="SMALL BUSINESS" key="4">
                Content of Tab Pane 4
              </TabPane>
            </Tabs>
          </Col>
          <Col xs={24} xl={heightBiggerThan1023 ? 24 : 8}>
            <Row>
              <Col style={{ marginTop: lowerThan1200 ? "3.3rem" : undefined }} xs={24}>
                <h1 style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "700",
                      fontSize: "2rem",
                      fontFamily: "DMSerifDisplayRegular",
                    }}
                  >
                    <BsAsterisk color="#7eeba0" style={{ marginRight: ".6rem" }} /> Live Auctions
                  </span>
                  <a href="#" style={{ color: "black", borderBottom: ".2rem solid black", fontSize: "1.3rem" }}>
                    VIEW ALL
                  </a>
                </h1>
                <Row gutter={35} style={{ rowGap: "2rem" }}>
                  <Col xs={24} lg={12} xl={heightBiggerThan1023 ? 12 : 24}>
                    <CardAuction
                      coverImage={require("../../assets/pictures/resto_1.jpg").default}
                      avatar={require("../../assets/pictures/resto_1.png").default}
                      title="Taco Tuesday"
                      desc="Cantina on 5th"
                    />
                  </Col>
                  <Col xs={24} lg={12} xl={heightBiggerThan1023 ? 12 : 24}>
                    <CardAuction
                      coverImage={require("../../assets/pictures/resto_1.jpg").default}
                      avatar={require("../../assets/pictures/resto_1.png").default}
                      title="Taco Tuesday"
                      desc="Cantina on 5th"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={24} style={{ marginTop: "3rem" }}>
                <h1 style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "700", fontSize: "2rem", fontFamily: "DMSerifDisplayRegular" }}>
                    Top Restaurants
                  </span>
                  <a href="#" style={{ color: "black", borderBottom: ".2rem solid black", fontSize: "1.3rem" }}>
                    VIEW ALL
                  </a>
                </h1>
                <Divider />
                <List
                  itemLayout="horizontal"
                  dataSource={[
                    {
                      title: "Hanami Japanese",
                    },
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={require("../../assets/pictures/top-resto_1.png").default} />}
                        title={
                          <a href="#" style={{ fontFamily: "WorkSansMedium", fontWeight: "bold" }}>
                            {item.title}
                          </a>
                        }
                        description={<Rate disabled defaultValue={3} style={{ marginTop: "-1.5rem" }} />}
                      />
                    </List.Item>
                  )}
                />
              </Col>
              <Col xs={24} style={{ marginTop: "3rem" }}>
                <h1 style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "700", fontSize: "2rem", fontFamily: "DMSerifDisplayRegular" }}>
                    Top Businesses
                  </span>
                  <a href="#" style={{ color: "black", borderBottom: ".2rem solid black", fontSize: "1.3rem" }}>
                    VIEW ALL
                  </a>
                </h1>
                <Divider />
                <List
                  itemLayout="horizontal"
                  dataSource={[
                    {
                      title: "Tops Barber",
                    },
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={require("../../assets/pictures/top-business_1.png").default} />}
                        title={
                          <a href="#" style={{ fontFamily: "WorkSansMedium", fontWeight: "bold" }}>
                            {item.title}
                          </a>
                        }
                        description={<Rate disabled defaultValue={3} style={{ marginTop: "-1.5rem" }} />}
                      />
                    </List.Item>
                  )}
                />
              </Col>
              <Col xs={24} style={{ marginTop: "3rem" }}>
                <h1 style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: "700", fontSize: "2rem", fontFamily: "DMSerifDisplayRegular" }}>
                    Featured
                  </span>
                  <a href="#" style={{ color: "black", borderBottom: ".2rem solid black", fontSize: "1.3rem" }}>
                    VIEW ALL
                  </a>
                </h1>
                <Divider />
                <List
                  itemLayout="horizontal"
                  dataSource={[
                    {
                      title: "Wine & Dine: Chef's Table Dinner Experience",
                    },
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Image
                            src={require("../../assets/pictures/featured_1.jpg").default}
                            style={{ borderRadius: "1rem" }}
                            preview={false}
                            width="15rem"
                          />
                        }
                        title={<a href="#">{item.title}</a>}
                        description={
                          <div style={{ marginTop: "1rem" }}>
                            <List.Item.Meta
                              avatar={<Avatar src={require("../../assets/pictures/featured_1.png").default} />}
                              title={<a href="#">The Pearl</a>}
                              description={<Rate disabled defaultValue={3} style={{ marginTop: "-1.5rem" }} />}
                            />
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Col>
              <Col xs={24} style={{ marginTop: "3rem" }}>
                <h1 style={{ display: "flex", justifyContent: "space-between", fontFamily: "DMSerifDisplayRegular" }}>
                  <span style={{ fontWeight: "700", fontSize: "2rem", fontFamily: "DMSerifDisplayRegular" }}>
                    Our Stats
                  </span>
                  <a href="#" style={{ color: "black", borderBottom: ".2rem solid black", fontSize: "1.3rem" }}>
                    VIEW ALL
                  </a>
                </h1>
                <Divider />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "2rem" }}>
                  <Statistic title="Business" value={"500+"} />
                  <Statistic title="In Sales" value={"$100+m"} />
                  <Statistic title="Avg Resale Value" value={"4000%"} />
                  <Statistic title="Volume" value={"$100+m"} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function CardMenu({ coverImage, avatar, title, desc, style = {} }) {
  const { Meta } = Card;
  const lowerThan1200 = useMediaPredicate("(max-width: 1200px)");
  const lowerThan768 = useMediaPredicate("(max-width: 768px)");
  return (
    <>
      <Card
        style={{
          marginTop: lowerThan1200 ? "1.3rem" : ".5rem",
          borderRadius: "2rem",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          ...style,
        }}
        cover={<img style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "2rem" }} src={coverImage} />}
      >
        <Row style={{ alignItems: "center" }} gutter={10}>
          <Col>
            <Avatar src={avatar} />
          </Col>
          <Col style={{ flexDirection: "row", marginRight: "auto" }}>
            <p style={{ display: "block", marginBottom: "-0.9rem", fontFamily: "WorkSansMedium" }}>Artisan</p>
            <Rate disabled defaultValue={3} />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <p style={{ marginBottom: ".2rem" }}>Created 2 hours ago</p>
            <a href="#" style={{ color: "black", fontWeight: "500" }}>
              <strong>SHARE</strong>{" "}
              <img style={{ marginLeft: ".2rem" }} src={require("../../assets/pictures/share_ic.svg").default} alt="" />
            </a>
          </Col>
        </Row>
        <Divider></Divider>
        <Row style={{ alignItems: "center" }}>
          <Col xs={24} md={12}>
            <h1 style={{ display: "block", fontSize: "2rem" }}>Ultimate Brunch Experience</h1>
            <p style={{ display: "block", fontSize: "1.3rem" }}>bids start at 0.0015 eth</p>
          </Col>
          <Col xs={24} md={12} style={{display: 'flex', justifyContent: "flex-end"}}>
            <Button
              style={{
                marginRight: "1rem",
                borderColor: "#80de9d",
                color: "black",
                borderRadius: ".2rem",
                padding: ".5rem 2rem",
                boxSizing: "content-box",
                width: lowerThan768 ? "100%" : undefined
              }}
            >
              View
            </Button>
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                borderColor: "black",
                borderRadius: ".2rem",
                padding: ".5rem 2rem",
                boxSizing: "content-box",
                width: lowerThan768 ? "100%" : undefined
              }}
            >
              Buy Now
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

function CardAuction({ coverImage, avatar, title, desc, style = {} }) {
  const { Meta } = Card;
  const lowerThan1200 = useMediaPredicate("(max-width: 1200px)");
  return (
    <Card
      style={{ marginLeft: "auto", marginRight: "auto", borderRadius: "2rem", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", ...style }}
      cover={
        <div style={{ position: "relative" }}>
          <img
            className="cardCover"
            style={{
              width: "100%",
              objectFit: "cover",
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
            }}
            src={coverImage}
          />
          <span
            style={{
              position: "absolute",
              right: "1rem",
              bottom: "1.5rem",
              backgroundColor: "#a9e2b9",
              width: "fit-content",
              padding: ".5rem 1.5rem",
              borderRadius: "30rem",
              fontWeight: "bold",
            }}
          >
            10h 4m 6s
          </span>
        </div>
      }
    >
      <Row>
        <Col>
          <strong style={{ display: "inline-block", fontSize: "2rem", marginBottom: 5 }}>{title}</strong>
        </Col>
      </Row>
      <Row style={{ alignItems: "center" }} gutter={10}>
        <Col>
          <Avatar src={avatar} />
        </Col>
        <Col style={{ flexDirection: "row" }}>
          <p style={{ display: "block", marginBottom: "-0.9rem" }}>{desc}</p>
          <Rate disabled defaultValue={3} />
        </Col>
      </Row>
    </Card>
  );
}
