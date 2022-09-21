import React from "react";
import {
  Row,
  Col,
  Button,
  Card,
  Layout,
  Tabs,
  List,
  Avatar,
  Divider,
  Image,
  Statistic,
  Rate,
  Select,
  Collapse,
  Checkbox,
  DatePicker,
  Pagination,
} from "antd";
import { BrowserRouter, Route, NavLink, Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiCalendar, BiDialpad } from "react-icons/bi";
import { BsArrowRight, BsArrowLeft, BsAsterisk, BsFacebook, BsGlobe, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";
import Container from "../../components/Container";
import TextInputButton from "../../components/TextInputButton";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import CardOffer from "../../components/CardOffer";
import DoubleSlider from "../../components/DoubleSlider";

export default function Creator() {
  const { Content } = Layout;
  const { TabPane } = Tabs;
  const { RangePicker } = DatePicker;
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const lessThan798 = useMediaPredicate("(max-width: 798px)");
  const heightBiggerThan1023 = useMediaPredicate("(min-height: 1023px)");
  const [activeTab, setActiveTab] = React.useState("0");
  const onClickTab = React.useCallback((val) => {
    if (activeTab === val) {
      setActiveTab("0");
    } else {
      setActiveTab(val)
    }
  }, [activeTab])
  return (
    <div>
      <Container style={{ backgroundColor: "white", color: "black", paddingTop: "12rem" }} boxStyle={{ minHeight: "100vh" }}>
        <Row
          className="hero"
          gutter={{
            xs: 0,
            sm: 0,
            md: 80,
          }}
          style={{ alignItems: "flex-start", justifyContent: "space-between", paddingBottom: "3rem" }}
        >
          <Col xs={24} md={10} style={{ maxWidth: biggerThan768 ? "60rem" : undefined }}>
            <Row gutter={20} style={{ alignItems: "center" }}>
              <Col>
                <h1 style={{ fontSize: "3.6rem", fontFamily: "DMSerifDisplayRegular", marginBottom: "2.8rem" }}>
                  <span style={{ fontSize: "inherit", borderBottom: ".4rem solid #80de9d", fontFamily: "inherit" }}>
                    Explore
                  </span>{" "}
                  the Market
                </h1>
                <p style={{ fontSize: "1.4rem", marginBottom: "2rem", marginTop: "-.8rem" }}>
                  <span style={{ fontFamily: "WorkSansMedium" }}>Browse and discover</span> latest deals.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <div style={{ position: "relative" }}>
          <div
            style={{ position: "absolute", right: 0, top: "1rem", display: "flex", alignItems: "center", gap: "3rem" }}
          >
            <p style={{ marginBottom: 0, display: lessThan798 ? "none" : "inline-block" }}>
              <b>556</b> Results
            </p>
            <SelectFilter />
          </div>
          <Tabs className="CollapsibleTabs" type="card" activeKey={activeTab} style={{ marginBottom: "3rem" }} onTabClick={onClickTab}>
            <TabPane key="0"></TabPane>
            <TabPane
              key="1"
              tab={
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  OFFERS {activeTab === "1" ? <BsChevronUp /> : <BsChevronDown />}
                </div>
              }
            >
              <Row gutter={20}>
                <Col style={{marginBottom: "2rem"}} xs={24} md={12} lg={heightBiggerThan1023 ? 12 : 8}>
                  <div>
                    <h3 style={{ marginBottom: "2rem" }}>Offer Details</h3>
                    <Checkbox.Group
                      style={{ display: "flex", flexDirection: "column" }}
                      options={[
                        "List price",
                        "Reserved price",
                        "Live auction",
                        "Upcoming auction",
                        "Secondary sale",
                        "Open offer",
                        "Owned by creator",
                        "Never received an offer",
                      ]}
                    />
                  </div>
                </Col>
                <Col style={{marginBottom: "2rem"}} xs={24} md={12} lg={heightBiggerThan1023 ? 12 : 8}>
                  <div>
                    <h3 style={{ marginBottom: "2rem" }}>Offer Type</h3>
                    <Checkbox.Group
                      style={{ display: "flex", flexDirection: "column" }}
                      options={[
                        "Restaurants",
                        "Bars",
                        "Health & Fitness",
                        "Salons & Barbers",
                        "Car & Mechanic",
                        "Technology",
                        "Travel",
                        "Pets",
                      ]}
                    />
                  </div>
                </Col>
                <Col style={{marginBottom: "2rem"}} xs={24} md={12} lg={heightBiggerThan1023 ? 12 : 8}>
                  <div style={{marginBottom: "3rem"}}>
                    <h3 style={{marginBottom: "1rem"}}>Price Range</h3>
                    <DoubleSlider />
                  </div>
                  <div>
                    <h3 style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                      Date Minted <BiCalendar style={{fontSize: "2rem"}} />
                    </h3>
                    <RangePicker />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane
              key="2"
              tab={
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  CREATORS {activeTab === "2" ? <BsChevronUp /> : <BsChevronDown />}
                </div>
              }
            >
              <div>Lorem ipsum</div>
            </TabPane>
          </Tabs>
          <Row style={{ marginTop: "5rem" }} gutter={20}>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <Col xs={24} md={12} lg={heightBiggerThan1023 ? 12 : 8}>
                <CardOffer coverImage={require("../../assets/pictures/resto_1.jpg").default} />
              </Col>
            ))}
          </Row>
          <Row>
            <div
              style={{
                margin: "0 auto",
                marginTop: "3rem",
                marginBottom: "5rem",
              }}
            >
              <Pagination total={556} />
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}

function SelectFilter() {
  const [value, setValue] = React.useState("MOST RECENT");
  return (
    <Select value={value} onChange={val => setValue(val)} style={{ width: "16rem", zIndex: 10 }}>
      <Select.Option value="MOST RECENT">MOST RECENT</Select.Option>
    </Select>
  );
}
