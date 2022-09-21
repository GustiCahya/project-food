import React from "react";
import { Button, Input, InputNumber, Slider } from "antd";
import { useMediaPredicate } from "react-media-hook";

export default function DoubleSlider({ min = 0, max = 10000 }) {
  const [firstValue, setFirstValue] = React.useState(10)
  const [secondValue, setSecondValue] = React.useState(1000)
  const onChange = React.useCallback((val) => {
    setFirstValue(val[0]);
    setSecondValue(val[1]);
  }, [])
  return (
    <>
      <Slider range defaultValue={[firstValue, secondValue]} step={10} min={min} max={max} onChange={onChange}/>
      <InputNumber prefix="$" min={min} max={max} style={{ marginRight: "2rem" }} value={firstValue} />
      <InputNumber prefix="$" min={min} max={max} style={{}} value={secondValue} />
    </>
  );
}
