import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import { useMediaPredicate } from "react-media-hook";

export default function CardOffer({ coverImage, style = {} }) {
  const lessThan1200 = useMediaPredicate("(max-width: 1200px)");
  const lessThan1000 = useMediaPredicate("(max-width: 1000px)");
  const lessThan660 = useMediaPredicate("(max-width: 660px)");
  const lessThan360 = useMediaPredicate("(max-width: 360px)");
  return (
    <Card
      className="cardOffer"
      style={{
        borderRadius: "2rem",
        marginBottom: "3rem",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        ...style,
      }}
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
          <button className="buttonCardOffer">BUY NOW</button>
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
      <Row style={{ alignItems: "center", marginBottom: "2rem" }} gutter={10}>
        <Col style={{ flexDirection: "row", marginRight: "auto" }}>
          <h1 style={{ display: "block", fontWeight: "bold", fontSize: "2rem", marginBottom: "0" }}>Cheese Tasting</h1>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <img src={require("../assets/pictures/share_ic.svg").default} />
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
        <Col
          xs={12}
          sm={12}
          md={12}
          style={{ paddingTop: "1rem" }}
        >
          <p style={{ display: "block", fontSize: "1.3rem", fontFamily: "WorkSansItalic" }}>creator</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={require("../assets/pictures/creator_1.png").default}
              style={{ marginRight: "1rem", width: "3.2rem", height: "3.2rem", aspectRatio: "1 / 1" }}
            />
            <p style={{ margin: 0, color: "#181a19" }}>Moonshine</p>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          style={{ paddingTop: "1rem" }}
        >
          <p style={{ display: "block", fontSize: "1.3rem", fontFamily: "WorkSansItalic" }}>owner</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={require("../assets/pictures/creator_1.png").default}
              style={{ marginRight: "1rem", width: "3.2rem", height: "3.2rem", aspectRatio: "1 / 1" }}
            />
            <p style={{ margin: 0, color: "#181a19" }}>Moonshine</p>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
