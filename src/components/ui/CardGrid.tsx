import { Children, type ReactNode } from 'react';
import Row, { type RowProps } from 'react-bootstrap/Row';

type GridProps = Pick<RowProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'className'> & {
  children: ReactNode;
};

export function CardGrid({ children, className = '', ...columns }: GridProps) {
  return (
    <Row as="ul" className={('resume-grid ' + className).trim()} {...columns}>
      {Children.map(children, child => <li className="d-flex">{child}</li>)}
    </Row>
  );
}
