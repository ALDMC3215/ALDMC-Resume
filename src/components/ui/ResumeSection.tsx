import type { PropsWithChildren } from 'react';
import Container from 'react-bootstrap/Container';
import { Heading } from './Heading';

type SectionProps = PropsWithChildren<{ id: string; title: string; sub: string }>;

export function ResumeSection({ id, title, sub, children }: SectionProps) {
  const titleId = id + '-title';
  return (
    <section id={id} className="section" aria-labelledby={titleId}>
      <Container fluid>
        <Heading id={titleId} title={title} sub={sub} />
        {children}
      </Container>
    </section>
  );
}
