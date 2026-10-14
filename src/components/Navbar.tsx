import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import headerLogo from '../assets/images/branding/01Tech to be continued.png';

const navigationItems = [
  { to: '/works', label: '作品總覽' },
  { to: '/exhibition', label: '展場資訊' },
  { to: '/news', label: '最新消息' },
  { to: '/about', label: '關於我們' },
  { to: '/qa', label: 'FQA' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const previousScrollY = useRef(0);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - previousScrollY.current;

      if (isOpen || currentScrollY < 72) {
        setIsHidden(false);
        previousScrollY.current = currentScrollY;
      } else if (scrollDifference > 8) {
        setIsHidden(true);
        previousScrollY.current = currentScrollY;
      } else if (scrollDifference < -8) {
        setIsHidden(false);
        previousScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header className={`site-header${isOpen ? ' is-menu-open' : ''}${isHidden ? ' is-hidden' : ''}`}>
      <div className="site-header__inner">
        <NavLink className="site-header__brand" to="/" aria-label="Tech to be continued，回到首頁" onClick={closeMenu}>
          <img src={headerLogo} alt="" />
        </NavLink>

        <nav className="site-header__desktop" aria-label="主要導覽">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `site-header__link${isActive ? ' is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isOpen ? '關閉選單' : '開啟選單'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`site-header__mobile${isOpen ? ' is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="行動版主要導覽">
          {navigationItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              tabIndex={isOpen ? 0 : -1}
              className={({ isActive }) => `site-header__mobile-link${isActive ? ' is-active' : ''}`}
              onClick={closeMenu}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
