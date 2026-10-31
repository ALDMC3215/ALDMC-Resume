import React from 'react';

interface MonogramProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export const Monogram: React.FC<MonogramProps> = ({
  className = '',
  width = 36,
  height = 'auto',
  color = 'currentColor',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 394.0 358.0"
      width={width}
      height={height}
      className={`aldmc-monogram ${className}`}
      style={{ color, display: 'inline-block', verticalAlign: 'middle' }}
      aria-label="ALDMC Monogram"
      role="img"
    >
      <title>ALDMC Monogram</title>
      <g transform="translate(48 48) scale(1.0)">
        <path
          d="M103.5 523 L299.5 261 H401.5 V523 H349.5 V442 H236 L270 396 H349.5 V307 H331.5 Q328 307 325.8 310.3 L165.5 523 Z"
          fill="currentColor"
          transform="translate(-103.5 -261.0)"
        />
      </g>
    </svg>
  );
};
