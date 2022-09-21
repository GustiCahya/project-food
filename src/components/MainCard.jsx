import React from "react";
import { Card } from "antd";
import { useMediaPredicate } from "react-media-hook";

export default function MainCard({ children, style = {}, ...props }) {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  return (
    <Card
      style={{
        maxWidth: biggerThan768 ? "77rem" : undefined,
        borderRadius: biggerThan768 ? "2rem" : undefined,
        padding: biggerThan768 ? "2rem 3rem" : undefined,
        margin: biggerThan768 ? "0 auto" : undefined,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        ...style
      }}
      {...props}
    >
      {children}
    </Card>
  );
}
