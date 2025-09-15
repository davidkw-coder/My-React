import React from 'react';

/**
 * Reusable Footer component
 *
 * Props:
 * - brand: ReactNode | string (optional)
 * - links: Array<{ label: string, href: string, target?: string }>
 * - leftContent: ReactNode (optional)
 * - rightContent: ReactNode (optional)
 * - year: number (optional) — defaults to current year
 * - className: string (optional)
 * - style: React.CSSProperties (optional)
 */
const Footer = ({
  brand = null,
  links = [],
  leftContent = null,
  rightContent = null,
  year = new Date().getFullYear(),
  className = '',
  style = {},
}) => {
  return (
    <footer
      className={`l5-footer ${className}`.trim()}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        borderTop: '1px solid #e5e7eb',
        background: '#fafafa',
        color: '#4b5563',
        fontSize: '0.9rem',
        ...style,
      }}
      aria-label="Footer"
    >
      <div className="l5-footer__left" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {brand && (
          <div className="l5-footer__brand" style={{ fontWeight: 600, color: '#111827' }}>
            {typeof brand === 'string' ? <span>{brand}</span> : brand}
          </div>
        )}
        {leftContent}
      </div>

      <ul
        className="l5-footer__links"
        style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '1rem',
        }}
      >
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <a
              href={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              style={{ color: '#374151', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="l5-footer__right" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span>© {year}</span>
        {rightContent}
      </div>
    </footer>
  );
};

export default Footer;


