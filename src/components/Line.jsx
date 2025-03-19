import { useTranslation } from "react-i18next";

const Line = ({ topValues, bottomValues, position }) => {
  // console.log('topValues', topValues);
  // console.log('bottomValues', bottomValues);
  // console.log('position', position);

  const { t, i18n } = useTranslation();

  return (
    <svg
      width="480"
      height="140"
      viewBox="0 0 85 10"
      // style={{ backgroundColor: 'blue' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* main line */}
        <path // linea blanca
          style={{
            fill: 'none',
            stroke: '#ffffff',
            strokeWidth: 0.5,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            strokeOpacity: 1
          }}
          d="M 1.0,5.3 H 80.0"
        />
        {/* color dots */}
        <path
          style={{
            opacity: 1,
            fill: '#ff00c0',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0
          }}
          d="m 2.5,5.2 a 1.3,1.3 0 0 1 -1.3,1.3 1.3,1.3 0 0 1 -1.3,-1.3 1.3,1.3 0 0 1 1.3,-1.3 1.3,1.3 0 0 1 1.3,1.3"
        />
        <path
          style={{
            opacity: 1,
            fill: '#1ab51a',
            fillOpacity: 0.75,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0
          }}
          d="m 22.17,5.2 a 1.0,1.0 0 0 1 -1.0,1.0 1.0,1.0 0 0 1 -1.0,-1.0 1.0,1.0 0 0 1 1.0,-1.0 1.0,1.0 0 0 1 1.0,1.0"
        />
        <path
          style={{
            opacity: 1,
            fill: '#f6e731',
            fillOpacity: 0.75,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0
          }}
          d="m 41.84,5.2 a 1.0,1.0 0 0 1 -1.0,1.0 1.0,1.0 0 0 1 -1.0,-1.0 1.0,1.0 0 0 1 1.0,-1.0 1.0,1.0 0 0 1 1.0,1.0"
        />
        <path
          style={{
            opacity: 0.85,
            fill: '#ff5454',
            fillOpacity: 0.85,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0
          }}
          d="m 61.51,5.2 a 1.0,1.0 0 0 1 -1.0,1.0 1.0,1.0 0 0 1 -1.0,-1.0 1.0,1.0 0 0 1 1.0,-1.0 1.0,1.0 0 0 1 1.0,1.0"
        />
        <path
          style={{
            opacity: 1,
            fill: '#ff00c0',
            fillOpacity: 1,
            fillRule: 'evenodd',
            stroke: 'none',
            strokeWidth: 0
          }}
          d="m 81.2,5.2 a 1.3,1.3 0 0 1 -1.3,1.3 1.3,1.3 0 0 1 -1.3,-1.3 1.3,1.3 0 0 1 1.3,-1.3 1.3,1.3 0 0 1 1.3,1.3"
        />
        {/* color position */}
        <path // barra color
          style={{
            fill: '#0066ff',
            stroke: '#0066ff',
            strokeWidth: 1,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            strokeOpacity: 1
          }}
          d={`M ${position},2.5 V 8.0`} // min: 1 max: 80
        />

        {/* cycle values */}
        {topValues.map((value, index) => (
          <text
            key={index}
            style={{
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '0.2em',
              fill: '#909090',
              stroke: 'none',
              strokeWidth: 0.5
            }}
            x={(index * 19.25)}
            y="1.5"
          >
            <tspan>{value}</tspan>
          </text>
        ))}

        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.16em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="0"
          y="-4"
        >
          <tspan>{t("cycle")}</tspan>
        </text>

        {/* month values */}
        {bottomValues.map((value, index) => (
          <text
            key={`bottom-${index}`}
            style={{
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '0.16em',
              fill: '#ffffff',
              stroke: 'none',
              strokeWidth: 0.5
            }}
            x={(index * 19)}
            y="11.50"
          >
            <tspan>{value}</tspan>
          </text>
        ))}
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.16em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="76"
          y="16.75"
        >
          <tspan>{t("date")}</tspan>
        </text>

      </g>
    </svg>
  );
};

export default Line;