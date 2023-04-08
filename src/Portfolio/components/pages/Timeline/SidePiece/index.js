import React from "react";
import { SidePieceContainer } from "./styles";
import { sideWidth, rowHeight, lineWidth,trainColor,trackColor } from "../constants";

function SidePiece({ shape, percent, forward }) {
  let width = sideWidth;
  let height = rowHeight;
  if (shape === "line") {
    let fillLength = percent * width;
    return <SidePieceContainer percent={percent}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} >
        <rect y={height / 2 - (lineWidth / 2)} width={width} height={lineWidth} fill={trackColor} />
        {forward && <rect y={height / 2 - (lineWidth / 2)} width={fillLength} height={lineWidth} fill={trainColor} />}
        {!forward && <rect y={height / 2 - (lineWidth / 2)} width={fillLength} height={lineWidth} fill={trainColor} x={width - fillLength} />}
      </svg>

    </SidePieceContainer>
  }
  else if (shape === "space") {
    return <SidePieceContainer percent={percent}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} ></svg>
    </SidePieceContainer>
  }
  else if (shape === "topRight") {
    let horizontalPercent = (percent > 0.5 ? 1 : percent * 2);
    let verticalPercent = percent > 0.5 ? (percent - 0.5) * 2 : 0;
    return <SidePieceContainer percent={percent}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
        <rect x={0} y={height / 2 - (lineWidth / 2)} width={width / 2 + lineWidth / 2} height={lineWidth} fill={trackColor} />
        <rect x={0} y={height / 2 - (lineWidth / 2)} width={horizontalPercent * (width / 2 + lineWidth / 2)} height={lineWidth} fill={trainColor} />
        <rect x={width / 2 - (lineWidth / 2)} y={height / 2 - (lineWidth / 2)} width={lineWidth} height={height / 2 + lineWidth / 2} fill={trackColor} />
        <rect x={width / 2 - (lineWidth / 2)} y={height / 2 - (lineWidth / 2)} width={lineWidth} height={verticalPercent * (height / 2 + lineWidth / 2)} fill={trainColor} />
      </svg>
    </SidePieceContainer>
  }
  else if (shape === "bottomRight") {
    let verticalPercent = (percent > 0.5 ? 1 : percent * 2);
    let horizontalPercent = percent > 0.5 ? (percent - 0.5) * 2 : 0;
    return <SidePieceContainer percent={percent}>
      <svg width={sideWidth} height={rowHeight} viewBox={`0 0 ${width} ${height}`} fill="none">
        <rect x={0} y={height / 2 - (lineWidth / 2)} width={width / 2 + lineWidth / 2} height={lineWidth} fill={trackColor} />
        <rect x={(1 - horizontalPercent) * (width / 2 + lineWidth / 2)} y={height / 2 - (lineWidth / 2)} width={horizontalPercent * (width / 2 + lineWidth / 2)} height={lineWidth} fill={trainColor} />
        <rect x={width / 2 - (lineWidth / 2)} y={0} width={lineWidth} height={height / 2 + lineWidth / 2} fill={trackColor} />
        <rect x={width / 2 - (lineWidth / 2)} y={0} width={lineWidth} height={verticalPercent * (height / 2 + lineWidth / 2)} fill={trainColor} />
      </svg>
    </SidePieceContainer>
  }
  else if (shape === "topLeft") {
    let horizontalPercent = (percent > 0.5 ? 1 : percent * 2);
    let verticalPercent = percent > 0.5 ? (percent - 0.5) * 2 : 0;
    return <SidePieceContainer percent={percent}>
      <svg width={sideWidth} height={rowHeight} viewBox={`0 0 ${width} ${height}`} fill="none">
        <rect x={(width / 2 - (lineWidth / 2))} y={height / 2 - (lineWidth / 2)} width={width / 2 + lineWidth / 2} height={lineWidth} fill={trackColor} />
        <rect x={(width / 2 - (lineWidth / 2)) + (1 - horizontalPercent) * (width / 2 + (lineWidth / 2))} y={height / 2 - (lineWidth / 2)} width={horizontalPercent * (width / 2 + lineWidth / 2)} height={lineWidth} fill={trainColor} />
        <rect x={width / 2 - (lineWidth / 2)} y={(height / 2 - (lineWidth / 2))} width={lineWidth} height={height / 2 + lineWidth / 2} fill={trackColor} />
        <rect x={width / 2 - (lineWidth / 2)} y={(height / 2 - (lineWidth / 2))} width={lineWidth} height={verticalPercent * (height / 2 + lineWidth / 2)} fill={trainColor} />
      </svg>
    </SidePieceContainer>
  }
  else if (shape === "bottomLeft") {
    let verticalPercent = (percent > 0.5 ? 1 : percent * 2);
    let horizontalPercent = percent > 0.5 ? (percent - 0.5) * 2 : 0;
    return <SidePieceContainer percent={percent}>
      <svg width={sideWidth} height={rowHeight} viewBox={`0 0 ${width} ${height}`} fill="none">
        <rect x={(width / 2 - (lineWidth / 2))} y={height / 2 - (lineWidth / 2)} width={width / 2 + lineWidth / 2} height={lineWidth} fill={trackColor} />
        <rect x={(width / 2 - (lineWidth / 2))} y={height / 2 - (lineWidth / 2)} width={horizontalPercent * (width / 2 + lineWidth / 2)} height={lineWidth} fill={trainColor} />
        <rect x={width / 2 - (lineWidth / 2)} y={0} width={lineWidth} height={height / 2 + lineWidth / 2} fill={trackColor} />
        <rect x={width / 2 - (lineWidth / 2)} y={0} width={lineWidth} height={verticalPercent * (height / 2 + lineWidth / 2)} fill={trainColor} />
      </svg>
    </SidePieceContainer>
  }
}
export default SidePiece;