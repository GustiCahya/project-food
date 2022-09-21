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

export default function Signup_2() {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  return (
    <Container style={{ backgroundColor: "#fafafa", paddingTop: "12rem", paddingBottom: "5rem" }} boxStyle={{ minHeight: "100vh" }}>
      <MainCard>
        <Form layout="vertical">
          <Row>
            <Col xs={24}>
              <h1 style={{ fontSize: "3.5rem", marginTop: biggerThan768 ? 0 : "2rem" }}>Create an Account</h1>
              <p>
                Required fields <span className="required">*</span>
              </p>
              <Divider></Divider>
              <Form.Item
                label={
                  <span>
                    Are you a Creator (restaurant, bar, small business) or a Collector?{" "}
                    <span className="required">*</span>
                  </span>
                }
              >
                <Select>
                  <Select.Option value="Test">Test</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Email <span className="required">*</span>
                  </span>
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    FB / Instagram <span className="required">*</span>
                  </span>
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    User Name <span className="required">*</span>
                  </span>
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Business Name <span className="required">*</span>
                  </span>
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Business Address <span className="required">*</span>
                  </span>
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Phone <span className="required">*</span>
                  </span>
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Upload ID <span className="required">*</span>
                  </span>
                }
              >
                <UploadInput />
              </Form.Item>
              <Form.Item>
                <Button
                  style={{
                    background: "black",
                    color: "white",
                    width: "100%",
                    boxSizing: "content-box",
                    padding: "0.8rem 0",
                  }}
                >
                  SIGN UP
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
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
