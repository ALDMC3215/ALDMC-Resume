import React from 'react';

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  width = 140,
  height = 'auto',
  color = 'currentColor',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1418.2 358.0"
      width={width}
      height={height}
      className={`aldmc-logo ${className}`}
      style={{ color, display: 'inline-block', verticalAlign: 'middle' }}
      aria-label="ALDMC Logo"
      role="img"
    >
      <title>ALDMC</title>
      <g fill={color} fillRule="nonzero">
        {/* A */}
        <path d="M48 310 244 48H346V310H294V229H180.5L214.5 183H294V94H276Q272.5 94 270.3 97.3L110 310H48Z" />
        {/* L */}
        <path d="M366.5 48H420.9V215C420.9 246 436.5 263.3 464.5 263.3H544.5L568.2 309H425.5C389.5 309 366 289 366 256L366.5 48Z" />
        {/* D */}
        <path d="M563.2 48H677.2C752.2 48 805.7 99 805.7 177C805.7 253 756.2 309 686.2 309H584.2V113.6H636.6V259.6H672.2C718.2 259.6 749.7 223 749.7 177C749.7 130 719.2 97 674.2 97H589.2L563.2 48Z" />
        {/* M */}
        <path d="M820.2 48H863.2C868.2 48 871.2 50 875.2 55L959 162Q966.4 169.2 974.5 162L1061.7 52.5Q1066.2 48 1072.2 48H1114.2V309H1057.8V148L986.2 234.9Q966.2 252.3 946.8 235L876.2 148V309H820.2V48Z" />
        {/* C */}
        <path d="M1370.2 48 1335.2 97.7H1258.2C1213.2 97.7 1181.7 134.5 1181.7 180C1181.7 225.4 1214.2 259.6 1257.2 259.6H1336.1L1370.2 309.1H1253.2C1179.2 309.1 1128.2 254.5 1128.2 179C1128.2 105 1180.2 48 1253.2 48H1370.2Z" />
      </g>
    </svg>
  );
};

export default Logo;
