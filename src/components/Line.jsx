import { useTranslation } from "react-i18next";

const Line = ({ topValues, bottomValues, position }) => {
  // console.log('topValues', topValues);
  // console.log('bottomValues', bottomValues);
  // console.log('position', position);

  const { t, i18n } = useTranslation();
  const colorPink = getComputedStyle(document.documentElement).getPropertyValue('--color-pink').trim();

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

        <path // avance linea color 
          style={{
            fill: '#741fff',
            // stroke: '#741fff',
            stroke: colorPink,
            strokeWidth: 1.15,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            strokeOpacity: 1
          }}
          // d="M 1.0,5.3 H 80.0"
          d={`M 1.0,5.3 H ${position}.0`}
        />
        {/* color dots */}
        <path
          style={{
            opacity: 1,
            // fill: '#ff00c0',
            fillOpacity: 1,
            fillRule: 'evenodd',
            // stroke: 'none',
            // strokeWidth: 0.25
          }}
          className="fill-color"
          d="m 2.7,5.2 a 1.3,1.3 0 0 1 -1.3,1.3 1.3,1.3 0 0 1 -1.3,-1.3 1.3,1.3 0 0 1 1.3,-1.3 1.3,1.3 0 0 1 1.3,1.3"
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
            // fill: '#ff00c0',
            fillOpacity: 1,
            fillRule: 'evenodd',
            // stroke: 'none',
            // strokeWidth: 0.25
          }}
          className="fill-color"
          d="m 81.2,5.2 a 1.3,1.3 0 0 1 -1.3,1.3 1.3,1.3 0 0 1 -1.3,-1.3 1.3,1.3 0 0 1 1.3,-1.3 1.3,1.3 0 0 1 1.3,1.3"
        />
        {/* color position */}
        <path // barra color
          style={{
            // fill: '#741fff',
            // stroke: '#741fff',
            strokeWidth: 0.9,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            strokeOpacity: 1
          }}
          className="stroke-color"
          d={`M ${position},2.45 V 8.0`} // min: 1 max: 80
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

        {/* text cycle */}
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

        {/* text date */}
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.16em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="77"
          y="16.4"
        >
          <tspan>{t("date")}</tspan>
        </text>

        {/* 1 */}
        <circle cx="10.75" cy="15.25" r="2" fill="transparent" stroke='white' strokeWidth='0.25' />
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.16em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5,
            border: '1px solid white',
            borderRadius: '50%'
          }}
          x="10"
          y="16.2"
        >
          <tspan>{1}</tspan>
        </text>

        {/* 2 */}
        <circle cx="30.8" cy="15.25" r="2" fill="transparent" stroke='white' strokeWidth='0.25' />
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.16em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="30"
          y="16.2"
        >
          <tspan>{2}</tspan>
        </text>

        {/* 3 */}
        <circle cx="50.9" cy="15.25" r="2" fill="transparent" stroke='white' strokeWidth='0.25' />
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.16em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="50"
          y="16.2"
        >
          <tspan>{3}</tspan>
        </text>

        {/* 4 */}
        <circle cx="70.9" cy="15.25" r="2" fill="transparent" stroke='white' strokeWidth='0.25' />
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.16em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="70"
          y="16.2"
        >
          <tspan>{4}</tspan>
        </text>
      </g>
    </svg>
  );
};

export default Line;