import React from "react";
import {
  Row,
  Col,
  Button,
  message,
  Card,
  Layout,
  Tabs,
  List,
  Avatar,
  Divider,
  Image,
  Statistic,
  Rate,
  Form,
  Upload,
  Switch,
  DatePicker,
  Cascader,
  Select,
  Input,
  TreeSelect,
  InputNumber,
  Slider,
  Mentions,
  Radio,
} from "antd";
import { BrowserRouter, Route, NavLink, Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaEthereum } from "react-icons/fa";
import { UploadOutlined } from "@ant-design/icons";
import { BsImage } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";
import Container from "../../components/Container";
import TextInputButton from "../../components/TextInputButton";
import MainCard from "../../components/MainCard";
import TextArea from "antd/lib/input/TextArea";

export default function Signup_1() {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  return (
    <Container
      style={{ backgroundColor: "#fafafa", paddingTop: "12rem", paddingBottom: "5rem" }}
      boxStyle={{ minHeight: "100vh" }}
    >
      <MainCard>
        <Row style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <Col xs={24}>
            <h1 style={{ fontSize: "3.5rem", marginTop: biggerThan768 ? 0 : "2rem", marginBottom: "4rem" }}>
              Let's Connect Your{" "}
              <span
                style={{ borderBottom: "2px solid #71dc92", fontSize: "inherit", fontFamily: "DMSerifDisplayItalic" }}
              >
                Wallet
              </span>
            </h1>
          </Col>
          <Col xs={24}>
            <Row gutter={20} style={{ justifyContent: "center" }}>
              <Col xs={24} md={8}>
                <a
                  href="#"
                  style={{
                    minWidth: "20rem",
                    boxSizing: "content-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "black",
                    background: "#fafafa",
                    padding: "3.5rem 0",
                    marginBottom: biggerThan768 ? undefined : "2rem",
                    maxWidth: biggerThan768 ? undefined : "32rem",
                    marginLeft: biggerThan768 ? undefined : "auto",
                    marginRight: biggerThan768 ? undefined : "auto",
                  }}
                >
                  <img src={require("../../assets/pictures/metamask.png").default} style={{ height: "7.6rem" }} />
                  <span style={{ marginTop: "3rem", fontFamily: "WorkSansSemiBold" }}>METAMASK</span>
                </a>
              </Col>
              <Col xs={24} md={8}>
                <a
                  href="#"
                  style={{
                    minWidth: "20rem",
                    boxSizing: "content-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "black",
                    background: "#fafafa",
                    padding: "3.5rem 0",
                    marginBottom: biggerThan768 ? undefined : "2rem",
                    maxWidth: biggerThan768 ? undefined : "32rem",
                    marginLeft: biggerThan768 ? undefined : "auto",
                    marginRight: biggerThan768 ? undefined : "auto",
                  }}
                >
                  <img src={require("../../assets/pictures/coinbase.png").default} style={{ height: "7.6rem" }} />
                  <span style={{ marginTop: "3rem", fontFamily: "WorkSansSemiBold" }}>COINBASE WALLET</span>
                </a>
              </Col>
              <Col xs={24} md={8}>
                <a
                  href="#"
                  style={{
                    minWidth: "20rem",
                    boxSizing: "content-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "black",
                    background: "#fafafa",
                    padding: "3.5rem 0",
                    maxWidth: biggerThan768 ? undefined : "32rem",
                    marginLeft: biggerThan768 ? undefined : "auto",
                    marginRight: biggerThan768 ? undefined : "auto",
                  }}
                >
                  <img src={require("../../assets/pictures/wallet-connect.png").default} style={{ height: "7.6rem" }} />
                  <span style={{ marginTop: "3rem", fontFamily: "WorkSansSemiBold" }}>WALLET CONNECT</span>
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={24}>
            <Link
              to="/signup-2"
              style={{
                marginTop: "3rem",
                display: "inline-block",
                borderBottom: "1px solid black",
                color: "black",
                paddingBottom: ".3rem",
                fontSize: "1.1rem",
                fontFamily: "WorkSansSemiBold",
              }}
            >
              FIRST TIME SETTING UP A WALLET?
            </Link>
          </Col>
        </Row>
      </MainCard>
    </Container>
  );
}

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },

  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadInput = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);
