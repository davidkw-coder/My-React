import React from 'react';

/**
 * Reusable Navbar component
 *
 * Props:
 * - brand: ReactNode | string
 * - links: Array<{ label: string, href: string, target?: string }>
 * - rightContent: ReactNode (optional)
 * - onLinkClick: (link, event) => void (optional)
 * - renderLink: (link) => ReactNode (optional)
 * - className: string (optional)
 * - style: React.CSSProperties (optional)
 */
const Navbar = ({
  brand,
  links = [],
  rightContent = null,
  onLinkClick,
  renderLink,
  className = '',
  style = {},
}) => {
  const handleLinkClick = (link) => (event) => {
    if (onLinkClick) {
      onLinkClick(link, event);
    }
  };

  return (
    <nav
      className={`l5-navbar ${className}`.trim()}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1rem',
        borderBottom: '1px solid #e5e7eb',
        background: '#ffffff',
        ...style,
      }}
      aria-label="Primary Navigation"
    >
      <div className="l5-navbar__brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {typeof brand === 'string' ? (
          <a href="#" style={{ textDecoration: 'none', color: '#111827', fontWeight: 600 }}>{brand}</a>
        ) : (
          brand
        )}
      </div>

      <ul
        className="l5-navbar__links"
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
            {renderLink ? (
              renderLink(link)
            ) : (
              <a
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={handleLinkClick(link)}
                style={{ color: '#374151', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="l5-navbar__right">{rightContent}</div>
    </nav>
  );
};

export default Navbar;


