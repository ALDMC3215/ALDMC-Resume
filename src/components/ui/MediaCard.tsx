import type { ButtonHTMLAttributes, ReactNode } from 'react';

type MediaCardProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> & {
  title: ReactNode;
  caption: ReactNode;
};

export function MediaCard({ title, caption, children, className = '', ...props }: MediaCardProps) {
  return (
    <button type="button" className={('work d-flex flex-column w-100 h-100 ' + className).trim()} {...props}>
      <span className="work__media position-relative d-block w-100 overflow-hidden">{children}</span>
      <span className="work__caption d-flex align-items-center justify-content-between">
        <span className="work__title">{title}</span>
        <span className="work__cat lt">{caption}</span>
      </span>
    </button>
  );
}
