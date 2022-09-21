import React from "react";
import { Button, Input } from "antd";
import { useMediaPredicate } from "react-media-hook";

export default function TextInputButton({titleInput, titleButton, styleInput = {}, styleButton = {}, prefix}) {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  return (
    <div style={{whiteSpace: biggerThan768 ? "nowrap" : undefined}}>
      <Input
        prefix={prefix}
        placeholder={titleInput}
        style={{
          backgroundColor: "#2b2e2c",
          border: "none",
          color: "#2b2e2c",
          borderRadius: "5rem",
          marginBottom: "1rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "2rem",
          paddingRight: biggerThan768 ? "10rem" : "2rem",
          width: biggerThan768 ? "25rem" : "100%",
          textAlign: biggerThan768 ? "left" : "center",
          color: "white",
          zIndex: 5,
          ...styleInput
        }}
      />
      <Button
        style={{
          position: biggerThan768 ? "relative" : undefined,
          backgroundColor: "#86ffac",
          border: "none",
          color: "#1e2722",
          borderRadius: "5rem",
          marginBottom: "1rem",
          padding: ".3rem 0",
          boxSizing: "content-box",
          left: biggerThan768 ? "-6rem" : undefined,
          width: biggerThan768 ? "15rem" : "100%",
          zIndex: 7,
          ...styleButton
        }}
      >
        {titleButton}
      </Button>
    </div>
  );
}
