'use client';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { topbarWidth } from '@/app/styles';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/book', label: 'About the Book' },
  { to: '/book#contents', label: 'Contents' },
  { to: '/author', label: 'Author' },
  { to: '/book#reviews', label: 'Reviews' },
  { to: '/research', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'AM'>('EN');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location?.pathname || '/';
  const onDark = pathname === '/' || pathname === '/book' || pathname === '/research';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const showDark = onDark && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[70px] border-b transition-colors duration-300 sm:h-20 ${
        showDark
          ? 'border-white/[.18] bg-transparent text-white'
          : 'border-mint/20 bg-deep text-white'
      }`}
    >
      <div className={`flex items-center justify-between gap-9 ${topbarWidth}`}>
        <Link className="inline-flex items-center gap-3 text-left transition-opacity hover:opacity-85" to="/" onClick={closeMenu}>
          <span className="grid w-[25px] rotate-45 grid-cols-2 gap-0.5">
            <span className="block bg-mint" />
            <span className="block bg-mint-deep" />
            <span className="block bg-mint-deep" />
            <span className="block bg-mint" />
          </span>
          <span className="grid grid-cols-[auto_auto] gap-x-[5px] text-[11px] leading-[.82] tracking-[.16em]">
            <strong>BUILDING</strong>
            <em className="col-start-2 row-start-1 ml-px self-center font-serif text-[11px] not-italic italic">the</em>
            <strong className="col-span-2">NATION</strong>
          </span>
        </Link>

        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute inset-x-2 top-[70px] flex-col items-stretch gap-0 border border-mint/20 bg-deep p-4 sm:top-20 lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={closeMenu}
              className={`border-b border-mint/10 px-2 py-3.5 text-left text-[11px] uppercase tracking-[.09em] opacity-70 transition-opacity hover:text-mint hover:opacity-100 lg:border-0 lg:px-0 lg:py-1 ${
                pathname === item.to ? 'text-mint opacity-100' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-6 lg:ml-0">
          <div className="hidden items-center gap-1.5 font-mono text-[11px] text-white/50 sm:flex" aria-label="Language selector">
            <button
              className={language === 'EN' ? 'text-mint opacity-100' : 'opacity-50'}
              onClick={() => setLanguage('EN')}
            >
              EN
            </button>
            <span>/</span>
            <button
              className={language === 'AM' ? 'text-mint opacity-100' : 'opacity-50'}
              onClick={() => setLanguage('AM')}
            >
              AM
            </button>
          </div>
          <button
            className="block bg-transparent text-black lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a
            className="hidden items-center gap-2 bg-black px-4 py-3 text- uppercase tracking-[.06em] text-deep transition-all hover:-translate-y-0.5 hover:bg-mint lg:inline-flex"
            href="https://link.springer.com/book/10.1007/978-3-032-25701-7"
            target="_blank"
            rel="noreferrer"
          >
            Buy the Book <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}