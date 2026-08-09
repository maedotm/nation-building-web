'use client';
import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { pageWidth } from '@/app/styles';

type Props = {
  eyebrow: string;
  number: string;
  title: string;
  subtitle?: string;
  onDark?: boolean;
  children?: ReactNode;
};

export default function PageHeader({ eyebrow, number, title, subtitle, onDark }: Props) {
  return (
    <section
      className={`relative pt-20 ${
        onDark
          ? 'bg-[linear-gradient(115deg,rgba(9,76,67,.98)_0%,rgba(11,60,53,.9)_49%,rgba(14,51,45,.72)_100%)] bg-cover bg-center text-white'
          : 'bg-pearl'
      }`}
    >
      <div className={`${pageWidth} pb-[70px] pt-20`}>
        <div
          className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.1em] ${
            onDark ? 'text-white/50' : 'text-[#78928d]'
          }`}
        >
          <Link className={onDark ? 'hover:text-mint' : 'hover:text-teal'} to="/">
            Home
          </Link>
          <ChevronRight size={13} />
          <span>{eyebrow}</span>
        </div>
        <div
          className={`mt-6 flex max-w-[330px] justify-between gap-8 border-b border-current pb-3 font-mono text-[10px] uppercase tracking-[.14em] ${
            onDark ? 'text-mint' : 'text-teal'
          }`}
        >
          <span>{eyebrow}</span>
          <span className="opacity-55">{number}</span>
        </div>
        <h1 className="mt-5 max-w-[800px] text-[40px] font-medium leading-[1.05] tracking-[-.045em] lg:text-[68px]">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-[18px] max-w-[560px] text-[17px] leading-[1.5] opacity-80 ${
              onDark ? '' : 'text-[#58736d] opacity-100'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}