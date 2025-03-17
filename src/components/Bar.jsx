
const Bar = ({ fillPercentage = 50, rotation = 0 }) => {
  const maxHeight = 20.902084;
  const filledHeight = (fillPercentage / 100) * maxHeight;
  const yPosition = 2.7781246 + (maxHeight - filledHeight);

  return (
    <svg
      width="20"
      height="100"
      viewBox="0 0 5.2916664 26.458334"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center" }}
    >
      <g id="layer1">
        {/* Rectángulo de fondo */}
        <rect
          style={{
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "0.264583",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "4",
            strokeDasharray: "none",
            strokeOpacity: "1",
          }}
          width="2.3812504"
          height={maxHeight}
          x="1.4552082"
          y="2.7781246"
        />

        {/* Rectángulo de relleno dinámico */}
        <rect
          style={{
            fill: "#ffffff",
            stroke: "none",
          }}
          width="2.3812504"
          height={filledHeight}
          x="1.4552082"
          y={yPosition}
        />
      </g>
    </svg>
  );
};

export default Bar;
