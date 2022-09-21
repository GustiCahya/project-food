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
import { BsImage } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";
import Container from "../../components/Container";
import TextInputButton from "../../components/TextInputButton";
import MainCard from "../../components/MainCard";
import TextArea from "antd/lib/input/TextArea";

export default function CreateOffer() {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  // handle uploaded file
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <Container style={{ backgroundColor: "#fafafa", paddingTop: "12rem", paddingBottom: "5rem" }} boxStyle={{ minHeight: "100vh" }}>
      <MainCard>
        <Form layout="vertical">
          <Row>
            <Col xs={24}>
              <h1 style={{ fontSize: "3.5rem", marginTop: biggerThan768 ? 0 : "2rem" }}>Create an Offer</h1>
              <p>
                Required fields <span className="required">*</span>
              </p>
              <Divider></Divider>
              <h3 style={{ fontSize: "2rem" }}>
                Upload Offer Image <span className="required">*</span>
              </h3>
              <p>files types supported: (JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB)</p>
              <div>
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                  <Upload.Dragger
                    style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
                    name="files"
                    action="/upload.do"
                  >
                    <p className="ant-upload-drag-icon">
                      <BsImage style={{ fontSize: "4rem" }} />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  </Upload.Dragger>
                </Form.Item>
              </div>
              <Divider></Divider>
              <Form.Item label={<span>Name <span className="required">*</span></span>}>
                <Input />
              </Form.Item>
              <Form.Item label={<span>Description <span className="required">*</span></span>}>
                <TextArea rows={4} placeholder="Tell us what the offer is about" />
              </Form.Item>
              <Form.Item label={<span>Price <span className="required">*</span></span>}>
                <Input prefix={<FaEthereum style={{ color: "gray" }} />} placeholder="0.01 ($17)" />
              </Form.Item>
              <Form.Item label={<span>Number of Offers Supply <span className="required">*</span></span>}>
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label={<span>Buy It Now <span className="required">*</span></span>}>
                <Select>
                  <Select.Option value="Yes">Yes</Select.Option>
                  <Select.Option value="No">No</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label={<span>Make An Offer <span className="required">*</span></span>}>
                <Select>
                  <Select.Option value="Test">Test</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label={<span>Auction Bidding <span className="required">*</span></span>}>
                <Select>
                  <Select.Option value="Test">Test</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label={<span>Days to Offer Expiry <span className="required">*</span></span>}>
                <IntegerStep />
              </Form.Item>
              <Form.Item label={<span>Days to Redeem Offer <span className="required">*</span></span>}>
                <IntegerStep />
              </Form.Item>
              <Form.Item label={<span>Allow Affiliate Offer? <span className="required">*</span></span>}>
                <Select>
                  <Select.Option value="Test">Test</Select.Option>
                </Select>
                <p>
                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      color: "black",
                      paddingBottom: ".1rem",
                      borderBottom: ".1rem solid black",
                      marginTop: ".8rem",
                    }}
                  >
                    Learn more
                  </a>{" "}
                  about affiliates and approving users to promote your offers to their follower.
                </p>
              </Form.Item>
              <Form.Item label={<span>Affiliate commission per sale <span className="required">*</span></span>}>
                <RadioSelect />
                <p>
                  <a
                    href="#"
                    style={{
                      display: "inline-block",
                      color: "black",
                      paddingBottom: ".1rem",
                      borderBottom: ".1rem solid black",
                      marginTop: ".8rem",
                    }}
                  >
                    Learn more
                  </a>{" "}
                  about commission work.
                </p>
              </Form.Item>
              <Form.Item label={<span>Approved Affiliates <span className="required">*</span></span>}>
                <Mentions style={{ width: "100%" }} defaultValue="@afc163">
                  <Option value="afc163">afc163</Option>
                  <Option value="zombieJ">zombieJ</Option>
                  <Option value="yesmeck">yesmeck</Option>
                </Mentions>
              </Form.Item>
              <Form.Item label={<span>Tradeable/Transferrable <span className="required">*</span></span>}>
                <Select>
                  <Select.Option value="Test">Test</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label={<span>Offer URL <span className="required">*</span></span>}>
                <Input prefix="https://" />
              </Form.Item>
              <Form.Item label={<span>Tags <span className="required">*</span></span>}>
                <Select mode="tags" style={{ width: "100%" }} placeholder="This helps our search engine"></Select>
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
                  PUBLISH OFFER
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </MainCard>
    </Container>
  );
}

const RadioSelect = () => {
  const [inputValue, setInputValue] = React.useState("percent");

  const onChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <Row style={{ flexWrap: "nowrap" }}>
      <Col span={4}>
        <Radio.Group value={inputValue} onChange={onChange}>
          <Radio.Button value="percent">%</Radio.Button>
          <Radio.Button value="dollar">$</Radio.Button>
        </Radio.Group>
      </Col>
      <Col span={20}>
        <Select>
          <Select.Option value="Test">Test</Select.Option>
        </Select>
      </Col>
    </Row>
  );
};

const IntegerStep = () => {
  const [inputValue, setInputValue] = React.useState(1);

  const onChange = newValue => {
    setInputValue(newValue);
  };

  return (
    <Row gutter={16}>
      <Col span={20}>
        <Slider min={1} max={20} onChange={onChange} value={typeof inputValue === "number" ? inputValue : 0} />
      </Col>
      <Col span={4}>
        <Input min={1} max={20} style={{ width: "100%" }} value={inputValue} onChange={onChange} addonAfter="Days" />
      </Col>
    </Row>
  );
};
