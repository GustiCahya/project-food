import React from "react";
import { Row, Col, Button, Card, Layout, Tabs, List, Avatar, Divider, Image, Statistic, Rate } from "antd";
import { BrowserRouter, Route, NavLink, Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft, BsAsterisk } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";
import Container from "../../components/Container";
import TextInputButton from "../../components/TextInputButton";

const contents = [
  {
    title: "ABOUT MMINT",
  },
  {
    title: "CREATE AN OFFER",
  },
  {
    title: "TERMS OF SERVICE",
  },
  {
    title: "PRIVACY POLICY",
  },
];

export default function Content() {
  const [currectContentIdx, setCurrentContentIdx] = React.useState(0);
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const heightBiggerThan1023 = useMediaPredicate("(min-height: 1023px)");
  return (
    <Container style={{ backgroundColor: "#fafafa", paddingTop: "9rem", paddingBottom: "5rem" }} boxStyle={{ minHeight: "100vh" }}>
      <Row
        gutter={{
          xs: 20,
          md: 60,
        }}
      >
        <Col xs={24} xl={heightBiggerThan1023 ? 24 : 6}>
          <div
            style={{
              width: "100%",
              height: ".25rem",
              backgroundColor: "#181a19",
              marginTop: biggerThan768 ? "1.8rem" : 0,
            }}
          ></div>
          <List
            itemLayout="horizontal"
            dataSource={contents}
            renderItem={(item, idx) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <a
                      style={{
                        fontWeight: idx === currectContentIdx ? "bold" : undefined
                      }}
                      onClick={e => {
                        e.preventDefault();
                        setCurrentContentIdx(idx);
                      }}
                    >
                      {item.title}
                    </a>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} xl={heightBiggerThan1023 ? 24 : 18}>
          <DisplayContent currectContentIdx={currectContentIdx} />
        </Col>
      </Row>
    </Container>
  );
}

function DisplayContent({currectContentIdx}) {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  switch (currectContentIdx) {
    case 0:
      return (
        <div>
          <h1 style={{ fontSize: "3.5rem", marginTop: biggerThan768 ? 0 : "2rem" }}>About mmmint</h1>
          <Divider></Divider>
          <h2 style={{ fontSize: "2rem" }}>What is mmmint?</h2>
          <h3 style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus accusantium quas eveniet facilis odit,
            quisquam illo nemo deleniti iusto.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
          <h2 style={{ fontSize: "2rem" }}>How does it work?</h2>
          <h3 style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus accusantium quas eveniet facilis odit,
            quisquam illo nemo deleniti iusto.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      );
    case 1:
      return (
        <div>
          <h1 style={{ fontSize: "3.5rem", marginTop: biggerThan768 ? 0 : "2rem" }}>Create an Offer</h1>
          <Divider></Divider>
          <h2 style={{ fontSize: "2rem" }}>Lorem Ipsum</h2>
          <h3 style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus accusantium quas eveniet facilis odit,
            quisquam illo nemo deleniti iusto.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
          <h2 style={{ fontSize: "2rem" }}>Lorem Ipsum</h2>
          <h3 style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus accusantium quas eveniet facilis odit,
            quisquam illo nemo deleniti iusto.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      );
    case 2:
      return (
        <div>
          <h1 style={{ fontSize: "3.5rem", marginTop: biggerThan768 ? 0 : "2rem" }}>Term and Condition</h1>
          <Divider></Divider>
          <h2 style={{ fontSize: "2rem" }}>Lorem Ipsum</h2>
          <h3 style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus accusantium quas eveniet facilis odit,
            quisquam illo nemo deleniti iusto.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
          <h2 style={{ fontSize: "2rem" }}>Lorem Ipsum</h2>
          <h3 style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus accusantium quas eveniet facilis odit,
            quisquam illo nemo deleniti iusto.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      );
    case 3:
      return (
        <div>
          <h1 style={{ fontSize: "3.5rem", marginTop: biggerThan768 ? 0 : "2rem" }}>Privacy Policy</h1>
          <Divider></Divider>
          <h2 style={{ fontSize: "2rem" }}>Lorem Ipsum</h2>
          <h3 style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus accusantium quas eveniet facilis odit,
            quisquam illo nemo deleniti iusto.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
          <h2 style={{ fontSize: "2rem" }}>Lorem Ipsum</h2>
          <h3 style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus accusantium quas eveniet facilis odit,
            quisquam illo nemo deleniti iusto.
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      );
  }
}
