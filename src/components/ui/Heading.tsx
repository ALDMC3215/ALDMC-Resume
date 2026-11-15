import React from 'react';

interface HeadingProps {
  title: string;
  sub?: string;
  id?: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, sub, id }) => (
  <div className="heading">
    <h2 className="heading__title" id={id}>
      {title}
    </h2>
    {sub && <p className="heading__sub">{sub}</p>}
  </div>
);

export default Heading;
