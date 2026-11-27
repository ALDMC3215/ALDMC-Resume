import Container from 'react-bootstrap/Container';
import { ArrowLeft } from 'lucide-react';

const interests = [
  {
    title: 'موسیقی و کاور آرت',
    description: 'ساخت قطعه و طراحی کاور در ALDMC Studio.',
    image: '/music/studio/030.webp',
    href: '#music',
    label: 'شنیدن قطعه‌ها',
  },
  {
    title: 'قصه‌گویی تصویری با هوش مصنوعی',
    description: 'از استوری‌بورد تا ساخت ویدیو با فرم‌های کاغذی و مقوایی.',
    image: '/projects/covers/habisa-ai-desktop.webp',
    href: '#work-habisa-ai',
    label: 'دیدن پروژهٔ هابیسا',
  },
  {
    title: 'طراحی سیستم و وب تعاملی',
    description: 'ساخت رابط‌های فارسی و انگلیسی و تجربه‌های تعاملی برای وب.',
    image: '/projects/covers/aldmc-design-system-desktop.webp',
    href: '#work-aldmc-design-system',
    label: 'دیدن دیزاین سیستم',
  },
];

export function Interests() {
  return (
    <section className="section interests paper-edge" id="interests" aria-labelledby="interests-title" tabIndex={-1} data-scene>
      <Container className="frame">
        <h2 className="script-title" id="interests-title" lang="en" dir="ltr" data-reveal>Creative Interests</h2>
        <div className="interests__grid">
          {interests.map(({ title, description, image, href, label }) => (
            <article className="interest" key={href} data-reveal>
              <img src={image} alt="" width={560} height={350} loading="lazy" decoding="async" />
              <div className="interest__copy">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={href}>{label}<ArrowLeft size={16} aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
