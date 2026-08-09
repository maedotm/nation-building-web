'use client';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles } from 'lucide-react';
import { pageWidth } from '@/app/styles';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/book', label: 'About the Book' },
  { to: '/book#contents', label: 'Contents' },
  { to: '/author', label: 'Author' },
  { to: '/research', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

const academicLinks = [
  { href: 'https://link.springer.com/book/10.1007/978-3-032-25701-7', label: 'Springer Nature / Palgrave Macmillan' },
  { href: 'https://orcid.org/0000-0003-2152-0366', label: 'ORCID: 0000-0003-2152-0366' },
  { href: 'https://www.researchgate.net/scientific-contributions/Ambaw-Desalegn-2195330478', label: 'ResearchGate Profile' },
  { href: 'https://link.springer.com/book/10.1007/978-3-032-25701-7', label: 'SpringerLink' },
];

const footerLink = 'mb-3 flex items-center gap-1.5 text-[11px] text-[#c0d8d2] transition-colors hover:text-white';

export default function Footer() {
  return (
    <footer className="border-t border-mint/20 bg-deep py-16 pb-10 text-white">
      <div className={`grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_.65fr_.9fr_1fr] lg:gap-[60px] ${pageWidth}`}>
        <div className="sm:col-span-2 lg:col-span-1">
          <Link className="inline-flex items-center gap-3 transition-opacity hover:opacity-85" to="/">
            <span className="grid w-[25px] rotate-45 grid-cols-2 gap-0.5">
              <span className="block bg-mint" />
              <span className="block bg-mint-deep" />
              <span className="block bg-mint-deep" />
              <span className="block bg-mint" />
            </span>
            <span className="grid grid-cols-[auto_auto] gap-x-[5px] text-[11px] leading-[.82] tracking-[.16em]">
              <strong>BUILDING</strong>
              <em className="col-start-2 row-start-1 ml-px self-center font-serif text-[11px] italic">the</em>
              <strong className="col-span-2">NATION</strong>
            </span>
          </Link>
          <p className="mt-6 max-w-[240px] text-[11px] leading-[1.7] text-[#8eb2a9]">
            Building the Nation: Infrastructure, Equity, and Federalism in Ethiopia by Desalegn Ambaw (Ph.D.). Published
            by Palgrave Macmillan Cham (Springer Nature).
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[.12em] text-mint">Quick Links</h4>
          {quickLinks.map((item) => (
            <Link key={item.label} to={item.to} className={footerLink}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[.12em] text-mint">Academic Links</h4>
          {academicLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={footerLink}>
              {item.label} <ExternalLink size={12} />
            </a>
          ))}
        </div>

        <div className="border-l border-mint/20 pl-8 lg:pl-8">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase leading-[1.5] text-mint">
            <Sparkles size={17} /> A public scholarship project
          </div>
          <p className="mt-11 font-mono text-[10px] leading-[1.6] text-[#779d94]">
            © 2026 Desalegn Ambaw. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}