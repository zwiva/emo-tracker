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
      height="150"
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
            strokeWidth: 1.5,
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
        {/* start */}
        <circle cx="1.4" cy="5.2" r="1.3" className="fill-color" />
        {/* green */}
        <circle cx="21.05" cy="5.2" r="1.3" fill="rgba(26, 181, 26, 0.75)" />
        {/* yellow */}
        <circle cx="40.7" cy="5.2" r="1.3" fill="rgba(255, 238, 84, 0.85)" fillOpacity="0.75" />
        {/* red */}
        <circle cx="60.35" cy="5.2" r="1.3" fill="rgba(255, 84, 84, 0.85)" />
        {/* end */}
        <circle cx="80" cy="5.2" r="1.3" fill="white" />

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
          d={`M ${position},3.7 V 7.25`} // min: 1 max: 80
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
            fontSize: '0.2em',
            fill: '#7a7a7a',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="0"
          y="-3"
        >
          <tspan>{t("cycleDays")}</tspan>
        </text>

        {/* month values */}
        {bottomValues.map((value, index) => (
          <text
            key={`bottom-${index}`}
            style={{
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '0.15em',
              fill: '#ffffff',
              stroke: 'none',
              strokeWidth: 0.5
            }}
            x={(index * 18.65)}
            y="11"
          >
            <tspan>{value}</tspan>
          </text>
        ))}

        {/* text date */}
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.2em',
            fill: '#7a7a7a',
            stroke: 'none',
            strokeWidth: 0.5,
          }}
          x="0"
          y="15.5"
        >
          <tspan>{t("date")}</tspan>
        </text>

        {/* 1 */}
        <circle cx="11.2" cy="1.75" r="1.5" fill="transparent" stroke='white' strokeWidth='0.15' />
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.15em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5,
            border: '1px solid white',
            borderRadius: '50%'
          }}
          x="10.5"
          y="2.5"
        >
          <tspan>{1}</tspan>
        </text>

        {/* 2 */}
        <circle cx="30.8" cy="1.75" r="1.5" fill="transparent" stroke='white' strokeWidth='0.15' />
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.15em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="30"
          y="2.5"
        >
          <tspan>{2}</tspan>
        </text>

        {/* 3 */}
        <circle cx="50.85" cy="1.75" r="1.5" fill="transparent" stroke='white' strokeWidth='0.15' />
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.15em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="50"
          y="2.5"
        >
          <tspan>{3}</tspan>
        </text>

        {/* 4 */}
        <circle cx="70.9" cy="1.75" r="1.5" fill="transparent" stroke='white' strokeWidth='0.15' />
        <text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '0.15em',
            fill: '#ffffff',
            stroke: 'none',
            strokeWidth: 0.5
          }}
          x="70"
          y="2.5"
        >
          <tspan>{4}</tspan>
        </text>
      </g>
    </svg>
  );
};

export default Line;